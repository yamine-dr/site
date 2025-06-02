"use server";
import { getLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';
 
// Redirect the user to the default locale when `/` is requested
export default async function RootPage() {
  const locale = await getLocale();
  redirect(`/${locale}/portfolio`);
}