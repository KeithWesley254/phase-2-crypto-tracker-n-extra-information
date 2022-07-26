import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    color:"#282c34",
};

export const darkTheme = {
    body: "#282c34",
    color: "#fff",
};

export const GlobalStyle = createGlobalStyle `

body {
    background-color: ${(props) => props.theme.body}
}

`