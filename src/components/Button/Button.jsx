import React from 'react'
import parse from 'html-react-parser'
import buttonHTML from "./button.html?raw"
import Code from '../../shared/code.pre'

export const Button = () => {
  return (
    <div>
    {parse(buttonHTML)}
    <hr />
     <Code>
      {buttonHTML}
     </Code>
    </div>
    )
}
