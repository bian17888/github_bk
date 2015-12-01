({
	appdir: "../static",
	mainConfigFile: "../static/js/main.js",
	dir: "../static-build",
	module : [
		{
			name : 'js/main',
			include : ['utils']
		},
		{
			name : 'js/pages/home'
		}
	]
})