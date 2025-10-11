export const createSEOConfig = ({
  title = "Knolbase - AI-Powered Onboarding Platform",
  description = "Transform your product onboarding with AI. Upload videos and docs, get personalized user portals and in-app widgets.",
  canonical = "https://www.knolbase.com",
  path = "",
  imageUrl = "https://www.knolbase.com/knolbase-logo.svg",
  keywords = "AI onboarding, product training, user onboarding, SaaS training, personalized portals, in-app widgets, video tutorials, documentation, user experience, customer success",
  author = "Athul Suresh, Knolbase",
  twitterHandle = "@knolbase",
  twitterSite = "@knolbase",
} = {}) => {
  const fullUrl = canonical + path;

  return {
    title,
    description,
    canonical: fullUrl,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: fullUrl,
      siteName: "Knolbase",
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      handle: twitterHandle,
      site: twitterSite,
      cardType: "summary_large_image",
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content: keywords,
      },
      {
        name: "author",
        content: author,
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "googlebot",
        content: "index, follow",
      },
      {
        property: "article:author",
        content: "Athul Suresh",
      },
      {
        property: "article:section",
        content: "Technology",
      },
      {
        property: "article:tag",
        content: "AI, Onboarding, SaaS, Training",
      },
    ],
    additionalLinkTags: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        href: "/favicon.ico",
      },
    ],
  };
};

// Pre-configured SEO configs for common pages
export const defaultSEO = createSEOConfig();

export const homePageSEO = createSEOConfig({
  title:
    "Knolbase - AI-Powered Onboarding Platform | Transform Product Training",
  description:
    "Transform your product onboarding with AI. Upload videos and docs, get personalized user portals and in-app widgets. Reduce training time and costs for SaaS companies.",
});

export const onboardingTeamsSEO = createSEOConfig({
  title: "For Onboarding Teams | Knolbase - AI-Powered Training Platform",
  description:
    "Built for onboarding teams at B2B software companies. Automate personalized training experiences and reduce implementation time with AI.",
  path: "/for/onboarding-teams",
});
