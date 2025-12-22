// Simple Google Analytics (GA4) helper for Vite + React
const GA_ID = import.meta.env.VITE_GA_ID || '';

export function initGA() {
  if (!GA_ID || typeof window === 'undefined') return;

  // load gtag script
  const existing = document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`);
  if (!existing) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  }

  // inject gtag config
  if (!window.dataLayer) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);} // eslint-disable-line no-inner-declarations
    window.gtag = window.gtag || gtag;
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }
}

export function pageview(url) {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('config', GA_ID, { page_path: url });
}

export function event({ action, category, label, value }) {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
}

export default {
  initGA,
  pageview,
  event,
};
