import { motion } from 'framer-motion';
import Input from '../../../components/Form/Input/Input'
import Button from '../../../components/Form/Button/Button';

const Login = () => {
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
            <form className='pl-[60px] flex flex-col xl:gap-5' method='POST'>
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
             <div className='relative sm:flex sm:flex-col sm:gap-4'>
             <Input type='text' name='usuario' placeholder='john.sweet' />
              <Input name='contraseña' placeholder='* * * * * * * *' isPassword />
              <Button> Iniciar sesion </Button>
             </div>
            </form>
          </div>
          {/** SVG image */}
          <div className='h-full flex-auto xl:flex xl:justify-center xl:items-center'>
            <div className='flex-auto'>
              <img src="/SVG/Icono.svg" alt="" className='xl:object-cover xl:w-auto' />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login