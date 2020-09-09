import React from "react"
import { Header, Hyperlink, Image} from "./blogpostLink.style"

export default function BlogpostLink({ node }) {
  return (
    <Hyperlink to={node.fields.slug}>
        <Header>
          <h3>{node.frontmatter.title}</h3>
          <p>{node.frontmatter.date}</p>
        </Header>
        {node.frontmatter.featuredImage ? (
          <Image
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            objectFit="contain"
            alt=""
          />
        ) : null}
        <p>{node.frontmatter.excerpt}</p>
    </Hyperlink>
  )
}