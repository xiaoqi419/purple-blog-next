// src/app/user/ClientUserPage.tsx
"use client"

import { useSession } from "next-auth/react"
import { Button } from "antd"
import { signOut } from "next-auth/react"

const ClientUserPage = () => {
  const { data: session } = useSession()
  console.log(session)

  if (!session) {
    return (
      <div className="loginfront flex flex-center flex-col full-w">未登录</div>
    )
  }

  const out = async () => {
    await signOut()
    // 跳转到登录页
    window.location.href = "/login"
  }

  return (
    <div className="loginfront flex flex-center flex-col full-w">
      <h1>用户信息</h1>
      <p>用户名: {session.user?.name}</p>
      <p>邮箱: {session.user?.email}</p>
      <Button type="primary" onClick={out}>
        退出
      </Button>
    </div>
  )
}

export default ClientUserPage
