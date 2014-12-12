/** jsx demo */
(function() {
	'use strict';					// javascript 严格模式

	/** demo01: 表达式嵌套 */
	var Parent = React.createClass({
	    render : function  () {
	    	var num = 5;
	        return  (
	        	<div>
	        		{ num == 5 ? <First /> : <Second /> }						// 注意：此处可用表达式
	        	</div>
	        )
	                
	    }
	});

	var First = React.createClass({
		render: function() {
			return (
				<h2>First component</h2>
			);
		}
	
	});
	var Second = React.createClass({
		render: function() {
			return (
				<h2>Second component</h2>
			);
		}
	
	});

	React.renderComponent(<Parent />, document.getElementById('app'));
})();
