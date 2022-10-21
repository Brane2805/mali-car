import Navigation from '../components/Navigation'
import React,{ Fragment } from 'react'
import Script from 'next/script'

export default () => (
  <Fragment>

      <Navigation/>
      <h1>Your new server-side rendered React.js app!</h1>
      <Script strategy="lazyOnload">
  {`
  let dropdown = document.querySelector(".sub_menu");
  let lijevi = document.querySelectorAll(".sub_menu_item");
  var ul= document.createElement("ul");
  ul.setAttribute("class", "dropdown-menu");
  dropdown.append(ul)
  lijevi.forEach((element) => {
    ul.append(element);
});
  `}
</Script>
  </Fragment>
  
)