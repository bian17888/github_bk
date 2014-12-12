/** jsx demo */
(function() {
	'use strict';					

	/** demo01: base */
	var Hello = React.createClass({
		propTypes : {
			time : React.PropTypes.string.isRequired,
			// 查看控制台：报错样式为
			b : function(props, propName, componentName){					// 学习: 参数-props, propName, componentName
				if(props[propName] < 5) {							// 学习: if语句用法
					throw new Error (propName + "must be 5 or greater");
				}
			}
			// 查看控制台：报错样式为
			// b : React.PropTypes.string.isRequired
			// b : React.PropTypes.oneOf([4, 10])
		},
		render : function () {
			return <p>{'time :' + this.props.time} {'  b : ' + this.props.b}</p>;
		}
	});
	React.renderComponent(<Hello time={new Date().toString()} b={14} />, document.getElementById('app'));

})();

