"use client"
import useAuthRedirect from "@/utils/useAuthRedirect"

export default function addBlog() {
  // 判断是否有 session，没有则跳转到登录页
  useAuthRedirect()

  return (
    <>
      <h1>addBlog</h1>
    </>
  )
}
