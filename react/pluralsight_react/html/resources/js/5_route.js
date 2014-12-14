/** jsx demo */
(function() {
	'use strict';					// javascript 严格模式

	/** demo01: route  */
	var Route01 = React.createClass({
		goNextPage : function  () {
			routie('page/biankai');
		},
		render: function() {
			return (
				<div>
					<h3>First page</h3>
					<p>
						<button type="button" value="" onClick={this.goNextPage}>go next page</button>
					</p>
				</div>
			);
		}
		
	});

	var Route02 = React.createClass({
		goNextPage : function  () {
			routie('');
		},
		render: function() {
			return (
				<div>
					<h3>Second page</h3>
					<p>
						<button type="button" value="" onClick={this.goPrevPage}>go prev page</button>
					</p>
				</div>
			);
		}
		
	});
	

	routie({
		'' : function(){
			React.renderComponent(<Route01 />, document.getElementById('app'));
		},
		'page/:name' : function(){
			React.renderComponent(<Route02 />, document.getElementById('app'));	
		}
	});
	
})();
