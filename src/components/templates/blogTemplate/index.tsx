import React from "react"
import { graphql } from "gatsby"
import { BlogTemplateQuery } from "../../../../types/graphql-types"
import tw, { css } from "twin.macro"
import { Theme, renderAst } from "theme/theme"
import { Header } from "components/organisms/header"
import { H1 } from "components/atoms/h1"
import { Date } from "components/molecules/date"
import { Helmet } from "react-helmet"

interface Props {
  data: BlogTemplateQuery
}

const BlogTemplate: React.FC<Props> = props => {
  return (
    <>
      <div css={backGroundStyle}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{props.data.markdownRemark?.frontmatter?.title}</title>
        </Helmet>
        <Header />
        <div css={style}>
          <H1>{props.data.markdownRemark?.frontmatter?.title}</H1>
          <Date
            css={css([tw`mt-4`])}
            date={props.data.markdownRemark?.frontmatter?.date}
          ></Date>
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
        date(formatString: "YYYY-MM-DD")
        slug
        title
      }
    }
  }
`

export default BlogTemplate
