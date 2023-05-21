import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Input from '../../../components/Form/Input/Input'
import Button from '../../../components/Form/Button/Button';
import { LoginProps } from '../Login/models/LoginProps';
import IconPerson from '../../../components/Icon/IconPerson';

const Login = ( { formik }: LoginProps ) => {
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <main className='h-screen w-full font-Montserrat'>
      { /** Import svg form */ }
      <section className=''>
        <img src="/SVG/form-1.svg" alt="form" className='absolute right-0 bottom-0 -z-10' />
      </section>
      <section className='h-full w-full xl:py-[120px] xl:px-[150px]'>
        {/** main container */}
        <div className='h-full w-full xl:flex'>
          {/** Form Container */}
          <div className='xl:flex xl:flex-col xl:justify-start xl:items-start w-[750px] gap-0 '>
            {/** Logo */}
            <div className=''>
                <motion.img src="/SVG/0.png" alt="" className='object-contain xl:h-44 xl:w-44 cursor-pointer'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: .2 }} />
            </div>
            {/** Form */}
            <form className='pl-[60px] flex flex-col xl:gap-5' method='POST' onSubmit={ formik?.handleSubmit } >
              {/** Title */}
              <motion.h1 className='font-bold xl:text-3xl uppercase tracking-wide'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              transition={{ duration: 1.5, delay: .5 }}>
                Bienvenido de nuevo
              </motion.h1>
              {/** Subtitle */}
              <motion.div className='relative xl:mb-7'
              initial={ { opacity: 0, x: -200 } }
              animate={ { opacity: 1, x: 0 } }
              transition={ { duration: 1.5, type: 'spring' } }>
                <h5>Inicia sesión para acceder a tu cuenta</h5>
                <h6>Gestiona tus inventarios de manera más eficiente y organizada</h6>
              </motion.div>
              {/** Inputs */}
             <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: .4 }}
             className='relative sm:flex sm:flex-col sm:gap-4'>
             <Input type='text' name='username' placeholder='john.sweet' onChange={ formik?.handleChange } onBlur={ formik?.handleBlur } errorMessage={ formik?.errors.username } />
              <Input name='password' placeholder='* * * * * * * *' isPassword onChange={ formik?.handleChange } onBlur={ formik?.handleBlur } errorMessage={ formik?.errors.password }  />
              <div className='flex justify-between'>
                {/** Recuerdame */}
                <div className='relative sm:flex sm:items-center sm:gap-2'>
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-3xl focus:ring-blue-500 cursor-pointer" />
                <label htmlFor="default-checkbox" className="text-sm font-medium text-black">Recuerdame</label>
                </div>
                {/** Olvide contraseña */}
                <NavLink to="/forgot-password" className="text-prussian-blue-600 font-bold" >
                    ¿Haz olvidado tu contraseña?
                </NavLink>
              </div>
              <Button type='submit' > Iniciar sesion </Button>
             </motion.div>
            </form>
          </div>
          {/** SVG image */}
          <div className='h-full flex-auto xl:flex xl:justify-center xl:items-center'>
            <motion.div 
            initial={{ opacity: 0, scale: .5 }}
            animate={{ opacity: 1, scale: 1}}
            transition={{ type: 'spring', duration: .5, damping: 12 }}
            className='flex-auto'>
              <IconPerson />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default Login