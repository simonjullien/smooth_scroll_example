define([
    "jquery",
    "underscore",
    "backbone",
    "config",
    "handlebars"
], function (
    $,
    _,
    Backbone,
    Config,
    Handlebars
) {
  return Backbone.View.extend({

        data: null,
        $node: null,
        isActivated: false,

        initialize: function(options) {

            this.data = options.data;
            //# Load HTML template
            require(["text!"+Config.BASE_URL+"templates/timeline_image.html!strip"], _.bind(this.onTemplateLoaded, this) );

        },

        cleanUp: function(){

        },

        onTemplateLoaded: function( template ) {

            var templateFunction = Handlebars.compile( template );
            this.$node = $( templateFunction( { 'title': 'Awesome!', 'time': new Date().toString() } ) );
            this.$el.append(this.$node);
        },

		render: function() {
		}
	});
});