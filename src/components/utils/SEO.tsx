import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

const SITE_METADATA_QUERY = graphql`
  query SEO {
      site {
        siteMetadata {
            title
            description
            url
        }
    }
  }
`

interface ISEOProps {
    title?: string;
    description?: string;
    style?: string;
}

const SEO: React.FC<ISEOProps> = ({ title, description, style }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(SITE_METADATA_QUERY);

    const {
        title: titleSuffix,
        description: defaultDescription,
        url: baseUrl,
    } = site.siteMetadata;

    const seo = {
        title: `${title ? `${title} | ` : ''}${titleSuffix}`,
        description: description || defaultDescription,
        url: `${baseUrl}${pathname}`,
    };

    return (
        // @ts-ignore
        <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            {style && <style>{style}</style>}
        </Helmet>
    )
}
export default SEO
