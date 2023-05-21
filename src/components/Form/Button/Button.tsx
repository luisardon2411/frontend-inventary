import React from 'react'

interface ButtonProps {
  children?: React.ReactNode | JSX.Element[];
  type?: 'button' | 'reset' | 'submit'
}

const Button = ( { children, type }: ButtonProps ) => {
  return (
    <button className='bg-prussian-blue-700 sm:p-2 md:p-3 lg:p-4 xl:p-6 rounded-2xl text-white
    xl:text-xl' type={ type } >{ children }</button>
  )
}

export default Button