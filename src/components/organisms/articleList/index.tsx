import React from "react"
import { ArticleListItem } from "./item"
import { css } from "twin.macro"
import { graphql, useStaticQuery } from "gatsby"
import { InterpolationWithTheme } from "@emotion/core"
import { Line } from "components/atoms/line"
import { HomeQuery } from "../../../../types/graphql-types"

interface Props {
  css?: InterpolationWithTheme<any>
}

export const ArticleList: React.FC<Props> = props => {
  const data = useStaticQuery<HomeQuery>(graphql`
    query Home {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div css={wrapStyle} {...props}>
      {data.allMarkdownRemark.edges.map(item => (
        <>
          <ArticleListItem
            title={item.node.frontmatter?.title}
            date={item.node.frontmatter?.date}
            slug={item.node.frontmatter?.slug}
          />
          <Line />
        </>
      ))}
    </div>
  )
}

const wrapStyle = css([{ maxWidth: "768px" }])
