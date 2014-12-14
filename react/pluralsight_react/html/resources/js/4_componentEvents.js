/** jsx demo */
(function() {
	'use strict';					// javascript 严格模式

	/** demo01: Component 事件 */
	var Timer = React.createClass({
		render: function() {
			return (
				<div id="touch"></div>
			);
		},
		componentDidMount : function  () {
			setInterval(this.props.onInterval, this.props.interval);
		}	
	});
	function thingToDo () {
		console.log('tick');
	};
	React.renderComponent(<Timer onInterval = {thingToDo} interval={1000} />, document.getElementById('app'));

	
})();
