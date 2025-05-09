import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pauline Devs',
  description: 'A quick portfolio landing page rebuild. Originally made by Dennis Snellenberg, he won an awwwards with his amazing portoflio. Remade the landing page using Next.js, Framer Motion and GSAP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
