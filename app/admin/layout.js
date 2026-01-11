'use client'

import { usePathname } from 'next/navigation'
import AdminLayout from '@/components/AdminLayout'

export default function AdminRootLayout({ children }) {
  const pathname = usePathname()
  
  // Don't wrap login page with AdminLayout
  if (pathname === '/admin/login') {
    return <>{children}</>
  }
  
  return <AdminLayout>{children}</AdminLayout>
}
