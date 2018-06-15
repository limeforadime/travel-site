import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
// the waypoints package provides excellent support for scroll-based location events
class RevealOnScroll {

    constructor(elements, offset) {
        this.itemsToReveal = elements;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }
    // one waypoint will represent one hidden item.
    createWaypoints() {
        var that = this;
        // the itemsToReveal contains an ARRAY of each element with the feature-item classname.
        // so can use jquery method each() to go through them.
        this.itemsToReveal.each( function() {
            // the jquery "each()" method has "this" assigned to the current DOM element being cyled thru.
            var currentItem = this;
            new Waypoint({
                element: currentItem, // element to act on when scrolled to
                handler: function() { // what we want to happen to that element
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: that.offsetPercentage
            });
        });
    }
}

export default RevealOnScroll;