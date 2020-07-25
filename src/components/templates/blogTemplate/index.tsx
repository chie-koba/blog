import React from "react"
import { graphql } from "gatsby"
import { BlogTemplateQuery } from "../../../../types/graphql-types"

interface Props {
  data: BlogTemplateQuery
}

const BlogTemplate: React.FC<Props> = props => {
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{props.data.markdownRemark?.frontmatter?.title}</h1>
        <h2>{props.data.markdownRemark?.frontmatter?.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{
            __html: props.data.markdownRemark?.html ?? "<div></div>",
          }}
        />
      </div>
    </div>
  )
}

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
