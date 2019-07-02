import React,{Component} from 'react';
import {HeaderWraper,Logo,Nav,NavItem,NavSearch,Addition,Button} from './style'

class Header extends Component{
    render(){
        return (<HeaderWraper>
            <Logo/>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">Aa</NavItem>
                <NavSearch></NavSearch>
                <Addition>
                    <Button className='write'>写文章</Button>
                    <Button>注册</Button>
                </Addition>
            </Nav>
            </HeaderWraper>)
    }
}

export default Header;