// Create a function to create and append link elements
function createLinkElement(hrefValue, relValue, attributeValues = {}) {
    const link = document.createElement('link');
    link.href = hrefValue;
    link.rel = relValue;
  
    // Set additional attributes if provided
    for (const attribute in attributeValues) {
      link.setAttribute(attribute, attributeValues[attribute]);
    }
  
    document.head.appendChild(link); // Append the created link element to the head
  }
  
  // Call the function to create and append each link element
  createLinkElement("https://www.google-analytics.com", "preconnect");
  createLinkElement("https://assets.jwwb.nl", "preconnect");
  createLinkElement("https://assets.jwwb.nl/assets/website-rendering/styles.25de5b68cbeacfee4638.css?bust=25de5b68cbeacfee4638", "preload", { as: "style" });
  createLinkElement("https://assets.jwwb.nl/assets/website-rendering/styles.25de5b68cbeacfee4638.css?bust=25de5b68cbeacfee4638", "stylesheet", { media: "screen", type: "text/css" });
  createLinkElement("https://gfonts.jwwb.nl", "preconnect");
  createLinkElement("https://gfonts.jwwb.nl/css?display=fallback&family=Muli:400,700,400italic,700italic", "stylesheet", { media: "screen", type: "text/css" });
  
// Create link elements
const styleSheetLink = document.createElement('link');
styleSheetLink.type = 'text/css';
styleSheetLink.rel = 'stylesheet';
styleSheetLink.href = 'https://primary.jwwb.nl/public/n/s/u/temp-jwzaymueqjwcsgxabemk/style.css?bust=1701714578';


// Create script element
const plausibleScript = document.createElement('script');
plausibleScript.defer = true;
plausibleScript.dataset.domain = 'shard17.jouwweb.nl';
plausibleScript.src = 'https://plausible.io/js/script.manual.js';
plausibleScript.setAttribute('nonce', '5458d72e53aef66679178e781e8dee16');

// Append elements to the head
document.head.appendChild(styleSheetLink);
document.head.appendChild(plausibleScript);

// Create meta elements
const ogImage1 = document.createElement('meta');
ogImage1.setAttribute('property', 'og:image');
ogImage1.content = 'https://primary.jwwb.nl/public/n/s/u/temp-jwzaymueqjwcsgxabemk/uqng86/photo-1590846406792-0adc7f938f1d.jpg';

const ogImage2 = document.createElement('meta');
ogImage2.setAttribute('property', 'og:image');
ogImage2.content = 'https://primary.jwwb.nl/public/n/s/u/temp-jwzaymueqjwcsgxabemk/1fj5y8/photo-1514933651103-005eec06c04b.webp';

const ogImage3 = document.createElement('meta');
ogImage3.setAttribute('property', 'og:image');
ogImage3.content = 'https://primary.jwwb.nl/public/n/s/u/temp-jwzaymueqjwcsgxabemk/z4aarm/1015-folsom-1024x683.jpg';

const twitterCard = document.createElement('meta');
twitterCard.setAttribute('name', 'twitter:card');
twitterCard.content = 'summary_large_image';

// Append meta elements to the head
document.head.appendChild(ogImage1);
document.head.appendChild(ogImage2);
document.head.appendChild(ogImage3);
document.head.appendChild(twitterCard);





// templateConfig.js

JOUWWEB.templateConfig = {
  header: {
    selector: '.header-wrap',
    mobileSelector: '.jw-mobile-menu',
    updatePusher: function (headerHeight, state) {
      // Header
      $('.header-wrap .header').css('min-height', state === 'mobile' ? headerHeight : 0);

      // Slideshow
      var $sliderStyle = $('#sliderStyle');

      if ($sliderStyle.length === 0) {
        $sliderStyle = $('<style />')
          .attr('id', 'sliderStyle')
          .appendTo(document.body);
      }

      $sliderStyle.html('.jw-slideshow-slide-content { padding-top: ' + headerHeight + 'px; padding-bottom: ' + (headerHeight * (2 / 3)) + 'px; } .bx-controls-direction { margin-top: ' + (headerHeight * (1 / 6)) + 'px }');

      // make sure slider also gets correct height (because of the added padding)
      $('.jw-slideshow-slide[aria-hidden=false]').each(function (index) {
        var $this = $(this);
        headerHeight = $this.outerHeight() > headerHeight ? $this.outerHeight() : headerHeight;
        $this.closest('.bx-viewport').css({
          height: headerHeight + 'px',
        });
      });

      // If a page has a message-bar, offset the mobile nav.
      const $messageBar = $('.message-bar');
      if ($messageBar.length > 0) {
        $('.js-mobile-menu, .jw-menu-clone').css('top', $messageBar.outerHeight());
      }
    },
  },
  mainContentOffset: function () {
    return $('.jw-section-content').offset().top - 20;
  },

  mobileHeaderText: {
    maxFontSize: 28,
  },
};
