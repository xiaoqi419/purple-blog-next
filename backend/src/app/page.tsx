"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Loading from "@/app/components/Loading"
import { IoHome } from "react-icons/io5"

export default function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "loading") return // 等待 session 加载
    if (!session) {
      router.push("/login")
    }
    setLoading(false) // 完成渲染后设置 loading 为 false
  }, [session, status, router])

  if (loading) {
    return (
      <div className="loadingdata flex flex-col flex-center wh_100">
        <Loading />
      </div>
    ) // 显示 Loading 组件
  }

  return (
    <>
      <div className="dashboard">
        <div className="titledashboard flex flex-sb">
          <div>
            <h2>
              Blogs <span>仪表盘</span>
            </h2>
            <h3>管理面板</h3>
          </div>
          <div className="breadcrumb">
            <IoHome />
            <span>/</span>
            <span>仪表盘</span>
          </div>
        </div>

        {/* 顶部统计卡片 */}
        <div className="topfourcards flex flex-sb">
          <div className="four_card">
            <h2>博客总数</h2>
            <span>10</span>
          </div>
          <div className="four_card">
            <h2>主题总数</h2>
            <span>4</span>
          </div>
          <div className="four_card">
            <h2>标签总数</h2>
            <span>6</span>
          </div>
          <div className="four_card">
            <h2>草稿总数</h2>
            <span>10</span>
          </div>
        </div>

        {/* year overview */}
        <div className="year_overview flex flex-sb">
          <div className="leftyearoverview">
            <div className="flex flex-sb">
              <h3>年度概览</h3>
              <ul className="creative-dots">
                <li className="big-dot"></li>
                <li className="semi-big-dot"></li>
                <li className="medium-dot"></li>
                <li className="semi-medium-dot"></li>
                <li className="semi-small-dot"></li>
                <li className="small-dot"></li>
              </ul>
              <h3 className="text-right">
                10 / 365 <br />
                <span>已发布总数</span>
              </h3>
            </div>
          </div>
          <div className="right_salescont">
            <div>
              <h3>博客分类</h3>
              <ul className="creative-dots">
                <li className="big-dot"></li>
                <li className="semi-big-dot"></li>
                <li className="medium-dot"></li>
                <li className="semi-medium-dot"></li>
                <li className="semi-small-dot"></li>
                <li className="small-dot"></li>
              </ul>
            </div>
            <div className="blogscategory flex flex-center">
              <table>
                <thead>
                  <tr>
                    <td>Topics</td>
                    <td>Data</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Html, Css & JavaScript</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>React Js, Next Js</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Database</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Deployment</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
