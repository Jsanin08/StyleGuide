import React from 'react'
import Code from './code';

export const Root = ({data}) => {
    const {root,url}=data;
    const rootUrl={
        root,
        url
    }
    console.log(rootUrl)
  return (
    data?.child?.map((item)=>(
       <div className='scroll-element' id={item.template} key={item.id}> <Code  rootUrl={rootUrl} template={item} /> <br /></div>
  ))
  )
}
