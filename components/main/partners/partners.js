import React from 'react';
import { AiOutlineApple } from 'react-icons/ai';
import { SiNike } from 'react-icons/si';
import { RiPlaystationFill } from 'react-icons/ri';
import styled from "@emotion/styled";

const Contenido = styled.div`
    text-align: center;

    .title{
        font-size: 54px;
        margin: 10px 0;
    }

    .info{
        font-size: 20px;
        width: 70%;
        margin: 0 auto;
        padding: 30px 0;
    }
`;

const Partners = () => {
    return ( 
        <Contenido className='contenedor'>
            <h2 className='title'>Our Partners</h2>
            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipicing 
                elit nullam nunc justo sagitis suscipit ultrices</p>
            <div className='card'>
                <div className='card-item blue'>
                    <i><AiOutlineApple></AiOutlineApple></i>
                    <p>We partnered with Apple to improve the digital
                    experience for the Beats brand and Apple Support
                    </p>
                </div>
                <div className='card-item cielo'>
                    <i><SiNike></SiNike></i>
                    <p>Our time with Nike was about ´changing the game´ with a bold
                    campaign, creative direction, and emotional connection
                    </p>
                </div>
                <div className='card-item rosa'>
                    <i><RiPlaystationFill></RiPlaystationFill></i>
                    <p>We partnered with Playstation to promote its premier titles to the gamers who
                        love playing them
                    </p>
                </div>
            </div>
        </Contenido>
    );
}
 
export default Partners;