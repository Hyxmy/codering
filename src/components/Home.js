import React from 'react';
require('styles/home.less');

var Home = React.createClass({
	render: function(){
		return (<div className="index">
					<div className="main">
						<div className="container">
							<div className="texture">
								<div className="lesson">
								
								</div>
								<div className="intro">
									<div className="description">
										为新手程序员提升打字速度的网站
									</div>
									<div className="description">
										对某些在编程中容易出现却又难打的字符进行针对性的练习
									</div>
									<div className="description last">
										通过练习一些小实例来提升编程技能
									</div>
									<div className="begin-btn">
										<a href="" className="LTbegin">开始吧</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
})

export default Home;