import React from "react";
import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton,  
    GuestButton, HomeContainer, CollegeInfo, CollegeImage, Title, LoremTextContainer, AdminRegisterLink 
 } from '../styles/styles';
 import { loremIpsum, LoremIpsum} from 'lorem-ipsum';
 import bg from '../assets/bg.png';
 import bg1 from '../assets/bg1.png';
 import { Link, useNavigate } from 'react-router-dom';

 const lorem = new loremIpsum();

 const Home = () => {
    const navigate = useNavigate();
    //const LoremText = lorem.generateParagraphs(1);
    
    const handleLoginClick = () => {
        navigate('/choose-user');
    };

    return (
        <>
            <Navbar>
                <Logo src={bg1} alt='Logo' />
                <NavigationLinks>
                    <NavLink href = "#">About Us</NavLink>
                    <NavLink href = "#">Products</NavLink>
                    <NavLink href = "#">Contact Us</NavLink>
                </NavigationLinks>
                <ButtonsContainer>
                    <LoginButton onClick={handleLoginClick }>Sign In</LoginButton>
                    <GuestButton onClick={handleLoginClick }>Guest Mode</GuestButton>
                </ButtonsContainer>
            </Navbar>
            <HomeContainer>
                <CollegeInfo>
                    <Title>College Management System</Title>
                   {/*} <LoremTextContainer>
                        <p> {LoremText} </p>
                    </LoremTextContainer> */}
                    <AdminRegisterLink>Admin Register</AdminRegisterLink>
                </CollegeInfo>
                <CollegeImage src = {bg} alt = "Pupils"/>
            </HomeContainer>
        </>
    )
 };

 export default Home;