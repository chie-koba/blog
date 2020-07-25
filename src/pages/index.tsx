import "tailwindcss/dist/base.min.css"
import React from "react"
import { Header } from "components/organisms/header"
import { Global } from "components/atoms/global"

const Home: React.FC = () => (
  <>
    <Global />
    <Header />
  </>
)

export default Home
