/** jsx demo */
(function() {
	'use strict';					// javascript 严格模式

	React.initializeTouchEvents(true);
	/** demo01: Component 事件 */
	var TouchEvent = React.createClass({
		render: function() {
			return (
				<div id="touch" onTouchEnd={this.touchTest}>touch Events demo</div>
			);
		},
		touchTest : function(){
			alert('touch');
		}
	});
	React.renderComponent(<TouchEvent />, document.getElementById('app'));

	
})();
