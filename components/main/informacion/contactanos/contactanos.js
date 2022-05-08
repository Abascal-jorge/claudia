import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { GiSmartphone } from 'react-icons/gi';
import { AiOutlineMail } from 'react-icons/ai';
import styled from "@emotion/styled";

const Contact = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 60px;

    div{
        text-align: center;
    }

    p{
        font-weight: 700;
        font-size: 24px;
    }

    svg{
        font-size: 34px;
    }
`;

const Contactanos = () => {
    return ( 
        <Contact className='contenedor'>
            <div>
                <i><FiMapPin></FiMapPin></i>
                <p>123 West Street, Newton</p>
            </div>
            <div>
                <i><GiSmartphone></GiSmartphone></i>
                <p>+1 234 567 89 00</p>
            </div>
            <div>
                <i><AiOutlineMail></AiOutlineMail></i>
                <p>webmaster@gmail.com</p>
            </div>
        </Contact>
     );
}
 
export default Contactanos;