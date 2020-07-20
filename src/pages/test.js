import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Picture } from "../components/picture"

export default function Test() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { title: { eq: "About us" } }) {
        frontmatter {
          paragraphs
          image
          title
        }
      }
    }
  `)

  const { paragraphs, image, title } = data.markdownRemark.frontmatter

  return (
    <>
      <h3>{title}</h3>
      <Picture name={image.replace("/assets/", "")} />
      {paragraphs.map(paragraph => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  )
}
