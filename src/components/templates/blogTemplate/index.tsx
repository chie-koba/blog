import React from "react"
import { graphql } from "gatsby"
import { BlogTemplateQuery } from "../../../../types/graphql-types"
import { css } from "twin.macro"
import { Theme } from "theme/theme"
import { Header } from "components/organisms/header"
import { Global } from "components/atoms/global"

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
          <div className="blog-post">
            <div>{props.data.markdownRemark?.frontmatter?.title}</div>
            <div>{props.data.markdownRemark?.frontmatter?.date}</div>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark?.html ?? "<div></div>",
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const backGroundStyle = (theme: Theme) =>
  css({
    backgroundColor: theme.colors.fill,
    height: "100vh",
    width: "100vw",
  })

const style = css({
  width: "60%",
  height: "100vh",
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "#fff",
})

export const pageQuery = graphql`
  query BlogTemplate($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export default BlogTemplate
