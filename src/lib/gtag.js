// Google Analytics utility functions

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Custom events for Knolbase
export const trackButtonClick = (buttonName, location) => {
  event({
    action: "click",
    category: "button",
    label: `${buttonName}_${location}`,
  });
};

export const trackFormSubmit = (formName) => {
  event({
    action: "submit",
    category: "form",
    label: formName,
  });
};

export const trackScroll = (section) => {
  event({
    action: "scroll",
    category: "engagement",
    label: section,
  });
};

export const trackVideoPlay = (videoName) => {
  event({
    action: "play",
    category: "video",
    label: videoName,
  });
};
