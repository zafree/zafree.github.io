import AppLayout from '@/components/app-layout/AppLayout'
import Content from '@/components/app-layout/Content'
import Header from '@/components/header/Header'
import Navigation from '@/components/navigation/Navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

import './layout.sass'

import { sans, serif } from '@/fonts/fonts'
import c from 'classnames'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = {
  title: 'Zafree',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={c(sans.variable, serif.variable)}>
        <AppLayout>
          <Header>
            <Navigation>
              {/* <Link href="/">Home</Link> */}
              <Link href="/work">Work</Link>
              <Link href="/loremipsum">Lorem Ipsum</Link>
              {/* <Link href="/about">About</Link> */}
              <Link href="/hire">Hire me</Link>
            </Navigation>
          </Header>
          <Content>{children}</Content>
          <Footer />
        </AppLayout>
      </body>
    </html>
  )
}
