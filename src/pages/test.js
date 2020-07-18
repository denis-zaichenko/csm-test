import React from "react"
import { useStaticQuery } from "gatsby"

export default function Test() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { path: { eq: "/test" } }) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
        }
      }
    }
  `)

  console.log(data)

  return <div>Test page</div>
}
