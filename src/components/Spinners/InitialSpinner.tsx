import { motion } from 'framer-motion';
import Logo from '../../assets/0.ico'
import './LoadingSpinner.css';


const InitialSpinner = () => {
  return (
    <>
      <motion.section 
      initial={{ opacity:0 }}
      transition={{ duration: 1 }}
      animate={{ opacity: 1 }}
      className='h-screen w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
        <motion.img 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1.2 }}
        src={ Logo } alt="form" className='sm:object-cover sm:h-56 sm:w-56 self-center' />
          <svg className='spinner' viewBox='0 0 50 50'>
              <circle className='path' cx="25" cy="25" r="20" fill='none' strokeWidth="5" ></circle>
          </svg>
        </div>
      </motion.section>
    </>
  )
}

export default InitialSpinner