export const pageview = (url: string) => {
  window.gtag('config', process.env.GTAG_CODE, {
    page_path: url,
  });
};
