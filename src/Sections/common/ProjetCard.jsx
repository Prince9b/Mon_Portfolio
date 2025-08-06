import React from 'react'

function ProjetCard({link, src, h3,p}) {
  return (
     <a href={link} target='_blank'>
                    <img src={src} alt="" />
                    <h3>{h3}</h3>
                    <p>{p}</p>
                </a>
  )
}

export default ProjetCard