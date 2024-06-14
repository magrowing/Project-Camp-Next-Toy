'use server';

import { redirect } from 'next/navigation';
import { hash } from 'bcryptjs';

import { signIn } from '@/auth';

import connectDB from './db';
import { User } from './schema';

export async function registerAction(
  prevState: { success: boolean; message: string },
  formData: FormData
) {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const checkbox = formData.get('checkbox');

  if (!name || !email || !password || checkbox !== 'on') {
    return { success: false, message: '입력사항들을 확인해주세요!' };
  }

  connectDB();

  // 기존회원의 email을 통해 조회 : 중복 Email 로그인 되지않도록
  const existingUser = await User.find({ email });
  console.log(existingUser); // null
  if (existingUser.length) {
    return {
      success: false,
      message: `이미 가입된 Email입니다.다른 Email을 사용해주세요!`,
    };
  }

  //기존회원이 아니라면
  const hashPassword = await hash(String(password), 10);
  const user = new User({
    name,
    email,
    password: hashPassword,
  });

  await user.save();
  redirect('/login');
}

export async function loginAction(
  prevState: { success: boolean; message: string },
  formData: FormData
) {
  const email = formData.get('email');
  const password = formData.get('password');
  const checkbox = formData.get('checkbox');

  if (!email || !password || checkbox !== 'on') {
    return { success: false, message: '입력사항들을 확인해주세요!' };
  }

  try {
    const response = await signIn('credentials', {
      redirect: false,
      callbackUrl: '/',
      email,
      password,
    });
  } catch {
    console.error();
  }

  redirect('/');
}
