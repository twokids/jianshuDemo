import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWraper=styled.div`
height:56px;
position:relative;
border-bottom:1px solid #F0F0F0;
`

export const Logo=styled.a.attrs({
    href:'/'
})`
height:56px;
width:100px;
position:absolute;
top:0;
left:0;
display:block;
background:url(${logoPic});
background-size:contain;
`
export const Nav=styled.div`
width:960px;
height:100%;
margin:0 auto;
padding-right:70px;
box-sizing:border-box;
`
export const NavItem=styled.div`
line-height:56px;
padding:0 15px;
font-size:17px;
color:#333;
&.left{
    float:left;
}
&.right{
    float:right;
    color:#969696;
}
&.active{
    color:#ea6f5a;
}
`

export const SearchWrapper=styled.div`
position:relative;
float:left;
.iconfont:{
    position:absolute;
    right:5px;
    bottom:5px;
    background:gray;
    width:30px;
    line-height:30px;
    text-align:center;
    border-radius:15px;
}
`


export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`

width:160px;
height:38px;
border:none;
outline:none;
border-radius:19px;
margin-top:9px;
margin-left:20px;
padding:0px 35px 0px 20px;
box-sizing:border-box;
background:#eee;
font-size:14px;
color:#666;
&::placeholder{
    color:#999;
}
`

export const Addition=styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`

export const Button=styled.div`
float:right;
margin-top:9px;
line-height:38px;
border-radius:19px;
border:1px solid #ec6149;
margin-right:20px;
padding:0 20px;
font-size:14px;
color:#ec6149;
&.write{
    color:#fff;
    background:#ec6149;
}
`

