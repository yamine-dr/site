import { useLocale } from 'next-intl';
import { redirect } from '@/src/i18n/navigation';
 
// Redirect the user to  "/[locale]/portfolio" when '/' is requested
export default function RootPage() {
  const locale = useLocale();
  redirect({href: "/portfolio", locale: locale});
}