"use client"

import Link from "next/link"
import { IoHome, IoSettingsOutline } from "react-icons/io5"
import { BsPostcard } from "react-icons/bs"
import { MdOutlineAddPhotoAlternate, MdOutlinePending } from "react-icons/md"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Aside() {
  const router = useRouter()
  const pathname = usePathname()
  const [clicked, setClicked] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  const handleLinkClick = (link: string) => {
    setActiveLink(link)
    setClicked(false)
  }

  useEffect(() => {
    const cachedActiveLink = localStorage.getItem("activeLink")
    if (cachedActiveLink) {
      setActiveLink(cachedActiveLink) // 恢复缓存的激活路径
    } else {
      setActiveLink(pathname) // 如果没有缓存，使用当前路径作为激活项
    }
  }, [pathname])

  // 每当 activeLink 发生变化时更新 localStorage 中的激活状态
  useEffect(() => {
    if (activeLink) {
      localStorage.setItem("activeLink", activeLink) // 缓存激活的路径
    }
  }, [activeLink])

  // 每次路径变化时更新 activeLink 状态
  useEffect(() => {
    setActiveLink(pathname) // 当路由变化时更新激活项
  }, [pathname])

  return (
    <>
      <aside className="asideleft">
        <ul>
          <Link href="/">
            <li
              className={activeLink === "/" ? "navactive" : ""}
              onClick={() => handleLinkClick("/")}
            >
              <IoHome />
              <span>仪表板</span>
            </li>
          </Link>
          <Link href="/blogs">
            <li
              className={activeLink === "/blogs" ? "navactive" : ""}
              onClick={() => handleLinkClick("/blogs")}
            >
              <BsPostcard />
              <span>博客管理</span>
            </li>
          </Link>
          <Link href="/blogs/addBlog">
            <li
              className={activeLink === "/blogs/addBlog" ? "navactive" : ""}
              onClick={() => handleLinkClick("/blogs/addBlog")}
            >
              <MdOutlineAddPhotoAlternate />
              <span>新增博客</span>
            </li>
          </Link>
          <Link href="/draft">
            <li
              className={activeLink === "/draft" ? "navactive" : ""}
              onClick={() => handleLinkClick("/draft")}
            >
              <MdOutlinePending />
              <span>代办</span>
            </li>
          </Link>
          <Link href="/setting">
            <li
              className={activeLink === "/setting" ? "navactive" : ""}
              onClick={() => handleLinkClick("/setting")}
            >
              <IoSettingsOutline />
              <span>设置</span>
            </li>
          </Link>
        </ul>
      </aside>
    </>
  )
}
