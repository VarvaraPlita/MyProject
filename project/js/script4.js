// File: templateConfig.js

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
