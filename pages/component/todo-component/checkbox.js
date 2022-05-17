import { useState} from "react";
import  PropTypes  from "prop-types";
import styled from "styled-components";


const Label = styled.label`
  input[type="checkbox"] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
   }

  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    margin: 10px;
    border: ${(props) => props.theme.outLine};
    transition: all 0.5s ease;
    z-index: 100;
    cursor: pointer; 
  }

  .checkbox :hover{
    //border: ${(props) => props.theme.outLine};
    
  }

  .checkbox.active {
    background: hsl(192, 100%, 67%); /* Old browsers */
    background: -moz-linear-gradient(
      -45deg,
      hsl(192, 100%, 67%) 0%,
      hsl(280, 87%, 65%) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      -45deg,
      hsl(192, 100%, 67%) 0%,
      hsl(280, 87%, 65%) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      135deg,
      hsl(192, 100%, 67%) 0%,
      hsl(280, 87%, 65%) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=hsl(192, 100%, 67%), endColorstr=hsl(280, 87%, 65%),GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }
   .checkbox.disabled {
    cursor: default; 
   }
`;



const Checkbox = ({ checked, onChange, styleClass}) => {
  const handleChange = (event) =>{
      const {checked} = event.target;
      onChange(checked);
  };
  
  return (
    <Label>
          <input 
          type="checkbox" 
          value={checked}
          defaultChecked={checked}
          onChange={handleChange} />
          
          <span className={`checkbox ${checked ? "active" : ""} noselect ${styleClass}`} aria-hidden="true">
            {checked ? <img src="images/icon-check.svg"/> : ''}
          </span>
    </Label>
  );
}
Checkbox.prototype = {
    styleClass: PropTypes.string,
    selected: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Checkbox;
