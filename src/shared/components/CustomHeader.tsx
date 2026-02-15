import React from 'react'

interface Props{
    title: string;
    description?: string;
}

export const CustomHeader = ({title,description}:Props) => {
  return (
    <div className="content-center">

        <h1> {title} </h1>
      {
        // Como description es opcional lo puso para preguntar primero 
        description && (
            <p>{description}</p>
        )
      }

    </div>
  )
}
