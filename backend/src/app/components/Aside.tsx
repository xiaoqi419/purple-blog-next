"use client"

import Link from "next/link"
import { IoHome } from "react-icons/io5"
import { BsPostcard } from "react-icons/bs"
import { MdOutlineAddPhotoAlternate } from "react-icons/md"
import { IoSettingsOutline } from "react-icons/io5"
import { MdOutlinePending } from "react-icons/md"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Aside() {
  const router = useRouter()
  const pathname = usePathname()
  const [clicked, SetClicked] = useState(false)
  const [activeLink, SetActiveLink] = useState("/")

  const handleClick = () => {
    SetClicked(!clicked)
  }

  const handleLinkClick = (link: string) => {
    SetActiveLink(link)
    SetClicked(false)
  }

  useEffect(() => {
    // 设置当前激活的链接
    SetActiveLink(pathname)
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
