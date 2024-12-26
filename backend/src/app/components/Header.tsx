"use client"

import { RiBarChartHorizontalFill } from "react-icons/ri"
import { GoScreenFull } from "react-icons/go"
import { BiExitFullscreen } from "react-icons/bi"
import { useState } from "react"
import { useSession } from "next-auth/react"

export default function Header() {
  const [isFullscreen, setisFUllscreen] = useState(false)
  const { data: session, status } = useSession()

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
            {session ? (
              <img
                src={session.user?.image!}
                style={{ width: "44px", borderRadius: "30px" }}
                alt="user"
              />
            ) : (
              <img src="/img/user.png" style={{ width: "44px" }} alt="user" />
            )}
          </div>
        </div>
      </header>
    </>
  )
}
