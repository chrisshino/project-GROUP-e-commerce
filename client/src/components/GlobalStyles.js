import { createGlobalStyle } from "styled-components";

export const themeVars = {
    white: '#FFFFFF',
    black: '#000000',
    pink: '#FE2693',
    yellow: '#FFD116',
    caribbeanGreen: '#06D6A0',
    midnightGreen: '#073B4C',
    blue: '#13A4E7'
}

export default createGlobalStyle`
* {
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
`;