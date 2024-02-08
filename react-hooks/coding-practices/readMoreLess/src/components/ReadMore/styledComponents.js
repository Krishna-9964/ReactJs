// Style your elements here
import {createGlobalStyle} from 'styled-components'

const AppContainer = createGlobalStyle`
.Main {
    width : 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  border : 1px solid black;
}
.heading1 {
    text-align: center;
    font-family: 'Roboto';
    font-size: 48px;
    font-weight: 600;
    color: #1e293b;
}
.heading2{
   text-align: center;
    font-family: 'Roboto';
    font-size: 28px;
    font-weight: 200;
    color:  #334155;
}
.para{
  color:  #334155;
text-align : justify;
  display:flex;
  flex-direction : column;
  align-items: center;
  justify-content: center;
}
.button{
  color: #ffffff;
  background-color: #1f81ff;
  border-radius: 2px;
}
 .image {
  width: 30%;
  height: 305;
}
`

export default AppContainer
