import AppLayout from '@/components/app-layout/AppLayout'
import Content from '@/components/app-layout/Content'
import Header from '@/components/header/Header'
import Navigation from '@/components/navigation/Navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import './layout.sass'
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Zafree',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AppLayout>
          <Header>
            <Navigation>
              <Link href="/">Home</Link>
              <Link href="/work">Work</Link>
              <Link href="/about">About</Link>
              <Link href="/hire">Hire me</Link>
            </Navigation>
          </Header>
          <Content>{children}</Content>
        </AppLayout>
      </body>
    </html>
  )
}
