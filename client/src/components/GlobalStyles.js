import { createGlobalStyle } from "styled-components";

export const themeVars = {
    white: "#FFFFFF",
    black: "#000000",
    pink: "#FE2693",
    yellow: "#FFD116",
    caribbeanGreen: "#06D6A0",
    midnightGreen: "#073B4C",
    blue: "#13A4E7",
};

export default createGlobalStyle`
* {
    margin: 0;
    font-family: 'Roboto', sans-serif;
}

html {
    scroll-behavior: smooth;
}

.pagination {
    justify-content:center;
    margin: 0;
    padding:0;
    display: flex;
    list-style: none;
    outline: none;
    width: 100%;
}
.pagination > .active > a{
    background-color: #13A4E7 ;
    border-color: #13A4E7 ;
    color: #fff;
}
.pagination > li > a{
    border: 1px solid #13A4E7 ;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
}
.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
    background-color: #13A4E7 ;
    border-color: #13A4E7;
    outline: none ;
}
.pagination > li > a, .pagination > li > span{
    color: #13A4E7
}

.pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
    border-radius: unset
}
`;
