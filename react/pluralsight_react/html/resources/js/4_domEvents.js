/** jsx demo */
(function() {
	'use strict';					// javascript 严格模式

	/** demo01: DOM事件 */
	var Echo = React.createClass({
		getInitialState : function() {
			return {value : "init value"}
		},
		handleChange : function(event){
			this.setState({value: event.target.value});
		},
		// <input type="text" /> <br/>		// is an uncontrolled component
		// <input type="text" defaultValue="default value" /><br/>		// If you want to initialize the component with a non-empty value, you can supply a defaultValue prop. For example:
		render: function() {
			return (
				<div >
					<input type="text" /> <br/>
					<input type="text" defaultValue="default value" /><br/>
					<input type="text" value="init value" /><br/>
					<input type="text" value={this.state.value} onChange={this.handleChange} /><br/>
				</div>
			);
		}
	
	});
	
	React.renderComponent(<Echo />, document.getElementById('app'));

	
})();
