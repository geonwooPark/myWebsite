import Footer from '@common/Footer/Footer'
import '../../styles/globals.css'
import type { Metadata } from 'next'
import 'react-toastify/dist/ReactToastify.css'
import { BlogMetadata } from '@/constants/staticMetadata'

export const metadata: Metadata = BlogMetadata

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full">
      <div className="h-auto min-h-[100%] bg-white pb-[56px]">{children}</div>
      <Footer className="relative h-[56px] w-full -translate-y-full bg-[#070716]" />
    </div>
  )
}
