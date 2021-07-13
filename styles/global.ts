import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --backgroundSecondary:#F1F9FE;
  --backgroundDefault:#D9E6F6;
  --primaryText:#2E7BB4;
  --secondaryText:#388BB0;
  --tertiaryText:#2F4A71;
  --primaryElement:#6F92BB;
  --anotherElement:#5579A1;
}
img{
  max-width:100%;
  height:auto;
  display:block;
}

@media(max-width:1080px){
  html{
    font-size: 93.75%
  }
}
@media(max-width:720px){
  html{
    font-size: 87.5%
  }
}

body{
  background: var(--backgroundDefault);
  color: black;
}

body, input, textarea, select, button {
  font: 400 1rem "Roboto", sans-serif;
}

button{
  cursor: pointer;
}

a{
  color: inherit;
  text-decoration:none;
}
`
