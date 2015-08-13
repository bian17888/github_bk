require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery.min',
        jqueryUI: '../bower_components/jquery-ui/jquery-ui'
    },
    config: {

    }
});

define('main', ['jquery', 'jqueryUI'], function($) {
    $(function() {

        $.widget('learn.official_demo', {
            // default options
            options: {
                red: 255,
                green: 0,
                blue: 0,

                // callbacks
                change: function(){
                    setTimeout(function(){
                        console.log(213);
                        this.destroy();
                    },2000)
                },
                random: null
            },

            // the constructor
            _create: function() {

                this.element.addClass('custom-colorize');

                // *** : 添加 dom 的新写法
                this.changer = $('<button>', {
                        text: 'change',
                        'class': 'custom-colorize-changer'
                    })
                    .button()
                    .appendTo(this.element);

                this._on(this.element, {
                    'click button': 'random'
                })

                this._refresh();

            },

            // _setOption is called for each individual option that is changing
            _setOption: function(key, value) {

                var reg = /red|green|blue/;

                if (reg.test(key) && (value < 0 || value > 255)) {
                    return;
                };

                this._super(key, value);

            },

            // _setOptions is called with a hash of all options that are changing
            // always refresh when changing options
            _setOptions: function() {

                // _super and _superApply handle keeping the right this-context
                this._superApply(arguments);
                this._refresh();

            },

            // events bound via _on are removed automatically
            // revert other modifications here
            _destroy: function() {
                // remove generated elements
                this.changer.remove();

                this.element
                    .removeClass("custom-colorize")
                    .enableSelection()
                    .css("background-color", "transparent");
            },

            // a public method to change the color to a random value
            // can be called directly via .colorize( "random" )
            random: function(event) {
                var colors = {
                    red: Math.floor(Math.random() * 256),
                    green: Math.floor(Math.random() * 256),
                    blue: Math.floor(Math.random() * 256),
                }

                // trigger an event, check if it's canceled
                if (this._trigger("random", event, colors) !== false) {
                    this.option(colors);
                }
            },

            // called when created, and later when changing options
            _refresh: function() {
                var rgbColors = this.options.red + ',' + this.options.green + ',' + this.options.blue;

                this.element.css('background-color', 'rgb(' + rgbColors + ')');

                // trigger a callback/event
                this._trigger("change");
            }
        })

        $('#my-widget1').official_demo({
            red: 500,
            green: 300
        });
    })
})
