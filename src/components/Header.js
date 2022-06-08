import React, { useState } from 'react'
import styledComponents from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { FlatwareSharp } from '@mui/icons-material';

function Header() {
  const [burgerNavStatus, setBurgerNavStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={() => setBurgerNavStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerNavStatus} >
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerNavStatus(false)} />
        </CloseWrapper>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-In</a></li>
        <li><a href='#'>Test Drive</a></li>
        <li><a href='#'>Insurance</a></li>
        <li><a href='#'>Powerwall</a></li>
        <li><a href='#'>Commercial Energy</a></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Charging</a></li>
        <li><a href='#'>Find Us</a></li>
        <li><a href='#'>Support</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styledComponents.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px ;
top: 0;
left: 0;
right: 0;
font-size: 14px;
z-index: 1;
`
const Menu = styledComponents.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;

a {
    font-weight: 700;
    text-transform: uppercase;
    padding: 0 10px;
    display: flex;
    flex-wrap: nowrap;

}
@media(max-width: 768px){
  display: none;
}
`
const RightMenu = styledComponents.div`
display: flex;
align-items: center;
a {
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 10px;
`
const CustomMenu = styledComponents(MenuIcon)`
cursor: pointer;
`

const BurgerNav = styledComponents.div`
position: fixed;
top: 0;
bottom: 0;
right: 0 ;
background: white;
width: 300px;
padding: 20px;
list-style: none;
text-align: start; 
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s;
li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, .2);
  a{
    font-weight: 600;
  }
}
`
const CustomClose = styledComponents(CloseIcon)`
cursor: pointer;
`
const CloseWrapper = styledComponents.div`
display: flex;
justify-content: flex-end;
`