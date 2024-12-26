import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import Loading from "@/app/components/Loading"

/**
 * Auth 重定向
 */
function useAuthRedirect() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "loading") return // 等待 session 加载
    if (!session) {
      router.push("/login") // 如果没有 session，则跳转到登录页
    }
    setLoading(false) // 完成渲染后设置 loading 为 false
  }, [session, status, router])

  return loading
}

export default function Home() {
  const loading = useAuthRedirect()

  if (loading) {
    return (
      <div className="loadingdata flex flex-col flex-center wh_100">
        <Loading />
      </div>
    )
  }
}
