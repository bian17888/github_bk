/** jsx demo */
(function() {
	'use strict';					// javascript 严格模式

	/** demo01: refs  */
	var RefTest = React.createClass({
		render: function() {
			return (
				<div>
					<p><label>Demo01:</label><input type="text" ref="inp" value="init" /></p>
					<p>
						<label>Demo02:</label><br/>
						<input type="text" ref="ref01" defaultValue="defaultValue" /><br/>
						<input type="text" ref="ref02" defaultValue="defaultValue" /><br/>
						<button type="button" value="" onClick={this.handleAdd}>add</button><br/>
					</p>
				</div>
			);
		},
		handleAdd : function(){
			var v1 = parseFloat(this.refs.ref01.getDOMNode().value);
			var v2 = parseFloat(this.refs.ref02.getDOMNode().value);
			alert(v1+v2);
		}
		
	});
	React.renderComponent(<RefTest />, document.getElementById('app'));

	
})();
