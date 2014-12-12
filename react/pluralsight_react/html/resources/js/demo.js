/** jsx demo */
(function() {
	'use strict';					// javascript 严格模式

	var Header = {
		content : '123'
	};

	var Quiz = React.createClass({
	    render : function  () {
	        return  (
	        	<div className="demo-wrap container">
	        		{mixins : [Header].content}
	        	</div>
	        )
	                
	    }
	});
	React.renderComponent(<Quiz />, document.getElementById('app'));

})();
