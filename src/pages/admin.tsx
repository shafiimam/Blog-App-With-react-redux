import DashboardLayout from '@/components/layouts/DashboardLayout'
import RootLayout from '@/components/layouts/RootLayout'
import React from 'react'

export default function AdminPage() {
  return (
    <div>AdminPage</div>
  )
}

AdminPage.getLayout = function getLayout(page:any){
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
}