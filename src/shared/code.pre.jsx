import React from 'react'

const Code = ({children}) => {
  return (
    <div>
      <pre className='divCode'>
        {children}
      </pre>
    </div>
  )
}

export default Code