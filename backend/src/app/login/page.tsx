"use client"

import Image from "next/image"
import "@/styles/globals.css"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Loading from "@/app/components/Loading"
import { useEffect } from "react"

export default function Login() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push("/")
    }
  }, [session, router])

  if (status === "loading") {
    // 如果处于 loading 状态，显示 loading 组件
    return (
      <div className="loadingdata flex flex-col flex-center wh_100">
        <Loading />
      </div>
    )
  }

  async function loginWithGitee() {
    await signIn("gitee")
  }

  if (!session) {
    // 没有session或者没有登录则显示登录组件
    return (
      <>
        <div className="loginfront flex flex-center flex-col full-w">
          <div
            style={{ position: "relative", width: "250px", height: "250px" }}
          >
            <Image
              src="/img/login.png"
              alt="login"
              fill={true}
              priority={true}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h1 className="mt-1">欢迎来到JOY BLOGS ADMIN👋</h1>
          <p>
            浏览我的博客 <a href="https://blog.ojason.top">JOY BLOGS</a>
          </p>
          <button className="mt-2" onClick={loginWithGitee}>
            Login
          </button>
        </div>
      </>
    )
  }
  return null
}
