require('sources/bower_components/bower-pt-sans/styles/pt_sans.css')
require('styles/footer.less');

import React from 'react';

var footer = React.createClass({
	render: function(){
		return (
			<div className="footer">
				 © 2016 codering.cn
				<a className="" href="">homyit.studio</a>
				<a className="" href="">Jiangxi Normal University</a>
				<a href="">huax</a>
				<span className="spacer">|</span>
				<a className="facebook" href="">QQ</a>
				<a className="twitter" href="">wechat</a>
				<a className="google-plus" href="">github+</a>
			</div>
  		);
	}
});

export default footer;