import NextAuth, { NextAuthOptions } from "next-auth"
import Gitee from "@/providers/gitee"
import { NextApiHandler } from "next"

export const authOptions: NextAuthOptions = {
  providers: [
    Gitee({
      clientId: process.env.GITEE_CLIENT_ID,
      clientSecret: process.env.GITEE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET_KEY as string, // 目前生产环境是必须的
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 会话过期时间，单位：秒
  },
  pages: {
    signIn: "/login", // 自定义登录页面
  },
  callbacks: {
    async signIn({ user, account, profile }: any) {
      if (!user || !account || !profile) {
        console.error("Sign-in failed: missing user, account, or profile data.")
        return false
      }
      return true
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.image = user.image
        token.name = user.name
        token.email = user.email
      }
      return token
    },
    async session({ session, token }: any) {
      session.user.image = token.image
      session.user.name = token.name
      session.user.email = token.email
      return session
    },
  },
}

// const handler = NextAuth(authOptions)

const handler: NextApiHandler = async (req, res) => {
  try {
    return await NextAuth(req, res, authOptions)
  } catch (error) {
    console.error("Authentication error:", error)
    res.status(500).json({ message: "Authentication failed" })
  }
}

export { handler as GET, handler as POST }
