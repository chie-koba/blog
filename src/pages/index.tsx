import "tailwindcss/dist/base.min.css"
import React from "react"
import { graphql } from "gatsby"
import { Header } from "components/organisms/header"
import { ArticleListItem } from "components/organisms/articleList/item"
import { ArticleList } from "components/organisms/articleList"
import tw, { css } from "twin.macro"

const Home: React.FC = () => (
  <>
    <Header />
    <ArticleList css={articleListStyle} />
  </>
)

const articleListStyle = css([tw`mx-auto`])

export default Home
