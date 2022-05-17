import { createGlobalStyle } from "styled-components";

const lightTheme = {
  pageBackground: "hsl(0, 0%, 98%)",
  pageColor: "hsl(235, 19%, 35%)",
  pageBackgroundImage: "bg-desktop-light.jpg",
  pageBackgroundImageMobile: "bg-mobile-light.jpg",
  textActive: "hsl(220, 98%, 61%)",
  textInActive: "hsl(236, 9%, 61%)",
  isCompleted: "hsl(236, 9%, 61%)",
  textHover: "hsl(235, 19%, 35%)",
  themeIconToggle: "icon-moon.svg",

  outLine: "1px solid hsl(233, 11%, 84%)",
  todoInputBackground: "hsl(0, 0%, 98%)",
};

const darkTheme = {
  pageBackground: "hsl(235, 21%, 11%)",
  pageColor: "hsl(234, 39%, 85%)",
  pageBackgroundImage: "bg-desktop-dark.jpg",
  pageBackgroundImageMobile: "bg-mobile-dark.jpg",
  textActive: "hsl(220, 98%, 61%)",
  textInActive: "hsl(234, 11%, 52%)",
  isCompleted: "hsl(234, 11%, 52%)",
  textHover: "hsl(236, 33%, 92%)",
  themeIconToggle: "icon-sun.svg",
  outLine: "1px solid hsl(233, 14%, 35%)",
  todoInputBackground: "hsl(235, 24%, 19%)",
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export const GlobalStyles = createGlobalStyle`
	body {
    background-color: ${(props) => props.theme.pageBackground};
		font-size: 18px;
    padding: 0;
    margin: 0;
    font-family: 'Josefin Sans', sans-serif;
    color: ${(props) => props.theme.pageColor};
    transition: background-color 0.5s ease;
  }
  h1{
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 20px;
    margin: 0;
    line-height: 40px;
  }
  ul,li{
    margin: 0;
    padding: 0;
    text-decoration:none;
    list-style-type:none;
  }

  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
  }
  .button{
    border: none;
    background: none;
    color: ${(props) => props.theme.textInActive};
  }
  .button:hover{
    color: ${(props) => props.theme.textHover};
  }
  
  .button.active {
    color: ${(props) => props.theme.textActive};
  }
`;


