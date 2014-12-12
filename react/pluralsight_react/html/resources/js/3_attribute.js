/** jsx demo */
(function() {
	'use strict';					// javascript 严格模式

	/** demo01: 多个props */
	var Attribute = React.createClass({
	    render : function  () {
	        return  (
	        	<div>
	        		<h2 className="title">标题</h2>
	        		<p> <label htmlFor="sex"> 性别</label> <input type="checkbox" id="sex" /></p>
	        		<p style={{height: '100px', backgroundColor: '#ddd'}}> style : h100</p>
	        		<p dangerourslySetInnerHTML={{__html:this.props.dangerours}}></p>
	        		<p>Time : {this.props.now}</p>
	        	</div>
	        )
	                
	    }
	});
	React.renderComponent(<Attribute name="bk" dangerours="<strong>HELLO</strong>" now={new Date().toString()} />, document.getElementById('app'));

})();
