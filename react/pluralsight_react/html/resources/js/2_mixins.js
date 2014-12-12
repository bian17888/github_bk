/** jsx demo */
(function() {
	'use strict';					

	var Highlight = {
		componentDidUpdate : function  () {
			var node = $(this.getDOMNode());
			node.slideUp();
			node.slideDown();
		}
	};

	/** demo01: base */
	var Count = React.createClass({
		getDefaultProps : function(){
			return {height : '100px', backgroundColor : '#ccc', border : '2px solid #ff0'}
		},
		getInitialState : function(){
			var state = {
				counter : 1
			};
			setInterval(function(){
				this.setState({counter : this.state.counter +1 });
			}.bind(this),3000);
			return state;
		},
		mixins : [Highlight],
		render : function () {
			var styles = {
				height : this.props.height,
				backgroundColor : this.props.backgroundColor,
				border : this.props.border
			};
			return <p style={styles}>{this.state.counter}</p>;
		}
		
	});

	React.renderComponent(<Count />, document.getElementById('app'));

})();

