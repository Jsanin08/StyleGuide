import React, { useEffect, useState } from 'react'
import useCopyToClipboard from './hooks/copy'

import parse from 'html-react-parser'

const Code = ({template}) => {
  const [value, copy] = useCopyToClipboard();
  const [children, setchildren] = useState("")
  useEffect(() => {
    import(`../components/${template.root}/${template.url}.html?raw`).then((html)=>{
        setchildren(html.default);
      });
  }, [template])
  
  return (
    <div>
      {parse(children)}
        <hr />
      <div className="bd-clipboard">
        <button
            onClick={() =>  copy(children)}
            type="button" 
            className="btn btn-secondary btn-clipboard" 
            title="" 
            data-bs-original-title="Copy to clipboard">Copy</button>
        </div>
      <pre className='divCode'>
        {children}
      </pre>
    </div>
  )
}

export default Code