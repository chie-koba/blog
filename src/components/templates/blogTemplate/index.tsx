import React from "react"
import { graphql } from "gatsby"
import { BlogTemplateQuery } from "../../../../types/graphql-types"
import tw, { css } from "twin.macro"
import { Theme, renderAst } from "theme/theme"
import { Header } from "components/organisms/header"
import { Global } from "components/global"
import { H1 } from "components/atoms/h1"
import { P } from "components/atoms/p"

interface Props {
  data: BlogTemplateQuery
}

const BlogTemplate: React.FC<Props> = props => {
  return (
    <>
      <Global />
      <div css={backGroundStyle}>
        <Header />
        <div css={style}>
          <H1>{props.data.markdownRemark?.frontmatter?.title}</H1>
          <P>{props.data.markdownRemark?.frontmatter?.date}</P>
          <div css={contentStyle}>
            {renderAst(props.data.markdownRemark?.htmlAst)}
          </div>
        </div>
      </div>
    </>
  )
}

const backGroundStyle = (theme: Theme) =>
  css({
    height: "100vh",
    width: "100vw",
  })

const style = css([
  tw`px-6`,
  tw`mx-auto`,

  {
    height: "100vh",
    backgroundColor: "#fff",
    maxWidth: "768px",
  },
])

const contentStyle = css(tw`pt-10`, tw`prose`)

export const pageQuery = graphql`
  query BlogTemplate($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export default BlogTemplate
