import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
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
  ],
});
