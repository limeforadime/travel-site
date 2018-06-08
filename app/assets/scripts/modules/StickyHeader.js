import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {

    constructor() {
        this.lazyImages = $("lazyload");
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".large-hero__title");
        // want a variable that represents a collection of our page section elements.
        // They all have page-section in common, so target them based on that.
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createHeaderWaypoint();
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWaypoints();
    }

    // using lazy loading messes with waypoints, so we need a way to refresh them when a 
    // new image to be lazy loaded is added.
    refreshWaypoints() {
        this.lazyImages.on('load', function() {  // will refresh all waypoints when lazy image is loaded.
            Waypoint.refreshAll();
        });
    }
    addSmoothScrolling() {
        this.headerLinks.smoothScroll( {
            speed: "auto",
            autoCoefficient: 2
        });
    }
    createHeaderWaypoint() {
        // reference variable to point to actual class object since it cannot be 
        // reached once inside nested functions.
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if (direction == "down") {
                    that.siteHeader.addClass("site-header--dark");
                }
                else {
                    that.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }

    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each( function() {
            var currentPageSection = this;

            //create waypoints in the DOWN direction
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "18%"
            });

            //create waypoints in the UP direction
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "-40%"
            });
        });
    }
}

export default StickyHeader;