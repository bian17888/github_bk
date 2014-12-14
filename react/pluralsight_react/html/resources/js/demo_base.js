/** jsx demo */
(function() {
	'use strict';					// javascript 严格模式

	// Quiz组件
	var Quiz = React.createClass({
		propTypes: {
            data: React.PropTypes.array.isRequired
        },
		getInitialState: function() {
			return {
				imageUrl : this.props.data[0].imageUrl,
				books : this.props.data[0].books
			};
		},
		render : function  () {
			return  (
				<div className="demo-wrap container">
					<div className="row"><h2>The Authoe Quiz</h2></div>
					<div className="row">
						<div className="col-md-4"><img className="img-thumbnail" src={this.state.imageUrl} /></div>
						<div className="col-md-7">
							<table className="table table-bordered">
								{this.state.books.map(function(b){			// 利用Array的map方法
									return <Book title={b} />;
								},this)}
							</table>
						</div>
						<div className="col-md-1"></div>
					</div>
				</div>
			)
					
		}
	});
	// Quiz的子组件Book 
	var Book = React.createClass({
		propTypes : {
			title : React.PropTypes.string.isRequired
		},	
		render: function() {
			return (
				<tr>
					<td><a href="#">{this.props.title}</a></td>
				</tr>
			);
		}
	});
	// 构造假数据
	var data = [
		{
			name: 'Mark Twain', 
			imageUrl: '/resources/images/authors/marktwain.jpg',
			books: ['The Adventures of Huckleberry Finn','test_map_method']
		}
	];
	
	React.renderComponent(<Quiz data={data} />, document.getElementById('app'));			// ***注意：此处data={data}

})();
