import {Link} from 'react-router-dom';
import Header from './header'
import {
    ChannelupDiv,
    ChannelupTitle,
    ChannelupContent,
    ChannelupInput,
} from './../component_css/Channel_style';
// import { MediaDiv, } from '../component_css/Study_style';

const Channelup = () => {
    return (
        <>
            <ChannelupDiv>
                <Header/>
                <ChannelupTitle>
                    채널 등록 하기
                </ChannelupTitle> 
                <ChannelupContent>
                    • 채널명
                </ChannelupContent>
                <ChannelupInput>

                </ChannelupInput>
            </ChannelupDiv>
        </>
    )
}

export default Channelup