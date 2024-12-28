"use client"
import useAuthRedirect from "@/utils/useAuthRedirect"
import { Button, Input } from "antd"
import { BsPostage } from "react-icons/bs"
import { useState } from "react"
import Link from "next/link"
import { FaEdit } from "react-icons/fa"
import { RiDeleteBin6Fill } from "react-icons/ri"

// 博客管理页
export default function blogs() {
  // 判断是否有 session，没有则跳转到登录页
  useAuthRedirect()

  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="blogpage">
      <div className="titledashboard flex flex-sb">
        <div>
          <h2>
            所有发布 <span>Blogs</span>
          </h2>
          <h3>管理面板</h3>
        </div>
        <div className="breadcrumb">
          <BsPostage />
          <span>/</span>
          <span>博客管理</span>
        </div>
      </div>

      <div className="blogstable">
        <div className="flex gap-2 mb-1">
          <h2>搜索博客：</h2>
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="请搜索博客 ..."
          />
        </div>

        <table className="table table-styling">
          <thead>
            <tr>
              <th>#</th>
              <th>标题</th>
              <th>URL标识符</th>
              <th>编辑 / 删除</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>title of the blog</td>
              <td>slug of the blog</td>
              <td>
                <div className="flex gap-2 flex-center">
                  <Link href="/blogs/edit/id">
                    <Button title="edit">
                      <FaEdit />
                    </Button>
                  </Link>
                  <Link href="/blogs/edit/id">
                    <Button title="edit">
                      <RiDeleteBin6Fill />
                    </Button>
                  </Link>
                  {/* TODO 分页在添加数据库后加入 */}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
