(function($) {

    /**
     * Yearly Counter Clock Face
     *
     * This class will generate a yearly counter for FlipClock.js. A
     * yearly counter will track years, days, hours, minutes, and seconds. If
     * the number of available digits is exceeded in the count, a new
     * digit will be created.
     */

    FlipClock.YearlyCounterFace = FlipClock.Face.extend({

        /**
         * Build the clock face
         */

        build: function() {
            var offset = 0;

            var time = this.time.getYearCounter(this.getOption('showSeconds'));

			for(var i in time) {
				this.createList(time[i]);
			}

			if(this.getOption('showSeconds')) {
				this.createDivider('Seconds').$el.insertBefore(this.lists[this.lists.length - 2].$el);
			}
			else
			{
				offset = 2;
			}
			
            this.createDivider('Minutes').$el.insertBefore(this.lists[this.lists.length - 4 + offset].$el);
            this.createDivider('Hours').$el.insertBefore(this.lists[this.lists.length - 6 + offset].$el);
            this.createDivider('Days').$el.insertBefore(this.lists[this.lists.length - 9 + offset].$el);
            this.createDivider('Years', true).$el.insertBefore(this.lists[0].$el);

            this.base();
        },

        /**
         * Flip the clock face
         */

        flip: function(time) {
            if(!time) {
                time = this.time.getYearCounter(this.getOption('showSeconds'));
            }

			this.base(time);
            this.autoIncrement();
        }

    });

}(jQuery));