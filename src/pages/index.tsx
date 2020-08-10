import "tailwindcss/dist/base.min.css"
import React from "react"
import { Header } from "components/organisms/header"
import { Global } from "components/global"

const Home: React.FC = () => (
  <>
    <Global>
      <Header />
      🚧 工事中 🚧
    </Global>
  </>
)

export default Home
