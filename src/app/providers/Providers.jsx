import { NextIntlClientProvider } from "next-intl"
import ClientProviders from "./ClientProviders"

export default async function Providers({ children }) {
  return (
    <NextIntlClientProvider>
      <ClientProviders>
        {children}
      </ClientProviders>
    </NextIntlClientProvider>
  )
}