require.config({
	baseUrl : 'js',
    paths: {
        jquery: 'jquery-2.1.1.min'
    }
});

require(["app"], function (app) {
    app.init();
});