/** jsx demo */
(function() {
	'use strict';					

	/** demo01: getLnitialState */
	var ShowState = React.createClass({
		getInitialState : function () {
			return {answer : 42};	
		},
		render : function () {
			return <div>InitialState is : {this.state.answer} </div>;
		}
	});
	React.renderComponent(<ShowState />, document.getElementById('app'));


	/** demo02: change state */
	// var Count = React.createClass({
	// 	getInitialState : function(){
	// 		var state = {counter : 1};
	// 		setInterval(function(){
	// 			this.setState({counter: this.state.counter + 1});
	// 		}.bind(this),1000)
	// 		return state;
	// 	}
	// 	,
	// 	render : function(){
	// 		return (
	// 			<div>
	// 				<h3>change state : setInterval()</h3>
	// 				<p>{this.state.counter}</p>				
	// 			</div>
	// 		)
	// 	}
	// });
	// React.renderComponent(<Count />, document.getElementById('app'));


	/** demo03: change state (pro版) */
	// var Count = React.createClass({
	// 	getInitialState : function(){
	// 		var state = {counter : 1};
	// 		setInterval(function(){
	// 			this.setState({counter: this.state.counter + 1});
	// 		}.bind(this),1000)
	// 		return state;
	// 	},
	// 	render : function(){
	// 		return (
	// 			<div>
	// 				<h3>change state : setInterval()</h3>
	// 				<CountDisplay counter = {this.state.counter} />				
	// 			</div>
	// 		)
	// 	}
	// });
	// // 添加嵌套组件－CountDisplay
	// var CountDisplay = React.createClass({
	// 	render : function(){
	// 		return <p>{this.props.counter}</p>					// 此处为this.props
	// 	}
	// });
	// React.renderComponent(<Count />, document.getElementById('app'));

	/** demo04: set state */
	// var OriginalState = React.createClass({
	// 	getInitialState : function(){
	// 		return { a:1, b:2};
	// 	},
	// 	divClick : function(){
	// 		this.setState({b:3, c:4});
	// 	},
	// 	render : function(){
	// 		return (
	// 			<div>
	// 				<h3>点击下面div，内容发生变化，使用setState方法</h3>
	// 				<div onClick = {this.divClick} > {'a = ' + this.state.a + ' '} {'b = ' + this.state.b + ' '} {'c = ' + this.state.c} </div>
	// 			</div>
	// 		)
	// 	}
	// });
	// React.renderComponent(<OriginalState />, document.getElementById('app'));

})();

