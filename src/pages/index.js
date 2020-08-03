import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { PageLink } from "../components/links"

export default function Home({ data }) {
  const heroDescription = <h1>Cat adventures</h1>

  return (
    <Layout heroDescription={heroDescription}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <section key={node.id}>
          <PageLink
            to={node.fields.slug}
            css={css`
              height: 100%;
            `}
          >
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #4d4d4d;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.frontmatter.excerpt}</p>
          </PageLink>
        </section>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            excerpt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
