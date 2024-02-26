import React from 'react'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className='bg-gradient-to-t from-yellow-100 to-white'>
        <div className='flex sm:flex-row flex-col'>
          <div>
            <img src='../src/assets/1.png' alt='image-trophy' className='w-full' />
          </div>
          <div className='flex flex-col'>
            <img src='../src/assets/logo.png' />
            <h1 className='font-bold px-4 md:p-0'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
            <ul className='my-2 px-8 md:px-4'>
              <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
              <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
            </ul>
            <img className='my-4 px-4' src='../src/assets/2.png' />
            <p className='px-4'>Government of India has awarded the <span className='font-bold'>"National Energy Conservation Award 2018".</span> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
        </div>
        <div className='px-6'>
          <div className='mt-8 ml-10 mr-2 md:mr-0 text-sm tracking-normal'>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </div>
          <div className='flex flex-col justify-center items-center'>
            <img src='../src/assets/3.png' alt='machines' className='py-4 md:px-28' />
            <div className='px-6 mt-2 text-sm md:px-2 md:mt-0'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</div>
            <div className="border-b border-red-500 w-full my-4 font-bold"></div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h1>
            <div className='flex flex-col items-center justify-center text-sm'>
  <div className='mt-4 md:flex md:flex-wrap md:justify-center md:px-2'>
    <div className='mb-4 md:mr-4'>
      CHEMICALS & PROCESS <span className='text-red-500'>|</span> POWER <span className='text-red-500'>|</span> WATER & WASTE WATER <span className='text-red-500'>|</span> OILS & GAS <span className='text-red-500'>|</span> PHARMA <span className='text-red-500'>|</span> SUGARS & DISTILLERIES <span className='text-red-500'>|</span> PAPER & PULP <span className='text-red-500'>|</span> MARINE & DEFENCE <span className='text-red-500'>|</span> METAL & MINING <span className='text-red-500'>|</span> FOOD & BEVERAGE <span className='text-red-500'>|</span> PETROCHEMICAL & REFINERIES <span className='text-red-500'>|</span> SOLAR <span className='text-red-500'>|</span> BUILDING <span className='text-red-500'>|</span> HVAC <span className='text-red-500'>|</span> FIRE FIGHTING <span className='text-red-500'>|</span> AGRICULTURE & RESIDENTIAL
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
