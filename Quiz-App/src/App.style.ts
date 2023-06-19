import styled from "@emotion/styled";
import { createGlobalStyles } from '@emotion/react';

export const GlobalStyle = createGlobalStyles`
    html : {
        height : 100%
    }

    body : {
        background-color : #FFFFFF;
        margin : 0;
        padding : 0 20px;
        display : flex;
        justify-content : center;
    }

    * {
        box-sizing : border-box;
    }

`