import {Link} from 'react-router-dom';
import {
    HeaderDiv,
    NavDiv,
    NavInput,
    NavButton,
    NavContent,
    Logo,
    ContentDiv,
    Logoimg,
    Logoname
} from './../component_css/Header_style';

const Header = () => {
    return (
        <HeaderDiv>            
            <NavDiv>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                    <Logo>
                        <Logoimg src={'img/logo.png'}></Logoimg>
                        <Logoname>YOUTUPIA</Logoname>
                    </Logo>
                </Link>
                <ContentDiv>
                    <NavInput type="text" name="message" placeholder='검색어를 입력하세요'>
                    </NavInput>
                    <Link to={"/search"} style={{ textDecoration: 'none' }}>
                        <NavButton>검색</NavButton>
                    </Link>
                    <Link to={"/login"} style={{ textDecoration: 'none' }}>
                        <NavContent>로그인</NavContent>
                    </Link>

                    <Link to={"/mypage"} style={{ textDecoration: 'none' }}>
                        <NavContent>마이페이지</NavContent>
                    </Link>
                </ContentDiv>  
            </NavDiv>            
        </HeaderDiv>
        
    )
}

export default Header