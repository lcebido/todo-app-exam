import styled from "styled-components";

const media = {
  mobile: '@media(max-width: 375px)'
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-image: url('images/${props => props.theme.pageBackgroundImage}');
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  transition: all .5s ease;

  ${media.mobile}{
    background-image: url('images/${props => props.theme.pageBackgroundImageMobile}');
  }
`;


const background = (props) => {
  return (<Background></Background>);
};
export default background;
