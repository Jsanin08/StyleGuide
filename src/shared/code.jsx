import React, { useEffect, useState } from 'react'
import useCopyToClipboard from './hooks/copy'

import parse from 'html-react-parser'

const Code = ({template}) => {
  const [value, copy] = useCopyToClipboard();
  const [html, setHtml] = useState("")
  useEffect(() => {
    import(`../components/${template.root}/${template.url}.html?raw`).then((content)=>{
      setHtml(content.default);
      });
  }, [template])
  
  return (
    <div>
      <h4>Preview</h4>
      <div className='d-flex justify-content-center'>
        {parse(html)}
      </div>
        <hr />
      <div className="bd-clipboard">
        <button
            onClick={() => copy(html)}
            type="button" 
            className="btn btn-secondary btn-clipboard" 
            title="" 
            data-bs-original-title="Copy to clipboard">Copy</button>
        </div>
      <pre className='divCode'>
        {html}
      </pre>
    </div>
  )
}

export default Code