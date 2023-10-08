// Create an empty "constructed" stylesheet
const sheet = new CSSStyleSheet();
// Apply a rule to the sheet
sheet.replaceSync("#shadow-root .swiper-horizontal{overflow: visible !important;}.swiper-horizontal{overflow-x: visible !important;}.swiper-wrapper{overflow-x: hidden !important;}");

// Apply the stylesheet to a document
document.adoptedStyleSheets = [sheet];