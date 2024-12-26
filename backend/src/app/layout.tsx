import type { Metadata } from "next"
import "@/styles/globals.css"
import Header from "@/app/components/Header"
import Aside from "@/app/components/Aside"
import React from "react"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import ClientSessionProvider from "@/app/components/ClientSessionProvider"

export const metadata: Metadata = {
  title: "Admin 控制面板",
  description: "next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ClientSessionProvider>
          <Header />
          <Aside />
          <AntdRegistry>{children}</AntdRegistry>
        </ClientSessionProvider>
      </body>
    </html>
  )
}
