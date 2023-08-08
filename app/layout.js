import './globals.css'
import '@/assets/css/animate.min.css'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/flaticon.css'
import '@/assets/css/fontawesome.min.css'
import '@/assets/css/magnific-popup.min.css'
import '@/assets/css/meanmenu.css'
import '@/assets/css/nice-select.min.css'
import '@/assets/css/owl.carousel.min.css'
import '@/assets/css/responsive.css'
import '@/assets/css/style.css'
import '@/assets/css/swiper.min.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Rebit',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
