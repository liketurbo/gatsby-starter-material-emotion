import { graphql, useStaticQuery } from "gatsby"
import keywordExtractor from "keyword-extractor"
import React from "react"
import Helmet from "react-helmet"

const Seo = () => {
  const {
    site: {
      siteMetadata: { title, description, author },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return (
    <Helmet htmlAttributes={{ lang: "ru" }}>
      <meta charSet="utf-8" />
      <meta
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        name="viewport"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
      />
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content="summary" name="twitter:card" />
      <meta content={author} name="twitter:creator" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content="index,follow" name="robots" />
      <meta
        content={keywordExtractor
          // eslint-disable-next-line @typescript-eslint/camelcase, camelcase
          .extract(description, { remove_duplicates: true })
          .join(",")}
        name="keywords"
      />
    </Helmet>
  )
}

export default Seo
