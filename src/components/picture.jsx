import React from "react"
import Img from "gatsby-image"

import { useStaticQuery, graphql } from "gatsby"

export const Picture = ({ name, className }) => {
  const data = useStaticQuery(graphql`
    query {
      main: file(relativePath: { regex: "/jul-19-2020-11-01-18.gif/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Img
      fluid={data[name].childImageSharp.fluid}
      loading="auto"
      imgStyle={{ objectFit: "contain" }}
      className={className}
    />
  )
}
