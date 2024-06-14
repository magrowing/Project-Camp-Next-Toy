import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GitHub from 'next-auth/providers/github';
import { compare } from 'bcryptjs';

import connectDB from './lib/db';
import { User } from './lib/schema';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('credentials', credentials);
        const { email, password } = credentials;

        if (!email || !password) {
          throw new CredentialsSignin('입력사항값 부족합니다.');
        }

        //DB연동
        connectDB();

        const user = await User.findOne({ email }).select('+password');
        if (!user) {
          throw new CredentialsSignin('가입되지 않은 회원입니다.');
        }

        const isMatched = await compare(String(password), user.password);
        if (!isMatched) {
          throw new CredentialsSignin('비밀번호가 일치하지 않습니다.');
        }

        return {
          name: user.name,
          email: user.email,
          id: user._id,
        };
      },
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log('signIn', user, account);

      if (account?.provider === 'github') {
        const { name, email } = user;
        await connectDB();

        const existingUser = await User.findOne({
          email,
          authProviderId: 'github',
        });

        if (!existingUser) {
          // 소셜 가입
          await new User({
            name,
            email,
            authProviderId: 'github',
          }).save();
        }

        const socialUser = await User.findOne({
          name,
          authProviderId: 'github',
        });

        user.id = socialUser?._id || null;

        return true;
      } else {
        return true;
      }
    },
    async jwt({ token, user }) {
      console.log('jwt', token, user);
      if (user) {
        token.sub = user.id; // JWT 토큰에 사용자 ID 추가
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});
