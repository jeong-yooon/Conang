import {Link} from 'react-router-dom';
import Header from './header'
import {
    HomeDiv,
    HeaderDiv,
    HomeContent,
    CategoryDiv,
    HomeTitleDiv,
    HomeContentDiv,
    CategoryDot,
    CategoryTitle,
    CategoryContent,
    YoutuberDiv,
    YoutuberTitle,
    YoutuberContent,
    ChannelupBtn,
} from './../component_css/Home_style';
import { ContentDiv } from '../component_css/Header_style';
// import { MediaDiv, } from '../component_css/Study_style';

const Home = () => {
    return (
        <>          
            <HomeDiv>
                <HeaderDiv>
                    <Header/>
                </HeaderDiv> 
                <HomeContent>
                    <CategoryDiv>
                        <HomeTitleDiv>
                            <CategoryDot src={'img/dot.png'}></CategoryDot>
                            <CategoryTitle>
                                카테고리 선택
                            </CategoryTitle>
                        </HomeTitleDiv>
                        <CategoryContent>
                            동물 음식 패션 뷰티
                        </CategoryContent>
                    </CategoryDiv>
                    <YoutuberDiv>
                        <HomeTitleDiv>
                            <CategoryDot src={'img/dot.png'}></CategoryDot>
                            <YoutuberTitle>
                                유튜버 선택
                            </YoutuberTitle>
                        </HomeTitleDiv>
                        <HomeContentDiv>
                            <YoutuberContent>
                                힙으뜸 조코딩
                            </YoutuberContent>
                            <Link to={"/channelup"} style={{ textDecoration: 'none' }}>
                            <ChannelupBtn>
                                채널 등록하러 가기 ▶
                            </ChannelupBtn>
                            </Link>
                        </HomeContentDiv>
                    </YoutuberDiv>
                </HomeContent>
            </HomeDiv>
            {/* <FadeHome> 
            </FadeHome> */}
        </>
    )
}

export default Home