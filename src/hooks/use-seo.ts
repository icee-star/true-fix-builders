import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
}

export function useSEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    let metaOGTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (metaOGTitle) metaOGTitle.setAttribute("content", title);

    let metaOGDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (metaOGDesc) metaOGDesc.setAttribute("content", description);

    let metaTWTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    if (metaTWTitle) metaTWTitle.setAttribute("content", title);

    let metaTWDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    if (metaTWDesc) metaTWDesc.setAttribute("content", description);

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", canonical);
  }, [title, description, canonical]);
}
