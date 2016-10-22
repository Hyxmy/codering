require('sources/bower_components/bower-pt-sans/styles/pt_sans.css')
require('sources/bower_components/ubuntu-mono-powerline/font.css')
require('styles/reset.less');
require('styles/header.less');
require('styles/printing.less');

import React from 'react';
import Code from './getCode.js';

var codeStr = Code('https://raw.githubusercontent.com/jquery/jquery/master/src/traversing.js');

var typing = React.createClass({
	getInitialState: function() {
		return {
			codeArr: [],
			lineArr: [0],
			page: 0,
			items: [],
			end: false,
		};
	},
	componentWillMount: function() {
		this.nextPage();	
	},
	nextPage: function(){
		if (this.state.end) return;
		var page = this.state.page + 1;
		var lineArr = this.state.lineArr;
		var currentTopline = lineArr[page-1];
		var codeAllArr = codeStr.split(/\n/);
		var nextTopline = lineArr[page]? lineArr[page]: null;
		var items = [];
		if (nextTopline) {
			items = codeAllArr.slice(currentTopline,nextTopline);
		}else{
			items = codeAllArr.slice(currentTopline);
			
			var blockL = 0,blockR = 0,i = 0;
			for(var v1 of items){
				i++;
				if (v1.indexOf('{') != -1) {
					blockL++;
					if (i>30 || (i > 10 && blockL > blockR+1)) break;
				}
				if(v1.indexOf('}') != -1) {
					if (blockL>0) blockR++;
					if (i>=20 && blockL==blockR) break;
				}
			}
			items = codeStr.split(/\n/).slice(currentTopline,currentTopline+i);
		}
		if (lineArr[lineArr.length-1] < lineArr[page-1]+i) {
			lineArr.push(lineArr[page-1]+i);
			console.log(true);
			this.setState({
				lineArr: lineArr
			})
		}
		if (lineArr[page-1]+i == codeAllArr.length) {
			this.setState({
				end: true,
			})
		}
		this.setState({
			items: items,
			page: page,
		},function(){
			this.getCode();
		});
		
	},
	previousPage: function(){	
		var lineArr = this.state.lineArr;
		var page = this.state.page;
		if (page == 1) return;
		var currentTopline = lineArr[page-1];
		var previousTopline = lineArr[page-2];
		var items = codeStr.split(/\n/).slice(previousTopline,currentTopline);
		this.setState({
			page: page-1,
			items: items,
			end: false,
		},function(){
			this.getCode();
		})
		
	},
	getCode: function(){	
		var items = this.state.items;
		// console.log(this.state.lineArr["1"]);
		var codeArr = [];
		for(var v1 of items){
			for(var v2 of v1.split("")){
				codeArr.push(v2);
			}
			codeArr.push('\n');
		}
		this.setState({
			codeArr: codeArr,
		})
	},
	render: function(){
		var codeArr = this.state.codeArr;
		var i = 0;
		return  (
			<div className="main">
				<pre>
					{	
						codeArr.map(function(item){
							i++;
							if (item == '\n') {
								return <span className="return" key={'re'+i}>{item}</span>
							}else{
								return <span className="p" key={'p'+i}>{item}</span>
							}
							
						})
					}
				</pre>
				<div className="pageing">
					<span onClick={this.previousPage}>上一页</span>
					<span onClick={this.nextPage}>下一页</span>	
				</div>
			</div>
		)
	}
});

export default typing;
