import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
	    padding: 0px;
	    box-sizing: border-box;
    }

    ul,
    ol,
    li {
	    list-style: none;
    }

    a {
	    text-decoration: none;
	    outline: 0;
    }
`;

export default GlobalStyle;
