require('sources/bower_components/bower-pt-sans/styles/pt_sans.css')
require('sources/bower_components/ubuntu-mono-powerline/font.css')
require('styles/reset.less');
require('styles/header.less');
require('styles/printing.less');

import React from 'react';
import Code from './getCode';

var codeStr = Code('https://raw.githubusercontent.com/jquery/jquery/master/src/traversing.js');

var typing = React.createClass({
	getInitialState: function() {
		return {
			codeArr: [],
			lineArr: [0],
			page: 0,
			items: [],
			end: false,
			codeIndex: 0,
			preValue: "",
			currentValue: "",
<<<<<<< HEAD
			codeIndex: 0,
			start: 0,
			errorArr: {} 
=======
			start: 1
>>>>>>> 84007d3eef521154fefa98ae84d43cad74fd6cdc
		};
	},
	componentWillMount: function() {
		this.nextPage();	
	},
	componentDidMount: function() {
		this.refs.nameInput.focus();
		this.refs.nameInput.onblur = function(){
			this.refs.nameInput.focus();
		}.bind(this); 
	},
<<<<<<< HEAD
	gameStart: function(){
		this.setState({
			start: 1
		})
	},
=======
>>>>>>> 84007d3eef521154fefa98ae84d43cad74fd6cdc
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
	handleChange: function(event){	
<<<<<<< HEAD
		console.log(event.target.value);
		if (this.state.codeArr[this.state.codeIndex] == event.target.value) {
			this.setState({
				preValue: "",
				currentValue: event.target.value,
				codeIndex: this.state.codeIndex + 1,
			});
		}else{
			var arr = this.state.errorArr;
			arr[this.state.codeIndex] = event.target.value;
			this.setState({
				errorArr: arr,
			})
		}
		
=======
		this.setState({
			preValue: "",
			currentValue: event.target.value,
			start: this.state.start + 1,
		});
		console.log(event.target.currentValue);
>>>>>>> 84007d3eef521154fefa98ae84d43cad74fd6cdc
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
<<<<<<< HEAD
		var errorArr = this.state.errorArr;
		var codeIndex = this.state.codeIndex;
		var i = -1;
=======
		var start = this.state.start;
		var i = 0;
>>>>>>> 84007d3eef521154fefa98ae84d43cad74fd6cdc

		return  (
			<div id="main-wrapper">
				<div className="main">
					<pre>
						{	
							codeArr.map(function(item){
								i++;
								if (item == '\n') {
<<<<<<< HEAD
									return <span className={codeIndex == i? errorArr[codeIndex] ? "char-active incorrect return":"char-active return":"return"} key={'re'+i}>{item}</span>
								}else{
									return <span className={codeIndex == i? errorArr[codeIndex] ? "char-active incorrect p":"char-active p":"p"} key={'p'+i}>{item}</span>
=======
									return <span className={start == i? "char-active return":"return"} key={'re'+i}>{item}</span>
								}else{
									return <span className={start == i? "char-active p":"p"} key={'p'+i}>{item}</span>
>>>>>>> 84007d3eef521154fefa98ae84d43cad74fd6cdc
								}
								
							})
						}
					</pre>
<<<<<<< HEAD
					<div className="main-footer">
						<div className="pageing">
							<span onClick={this.previousPage}>上一页</span>
							<span onClick={this.nextPage}>下一页</span>	
						</div>
						<div className="time">
							<span>00:00</span>
							<span className="">开始/暂停</span>
							<span className="">重新开始</span>
						</div>
					</div>
					<input type="text" value={this.state.preValue} onChange={this.handleChange} ref="nameInput" />
=======
					<div className="pageing">
						<span onClick={this.previousPage}>上一页</span>
						<span onClick={this.nextPage}>下一页</span>	
					</div>
					<input type="text" maxLength="1" value={this.state.preValue} onChange={this.handleChange} ref="nameInput" />
>>>>>>> 84007d3eef521154fefa98ae84d43cad74fd6cdc
				</div>
			</div>
		)
	}
});

export default typing;
