import React from 'react';

var header = React.createClass({
	getInitialState: function() {
		return ({
			login: false
		});
	},
	render: function(){
		var state = this.state;
		return (
			<div className="header">
				<div className="logo">
					<a href="" className="index"><span className="t">coding</span>.io</a>
				</div>
				<div className="sub-nav">
					<ul>
						<li>
							<a href="">主页 </a>
						</li>
						<li>
							<a href="">选择语言</a>
						</li>
						<li>
							<div className={state.login?"userwrapper":"userWrapper signin"}>
								<div className="user">
									<span className="user popOutBtn">
										<a href=""><span className="username">jiweixia66</span></a>
									</span>
									<span className="bubble">
										<a className="popOutBtn signout" href="">登出</a>
									</span>
								</div>
								<div className="NewComer">
									<a className="popOutBtn signin" href="">登录/注册</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
  			</div>
  		);
	}
});

export default header;