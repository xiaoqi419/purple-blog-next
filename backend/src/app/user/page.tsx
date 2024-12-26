// src/app/user/page.tsx

import dynamic from "next/dynamic"

const ClientUserPage = dynamic(() => import("./ClientUserPage"), { ssr: false })

export default function UserPage() {
  return <ClientUserPage />
}
