import React from 'react';
import styled from "@emotion/styled";
import Image from 'next/image';


const Contenido = styled.div`
    text-align: center;
`;

const Casos = () => {
    return ( 
        <Contenido className='contenedor'>
            <h2 className='title'>Our Cases</h2>
            <p className='info'>Working with Wonderful Creative Agency our website
            was a pretty smooth operation. They shared our vision for the and helped us realise 
            it and we couldn't be more pleased with the results.</p>
            <div className='collage'>
                <div className='grid-collage'>
                    <Image src="/collage1.jpg" alt="Vercel Logo" width={900} height={500}/>
                    <Image src="/collage2.webp" alt="Vercel Logo" width={400} height={500}/>
                    <Image src="/collage3.jpg" alt="Vercel Logo" width={400} height={300}/>
                    <Image src="/collage4.jpg" alt="Vercel Logo" width={400} height={300}/>
                    <Image src="/collage6.png" alt="Vercel Logo" width={400} height={300}/>
                </div>
                <div className='fondo'>
                    <Image src="/azul2.webp" alt="Vercel Logo" width={800} height={300}/>
                </div>
            </div>
        </Contenido>
    );
}
 
export default Casos;