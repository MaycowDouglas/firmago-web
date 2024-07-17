import './globals.css'

// eslint-disable-next-line camelcase
import { Plus_Jakarta_Sans } from 'next/font/google'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-PY" className="scroll-smooth">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  )
}
