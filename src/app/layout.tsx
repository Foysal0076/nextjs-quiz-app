import '@/styles/globals.css'

import { Inter, Rubik } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import { AuthProvider } from '@/components/auth/auth-provider'
import NextThemeProvider from '@/components/next-theme-provider'
import { SeedMockData } from '@/components/seed-mock-data'
import { metaObject } from '@/shared/config/site.config'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata = metaObject()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${inter.variable} ${rubik.variable}`}>
      <link
        rel='icon'
        type='image/ico'
        sizes='32x32'
        href='/assets/favicons/favicon.ico'
      />
      <body className='bg-neutral-10 dark:bg-surface-50'>
        <AuthProvider>
          <NextThemeProvider>
            <SeedMockData />
            <>{children}</>
            <Toaster position='top-center' reverseOrder={false} />
          </NextThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
