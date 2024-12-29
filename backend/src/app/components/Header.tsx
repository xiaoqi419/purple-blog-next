"use client"

import { RiBarChartHorizontalFill } from "react-icons/ri"
import { GoScreenFull } from "react-icons/go"
import { BiExitFullscreen } from "react-icons/bi"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"

export default function Header() {
  const [isFullscreen, setisFUllscreen] = useState(false)
  const { data: session, status } = useSession()
  const [avatar, setAvatar] = useState(null)

  // 从 localStorage 获取头像信息
  useEffect(() => {
    const cachedAvatar: any = localStorage.getItem("userAvatar")
    if (cachedAvatar) {
      setAvatar(cachedAvatar)
    }
  }, [])

  // 如果 session 中有头像，更新头像并缓存到 localStorage
  useEffect(() => {
    if (session?.user?.image) {
      setAvatar(session.user.image as any)
      // 保存头像到 localStorage
      localStorage.setItem("userAvatar", session.user.image)
    }
  }, [session])

  // 全屏
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen().then(() => {
        setisFUllscreen(true)
      })
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setisFUllscreen(false)
        })
      }
    }
  }

  return (
    <>
      <header className="header flex flex-sb">
        <div className="logo flex gap-2">
          <h1>ADMIN</h1>
          <div className="headerham flex flex-center">
            <RiBarChartHorizontalFill />
          </div>
        </div>
        <div className="rightnav flex gap-2">
          <div onClick={toggleFullscreen}>
            {isFullscreen ? <BiExitFullscreen /> : <GoScreenFull />}
          </div>
          <div className="notification">
            <img
              src="/img/notification.png"
              alt="noti"
              style={{ width: "22px" }}
            />
          </div>
          <div className="profilenav">
            <img
              src={avatar || "/img/user.png"}
              style={{ width: "44px", borderRadius: "30px" }}
              alt="user"
            />
          </div>
        </div>
      </header>
    </>
  )
}
