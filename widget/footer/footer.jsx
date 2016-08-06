var React = require('react');

var Footer = React.createClass({
	render: function() {
		
		return (
			<div className="footer">
    			仅供学习FIS3与reactjs使用，设计与内容版权归简书所有。
    			<a target="_blank" href="http://fis.baidu.com">
    				FIS首页
    			</a>
			</div>
		);
	}
});

module.exports = Footer;