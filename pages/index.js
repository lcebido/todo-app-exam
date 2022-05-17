import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled, { ThemeProvider } from "styled-components";
import { themes, GlobalStyles } from "./component/theme";
import Background from "./component/background";
import Todo from "./component/todo";

const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: top;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease;
`;

const Index = () => {
  const [theme, setTheme] = useState("light");
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      
      <GlobalStyles />
      <MainContainer>
        <Todo theme={theme} setTheme={themeToggle}></Todo>
      </MainContainer>
      <Background theme={theme}></Background>
    </ThemeProvider>
  );
};
export default Index;
