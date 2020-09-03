import React from "react"
import { graphql } from "gatsby"
import { Header } from "./blog-post.style"
import Layout from "../components/layout/layout.component"

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  const heroContent = (
    <Header>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <p>{post.frontmatter.excerpt}</p>
    </Header>
  )

  return (
    <Layout
      heroContent={heroContent}
      heroImage={
        post.frontmatter.featuredImage
          ? post.frontmatter.featuredImage.childImageSharp.fluid
          : null
      }
      title={post.frontmatter.title}
      description={post.frontmatter.excerpt}
    >
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        excerpt
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
