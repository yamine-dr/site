'use server';
import {cookies} from 'next/headers';
import { defaultLocale } from '@/src/i18n/config';

// the locale is read from a cookie
const COOKIE_NAME = 'locale';

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}