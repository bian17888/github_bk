/** jsx demo */
(function() {
	// 'use strict';					// javascript 严格模式

	/** demo01: 多个props */
	// var Hello_01 = React.createClass({
	//     render : function  () {
	//         return  
	//             (
	//                 <div>
	//                     <h3>Time is -----> {this.props.now} </h3>
	//                     <h3>author is -----> {this.props.name} </h3>
	//                 </div>
	//             )
	//     }
	// });
	// React.renderComponent(<Hello_01 now={new Date().toString() } name={"biankai"} />, document.getElementById('app'));


	/** demo02: nested component */
	// var Outer = React.createClass({
	//     render : function  () {
	//         return (
	//             <div>
	//                 <h1>{this.props.title}</h1>
	//                 <Inner title={"inner-title"} />                 // ** 注意此处的写法，title是数据
	//             </div>
	//         )
	//     }
	// });
	// var Inner = React.createClass({
	//     render : function  () {
	//         return (
	//             <h3>{this.props.title}</h3>
	//         )
	//     }
	// });

	// React.renderComponent(
	//     <Outer title={'outer-title'} />,
	//     document.getElementById('app')
	// );
	
	
	/** demo03: nested component － 应用假数据 */
	// 定义post 假数据
	var post = {
		title : 'React v.0.12.0',
		content : 'content xxxxxxxx',
		comments : ['conment1', 'conment2', 'conment3', 'conment4']
	};	
	// 外层component : Post
	var Post = React.createClass({
		render : function  () {
			return (
				<div>
					<h1>{this.props.data.title}</h1>
					<p>{this.props.data.content}</p>

					{this.props.data.comments.map(function(e){					// ** 注意此处写法 : this.props.data.comments.map(fun(e){})
						return <Comment comment = {e} />
						})
					}
				</div>
			)
		}
	});
	// 内层component : Comment
	var Comment = React.createClass({
		render : function  () {
			return (
				<p>{this.props.comment}</p>
			)
		}
	});

	React.renderComponent(
		<Post data={post} />,
		document.getElementById('app')
	);

})();

