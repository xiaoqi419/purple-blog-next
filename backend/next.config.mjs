/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //指定了一组需要被编译（转译）的包的名称列表。
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "rc-tree",
    "rc-table",
  ],
  env: {
    SECRET_KEY: "BLOGJOY",
    GITHUB_CLIENT_ID: "Ov23liBMOjkGkunRcMGm",
    GITHUB_CLIENT_SECRET: "09d064871ced8c861256756d2ac513fb046c29c1",
    // 数据库配置
    MYSQL_HOST: "127.0.0.1",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "joyblog",
    MYSQL_USER: "root",
    MYSQL_PASSWORD: "122419",
  },
}

export default nextConfig
