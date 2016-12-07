import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import ModalsBasic from './modalsBasic';

const Header = React.createClass({
	getInitialState: function() {
		return ({
			login: false
		});
	},
    componentDidMount: function(){
        window.onscroll = function(){
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            if (t > 0) {
                var reg = new RegExp('(\\s|^)' + 'no-bg' + '(\\s|$)');
                document.getElementById("header").className = document.getElementById("header").className.replace(reg, ' ');
            } else {
                document.getElementById("header").className += "no-bg";
            }
        }
        var elemId = document.getElementById("s-nav");
        var links = elemId.getElementsByTagName("li");
        for (var i = 0; i < links.length; i++) {
            links[i].onclick = function() {
                for (var n = 0; n < links.length; n++) {
                    links[n].className = "";
                    this.className = "active";
                    this.blur();
                }
            }
        }

    },
	handleLogin: function(){
		
	},
	render: function(){
		var state = this.state;
		return (
			<div className="header-wrapper " id="header">
				<div className="header">
					<Link to="/Home" className="logo"><img src="../images/logo-green.png"/></Link>
					<ul className="sub-nav" id="s-nav">
						<li className="active">
							<Link to="/Home">首页</Link>
                            <span className="nav-bar"></span>
						</li>
						<li className="">
							<Link to="/print">选择语言</Link>
						</li>
					</ul>
                    <div className="user-nav">
                        <Link to=""><img src="../images/light-man.svg"/></Link>
                        <span>
                            <Link to="/login" onclick={this.handleLogin}>登入</Link>
                            <Link to="">注册</Link>
                        </span>
                    </div>
	  			</div>
			</div>
			
  		);
	}
});

export default Header;