import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Icon404 from '../../../components/Icon/Icon404'

const NotFound = () => {

  useEffect( () => {
    document.title = '404 No encontrado'
  },[])
  return (
    <main className='h-screen w-full font-Montserrat'>
        <div className='h-full w-full xl:py-[120px] xl:px-[150px]'>
            <div className='flex justify-between items-center'>
                <motion.section 
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', damping: 12, delay: .2 }}
                className='sm:self-center'>
                    <Icon404 />
                </motion.section>
                {/** Container */}
                <section className='sm:flex sm:flex-col sm:justify-center sm:items-center flex-auto'>
                    {/** Icon */}
                    <motion.img 
                    initial={{ opacity: 0, scale: .4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', duration: 1.4, delay: .4, damping: 9 }}
                    src="/SVG/0.png" alt="" className='xl:h-56 xl:w-56 object-contain self-center' />

                    {/** message container */}
                    <div className='flex flex-col gap-2 justify-center items-center xl:gap-4'>
                        {/** Title  */}
                        <motion.h1 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: .4 }}
                        className='text-2xl tracking-wider font-bold'>Oops!</motion.h1>
                        <span className='self-center text-center'>
                            <motion.h4
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: .6 }}
                            className='tracking-wide font-light'
                            >Parece que has llegado a una dirección inexistente en nuestro sitio web</motion.h4>
                            <motion.h5
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: .8 }}
                            >Por favor, verifica la URL e intenta nuevamente</motion.h5>
                        </span>
                        <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1.2 }}
                        className='flex w-full justify-center'>
                            <NavLink to="/" className="bg-prussian-blue-800 text-white sm:p-2 xl:p-5 xl:w-1/3 rounded-xl text-center text-xl" >
                                Regresar
                            </NavLink>
                        </motion.span>
                    </div>
                </section>
            </div>
        </div>
    </main>
  )
}

export default NotFound