/** jsx demo */
(function() {
	'use strict';					// javascript 严格模式

	// Quiz组件
	var Quiz = React.createClass({
		propTypes: {
            data: React.PropTypes.array.isRequired
        },
		getInitialState: function () {
            return _.extend({
                bgClass: 'neutral',
                showContinue: false,
            }, this.props.data.selectGame());
        },   
        handleBookSelected: function(title) {
            var isCorrect = this.state.checkAnswer(title);
            this.setState({
                bgClass: isCorrect ? 'pass' : 'fail',
                showContinue: isCorrect
            });
        },
        handleContinue: function () {
            this.setState(this.getInitialState());
        },
		render : function  () {
			return  (
				<div className="demo-wrap container">
					<div className="row"><h2>The Authoe Quiz</h2></div>
					<div className="row">
						<div className="col-md-4"><img className="img-thumbnail" src={this.state.author.imageUrl} /></div>
						<div className="col-md-7">
							<table className="table table-bordered">
								{this.state.books.map(function(b){				// 利用Array的map方法
									return <Book onBookSelected={this.handleBookSelected} key={b} title={b} />;
								},this)}
							</table>
						</div>
						<div className="col-md-1"></div>
					</div>
					{this.state.showContinue ? (
                        <div className="row">
                            <div className="col-md-12">
                                <input onClick={this.handleContinue} type="button" className="btn btn-primary btn-lg pull-right" value="Continue" />
                            </div>                        
                        </div>) : <span/>
                    }  
				</div>
			)
					
		}
	});
	// Quiz的子组件Book 
	var Book = React.createClass({
		propTypes : {
			title : React.PropTypes.string.isRequired
		},	
		handleClick: function () {
            this.props.onBookSelected(this.props.title);
        },
		render: function() {
			return (
				<tr onClick={this.handleClick}>
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
            books: ['The Adventures of Huckleberry Finn']
        },
        {
            name: 'Joseph Conrad',
            imageUrl: '/resources/images/authors/josephconrad.png',
            books: ['Heart of Darkness']
        },
        {
            name: 'J.K. Rowling',
            imageUrl: '/resources/images/authors/jkrowling.jpg',
            imageSource: 'Wikimedia Commons',
            imageAttribution: 'Daniel Ogren',
            books: ['Harry Potter and the Sorcerers Stone']
        },
        {
            name: 'Stephen King',
            imageUrl: '/resources/images/authors/stephenking.jpg',
            imageSource: 'Wikimedia Commons',
            imageAttribution: 'Pinguino',
            books: ['The Shining','IT']
        },
        {
            name: 'Charles Dickens',
            imageUrl: '/resources/images/authors/charlesdickens.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['David Copperfield', 'A Tale of Two Cities']
        },
        {
            name: 'William Shakespeare',
            imageUrl: '/resources/images/authors/williamshakespeare.jpg',
            imageSource: 'Wikimedia Commons',
            books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
        }
    ];

	data.selectGame = function () {
        var books = _.shuffle(this.reduce(function (p, c, i) {
            return p.concat(c.books);
        }, [])).slice(0,4);

        var answer = books[_.random(books.length-1)];

        return {
            books: books,
            author: _.find(this, function (author) {
                return author.books.some(function (title) {
                    return title === answer;
                });
            }),

            checkAnswer: function (title) {
                return this.author.books.some(function (t) {
                    return t === title;
                });
            }
        };
    };
	
	React.renderComponent(<Quiz data={data} />, document.getElementById('app'));			// ***注意：此处data={data}

})();
