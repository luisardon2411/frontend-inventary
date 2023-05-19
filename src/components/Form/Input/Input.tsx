import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

interface InputTypes {

  name?: string;
  id?: string;
  nameLabel?: string;
  type?: 'text' | 'number' | 'password' | 'check' | ''
  placeholder?: string;
  isPassword?: boolean;
  onChange?: () => void;
  onBlur?: () => void;

}

interface InputPasswordProps {
  name?: string;
  id?: string;
  nameLabel?: string;
  type?: 'text' | 'number' | 'password' | 'check' | '';
  state?: boolean
  changeState?: () => void;
  placeholder?: string;
  isPassword?: boolean;
  onChange?: () => void;
  onBlur?: () => void;
}

const Input = ( { name, id, type, isPassword, placeholder }: InputTypes  ) => {

  const [ hasVisiblePassword, setHasVisiblePassword  ] = useState(false);
  const changeVisiblePassword = () => {
    setHasVisiblePassword(!hasVisiblePassword);
  }
  return (
    <>
    {
      isPassword ? <InputPassword placeholder={ placeholder } state={ hasVisiblePassword } changeState={ changeVisiblePassword } />
      : (
      <div className='w-full sm:mb-1 lg:mb-2 xl:mb-3'>
        <input type={ type } name={name} id={ id }
        placeholder={ placeholder }
        className='w-full sm:p-4 sm:text-xl outline-none bg-gray-100 rounded-2xl
        focus:outline-prussian-blue-400 placeholder:placeholder-gray-800
        transition-all duration-200 delay-50' />
      </div>
      )
    }
    </>
  )
}


const InputPassword = ({ name, id, placeholder, state, changeState  }: InputPasswordProps) => { 
  return (
    <div className='relative w-full sm:mb-1 lg:mb-2 xl:mb-3'>
        <input type={ `${ state ? 'text' : 'password' }` } name={name} id={ id }
        placeholder={ placeholder }
        className='w-full sm:p-4 sm:text-xl outline-none bg-gray-100 rounded-2xl
        focus:outline-prussian-blue-400 placeholder:placeholder-gray-800
        transition-all duration-200 delay-50' />
        <button onClick={ changeState } type='button' >
          {
            state ? <EyeSlashIcon className='absolute right-5 top-5 sm:h-7 sm:w-7 cursor-pointer text-stone-700' />
                  : <EyeIcon className='absolute right-5 top-5 sm:h-7 sm:w-7 cursor-pointer text-stone-700' />
          }
        </button>
    </div>
  )
}

export default Input