export function analyzeSeo(html) {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");

  const getMeta = (name) =>
    document.querySelector(`meta[name="${name}"]`);

  const getProperty = (property) =>
    document.querySelector(`meta[property="${property}"]`);

  const title = document.querySelector("title");

  const metaDescription = getMeta("description");

  const h1List = document.querySelectorAll("h1");
  const h2List = document.querySelectorAll("h2");

  const canonical = document.querySelector(
    'link[rel="canonical"]'
  );

  const robots = getMeta("robots");

  const openGraphTags = document.querySelectorAll(
    'meta[property^="og:"]'
  );

  const twitterTags = document.querySelectorAll(
    'meta[name^="twitter:"]'
  );

  const images = [...document.querySelectorAll("img")];

  const links = [...document.querySelectorAll("a")];

  const missingAltImages = images.filter((image) => {
    const alt = image.getAttribute("alt");

    return alt === null || alt.trim() === "";
  });

  const emptyLinks = links.filter((link) => {
    const href = link.getAttribute("href");

    return (
      href === null ||
      href.trim() === "" ||
      href === "#"
    );
  });

  const result = {
    title: {
      exists: Boolean(title),
      value: title ? title.textContent.trim() : "",
    },

    metaDescription: {
      exists: Boolean(metaDescription),
      value: metaDescription
        ? metaDescription.getAttribute("content") || ""
        : "",
    },

    h1: {
      exists: h1List.length > 0,
      count: h1List.length,
    },

    h2: {
      exists: h2List.length > 0,
      count: h2List.length,
    },

    canonical: {
      exists: Boolean(canonical),
      value: canonical
        ? canonical.getAttribute("href") || ""
        : "",
    },

    robots: {
      exists: Boolean(robots),
      value: robots
        ? robots.getAttribute("content") || ""
        : "",
    },

    openGraph: {
      exists: openGraphTags.length > 0,
      count: openGraphTags.length,

      title: Boolean(getProperty("og:title")),
      description: Boolean(getProperty("og:description")),
      image: Boolean(getProperty("og:image")),
      url: Boolean(getProperty("og:url")),
    },

    twitter: {
      exists: twitterTags.length > 0,
      count: twitterTags.length,
    },

    images: {
      total: images.length,
      missingAlt: missingAltImages.length,
    },

    links: {
      total: links.length,
      empty: emptyLinks.length,
    },
  };

  let score = 0;

  if (result.title.exists) score += 10;

  if (result.metaDescription.exists) score += 10;

  if (result.h1.exists) score += 10;

  if (result.h2.exists) score += 10;

  if (result.canonical.exists) score += 10;

  if (result.robots.exists) score += 10;

  if (result.openGraph.exists) score += 10;

  if (result.twitter.exists) score += 10;

  if (
    result.images.total === 0 ||
    result.images.missingAlt === 0
  ) {
    score += 10;
  }

  if (
    result.links.total === 0 ||
    result.links.empty === 0
  ) {
    score += 10;
  }

  return {
    score,
    ...result,
  };
}