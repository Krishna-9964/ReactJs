// Style your elements here
import {createGlobalStyle} from 'styled-components'

const UnlockStyling = createGlobalStyle`
.app-container{
    height:100vh;
    width:100vw;
    background-image : linear-gradient(to bottom,#0b0c1e,#3c2940);
    display : flex;
    justify-content: center;
    align-items:center;
    flex-direction : column;
 
}
.app-container img{
    height : 7rem;
    width : 7rem;
}

p{
    font-family : 'Roboto';
    font-size : 30px;
     color : #e2e8f0;
}
button{
    font-family : 'Roboto';
    background-color:#06b6d4;
    color : #ffffff;
    padding : 0.5rem;
    border-radius : 0.5rem;
    cursor : pointer;
}
`
export default UnlockStyling
