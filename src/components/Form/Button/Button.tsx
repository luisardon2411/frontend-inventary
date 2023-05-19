import React from 'react'

interface ButtonProps {
  children?: React.ReactNode | JSX.Element[];
}

const Button = ( { children }: ButtonProps ) => {
  return (
    <button className='bg-prussian-blue-700 sm:p-2 md:p-3 lg:p-4 xl:p-6 rounded-2xl text-white
    xl:text-xl'>{ children }</button>
  )
}

export default Button