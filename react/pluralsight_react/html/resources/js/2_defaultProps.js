/** jsx demo */
(function() {
	'use strict';					

	/** demo01: base */
	var Text = React.createClass({
		getDefaultProps : function () {
			return {color : 'black', backgroundColor : 'red'};
		},
		render : function () {
			var styles = {
				color : this.props.color,
				backgroundColor : this.props.backgroundColor
			}
			return <p style={styles}> {this.props.content} </p>;
		}
	});
	// 注意： <Text content 中的值，也被放入props中 － 查看{this.props}可知
	React.renderComponent(<Text content="not default props " />, document.getElementById('app'));
	
	/*  pro版本：新的属性覆盖 defaultProps */
	// React.renderComponent(<Text color="#ffffff" backgroundColor="#000000"  content="rewrite default props "/>, document.getElementById('app'));


})();

