import styled, { keyframes } from 'styled-components';

const Fade=keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const FadeHome=styled.div`
    animation: ${Fade} 1s;
`

export const HomeDiv=styled.div`
    background-color: #1A1A1A;
    height: 1080px;
    color: white;
`

export const HeaderDiv=styled.div`

`

export const HomeContent=styled.div`

`

export const CategoryDiv=styled.div`
    font-family: sans-serif;
    font-size: 25px;
    margin-top: 20px;
`

export const HomeTitleDiv=styled.div`
    display: flex;
    flex-direction: row;    
    justify-content: left;
    margin-left: 500px;
`

export const HomeContentDiv=styled.div`
    display: flex;
    flex-direction: row;    
    justify-content: center;
`

export const CategoryDot=styled.img`

`

export const CategoryTitle=styled.div`

`

export const CategoryContent=styled.div`

`

export const YoutuberDiv=styled.div`
    font-family: sans-serif;
    font-size: 25px;
    margin-top: 20px;
`

export const YoutuberTitle=styled.div`

`

export const YoutuberContent=styled.div`

`

export const ChannelupBtn=styled.button`
    font-size: 20px;
    margin-left: 40px;
    padding: 10px 20px;
    border-radius: 25px;
    border: 1px solid white;
    &:hover{
        color: #FF0101;
        background-color: black;
        border: 1px solid white;
    }
`