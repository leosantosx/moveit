import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    
    :root {
        --white: #ffffff;
        --background: #e5e5e5;
        --gray-line: #dcdde0;
        --text: #666666;
        --text-highlight: #b3b9ff;
        --title: #2e384d;
        --red: #e83f5b;
        --green: #4cd62b;
        --blue: #5965e0;
        --blue-dark: #4953b8;
        --blue-twitter: #2aa9e0;
    }

    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

    body{
        font-family: 'Inter', sans-serif;
        background: var(---background);
        color: var(--text);
        transition: all 0.25s linear;
    }

    body, button, input, textarea{
        font: 400 1rem 'Inter', sans-serif;
    }

    button{
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

`

export default GlobalStyle