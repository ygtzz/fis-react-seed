import React,{Component} from 'react';

class DateTime extends Component{
    render() {
        const date = this.props.date;
        const now = +new Date;
        let text='';
        const distance = now - date;
        if(distance <= 86400*1000 ){
            text = "大约" + Math.round((now - date)/3600000)+ "小时以前";
        }else if(distance < 86400000*30){
            text = Math.round((now - date)/86400000)+ "天以前";
        }else if(distance < 86400000*30*12){
            text = Math.round((now - date)/86400000/30)+ "个月以前";
        }else{
            text = "一年以前";
        }
        
        return (
            <span>
                {text}
            </span>
        );
    }
}

export default DateTime;

