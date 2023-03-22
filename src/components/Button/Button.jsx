import React from 'react'
import parse from 'html-react-parser'
import buttonHTML from './button.html'

//var __html = require('./button.html');
export const Button = () => {
console.log(buttonHTML)
  const button= `<button type="button" class="btn btn-primary position-relative">
   <span>Button</span> 
   </button>`
   
  return (
<div>
{parse(button)}
<hr />
<pre>
  {button}
</pre>
</div>


  )
}
