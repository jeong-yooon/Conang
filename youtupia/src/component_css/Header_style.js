import styled from 'styled-components';

export const HeaderDiv=styled.div`
    width: 100%;
    font-family: 'Noto Sans', 'sans-serif';
    background-color: black;
`

export const NavDiv=styled.div`
    display: flex;
    flex-direction: row;    
    justify-content: center;  
    margin: 0px 50px;  
`
export const NavInput=styled.input`
    width: 500px;
    height: 30px;
    border-radius: 15px;
    padding-left: 30px;
    margin-right: 30px;
`

export const NavButton=styled.div`
    text-decoration: none;
    font-size: 20px;  
    color: white;
    margin-right: 30px;
    transition: 0.3s;
    &:hover{
        color: #FF0101;
    }
    border: solid 1px;
    padding: 10px;
    border-radius: 20px;
`

export const NavContent=styled.div`
    color: white;
    margin: 10px 30px;
    // width:92px;
    font-size:20px; 
    // font-weight:500;
    // line-height:25.04px;
    // text-decoration: none;
    transition: 0.3s;
    &:hover{
        color: #FF0101;
    }
`
export const Logo=styled.div`
    display: flex;
    flex-direction: row;    
    justify-content: center; 
    margin:35px 0px;  
    // color: white;
`
export const ContentDiv=styled.div`
    display: flex;
    float:right;
    margin: auto 0;
    text-decoration: none;    
`
export const Logoimg=styled.img`
    margin-right: 30px;
    margin-top: 10px;
    height:30px;
    width:100px;
    object-fit:fill;
`

export const Logoname=styled.div`
    color: white;
    font-family: Noto Sans;
    font-size: 30px;
    margin-right: 100px;
`
