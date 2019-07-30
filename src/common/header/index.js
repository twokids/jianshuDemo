import React, { Component } from 'react';
import { HeaderWraper, Logo, Nav, NavItem, SearchWrapper,NavSearch, Addition, Button } from './style'

class Header extends Component {
    render() {
        return (<HeaderWraper>
            <Logo />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <NavSearch></NavSearch>
                    <span className="iconfont">&#xe617;</span>
                </SearchWrapper>
                <Addition>
                    <Button className='write'>
                        <span className="iconfont">&#xe652;</span>写文章</Button>
                    <Button>注册</Button>
                </Addition>
            </Nav>
        </HeaderWraper>)
    }
}

export default Header;