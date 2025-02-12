import './styles.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: Inter;
    }

    input,
    label,
    textarea,
    button {
        font-family: inherit;
    }
`;

export default GlobalStyles;
