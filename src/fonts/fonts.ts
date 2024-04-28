import { IBM_Plex_Serif } from 'next/font/google'
import localFont from 'next/font/local'

const serif = IBM_Plex_Serif({
  weight: ['200', '300', '400'],
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
  variable: '--font-serif',
})

const sans = localFont({
  src: [
    {
      path: './../fonts/National2/national2web-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './../fonts/National2/national2web-light-italic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './../fonts/National2/national2web-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../fonts/National2/national2web-medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
})

export { serif, sans }
