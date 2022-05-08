import React from 'react';
import styled from '@emotion/styled';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from "react-icons/ai";
import { SiIndeed } from "react-icons/si" 

const ItemsFooter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 60px 0 20px;
    max-width: 900px;
`;

const Sociales = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 10px;
`;

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className='contenedor'>
                <ItemsFooter>
                    <div>
                        <h3>Headline</h3>
                        <p>Sample footer text</p>
                    </div>
                    <div>
                        <h3>Headline</h3>
                        <p>Sample footer text</p>
                    </div>
                    <div>
                        <h3>Headline</h3>
                        <p>Sample footer text</p>
                    </div>
                </ItemsFooter>
                <Sociales className='icon-social'>
                    <i><FaFacebookF></FaFacebookF></i>
                    <i><AiOutlineInstagram></AiOutlineInstagram></i>
                    <i><SiIndeed></SiIndeed></i>
                </Sociales>
            </div>
        </footer>
    );
}
 
export default Footer;