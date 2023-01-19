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
export const ChannelRegistDiv=styled.div`
    background-color: #1A1A1A;
    height: 1080px;
    color: white;
`
export const ChannelRegistContent=styled.div`

`
export const ChannelRegistMain=styled.div`
    ch_reg{
        font-size : 32px;
        font-weight : bolder;
        font-style : Noto Sans;
    }

    text-align: left;
`
export const ChannelRegistImg=styled.img`
    width: 50px;
    height: 50px;

`
export const ChannelRegistform=styled.div`
`

export const ChannelNameList=styled.li`
    margin-bottom: 40px;
`

export const ChannelNameInput=styled.input`
    border-radius: 10px;
    // padding: 30px;
    margin: 30px;
`

export const ChannelNameLabel=styled.label`

`

export const ChannelCategoryList=styled.li`

`
export const ChannelIntroList=styled.li`

`



export const HomeDiv=styled.div`
    background-color: #1A1A1A;
    height: 1080px;
    color: red;
`

export const HeaderDiv=styled.div`

`

export const HomeContent=styled.div`

`

export const CategoryDiv=styled.div`
    font-family: sans-serif;
    font-size: 25px;
    margin-top: 100px;
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


export const MypageButton=styled.button`
`