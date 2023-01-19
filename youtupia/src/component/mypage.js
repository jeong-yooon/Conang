import {Link} from 'react-router-dom';
import Header from './header'
import {
    
    ChannelRegistDiv,
    ChannelRegistContent,
    ChannelRegistMain,
    ChannelRegistImg,
    ChannelRegistform,

    ChannelNameList,
    ChannelNameLabel,
    ChannelNameInput,
    ChannelCategoryList,
    ChannelCategoryLabel,
    ChannelCategoryInput,
    ChannelIntroList,
    ChannelIntroLabel,
    ChannelIntroInput,

    HeaderDiv,
    HomeContent,
    CategoryDiv,
    CategoryTitle,
    CategoryContent,
    YoutuberDiv,
    YoutuberTitle,
    YoutuberContent,
    MypageButton,

} from './../component_css/Mypage_style';
import { PinDropSharp } from '@material-ui/icons';
// import { MediaDiv, } from '../component_css/Study_style';

//요런데에 function



const Mypage = () => {
    return (
        <>          
            <ChannelRegistDiv>
                <HeaderDiv>
                    <Header/>
                </HeaderDiv> 
                <ChannelRegistContent>

                    <ChannelRegistMain>
                        <ChannelRegistImg src = "../img/index_redX.png"/> 
                        <label for="ch_reg">채널 등록하기</label>
                    </ChannelRegistMain>
                    
                    <ChannelRegistform>
                        <ChannelNameList>
                            <ChannelNameLabel for="ch_name">채널명</ChannelNameLabel>
                            <ChannelNameInput type = "text" id = "ch_name"/>
                        </ChannelNameList>
                        <ChannelCategoryList>
                            <ChannelCategoryLabel for="ch_category">채널 카테고리(복수선택가능)</ChannelCategoryLabel>
                            <ChannelCategoryInput type = "text" id = "ch_category"/>
                        </ChannelCategoryList>
                        <ChannelIntroList>
                            <ChannelIntroLabel for="ch_intro">채널 소개</ChannelIntroLabel>
                            <ChannelIntroInput type = "text" id = "ch_intro"></ChannelIntroInput>
                        </ChannelIntroList>  
                    </ChannelRegistform>
                    
                    <div id = "buttons">
                        <input type="submit" value = "등록하기"></input>
                    </div>
                </ChannelRegistContent>


                <HomeContent>
                    <CategoryDiv>
                        <CategoryTitle>
                        * 카테고리 선택
                        </CategoryTitle>
                        <CategoryContent>
                            html만 먼저 하고있당...
                        </CategoryContent>
                    </CategoryDiv>
                    
                    
                    <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <MypageButton>
                        MypageButton
                    </MypageButton>
                    </Link>


                    <YoutuberDiv>
                        <YoutuberTitle>
                            * 유튜버 선택
                        </YoutuberTitle>
                        <YoutuberContent>
                            힙으뜸 조코딩
                        </YoutuberContent>
                    </YoutuberDiv>


                </HomeContent>
            </ChannelRegistDiv>
            {/* <FadeHome> 
            </FadeHome> */}
        </>
    )
}

export default Mypage