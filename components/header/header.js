import React from 'react';
import items from "./headerItems";
import styled from '@emotion/styled';
import Link from 'next/link';

const Encabezado = styled.header`
    .items-header{
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }

    ul{
        list-style: none;
        display: flex;
        column-gap: 20px;
    }

    p{
        color: blue;
        font-weight: 700;
    }

`;

const Header = () => {
    return ( 
        <>
            <Encabezado className='contenedor'>
                <div className="items-header">
                    <div>
                        <p>DESIGN STUDIO</p>
                    </div>
                    <nav>
                        <ul>
                            { items.map( (item, valor) => (
                                <li key={valor}> { item.name } </li>
                              ))
                            }
                        </ul>
                    </nav>
                </div>
            </Encabezado>
        </>
    );
}
 
export default Header;