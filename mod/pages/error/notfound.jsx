import React,{Component} from 'react';

class ErrorPage extends Component{
	render() {
		return (
			<div>
				<h1>页面找不到</h1> 
				<a href='/'>返回首页</a>
			</div>
		);
	}
}

export default ErrorPage;