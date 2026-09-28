import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";

export const Hem = () =>{
    return(
      <>
      <Helmet>
        <meta name="description" content="Bouppteckning i Finland på svenska. Få trygg och professionell juridisk hjälp i Nyland med bouppteckning, arv och relaterade frågor."></meta>
      </Helmet>
        <section
        id="hem"
        className="relative bg-[#7A4F2C] py-32 flex items-center  min-h-screen">
          
            {/*Bakgrunds bild */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
              backgroundImage: "url('/bookshelf.jpeg')",}}
            />

            {/* Semi-transparent dark brown overlay */}
            <div className="absolute inset-0 h-full bg-[#3A2B1C]/30" />
            
            <div className='relative z-10 w-full'>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 text-center md:text-left">

            {/*Texten */}
            <motion.div 
              className="w-full max-w-xl px-6 sm:px-8 mx-auto text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-5xl text-[#F4EFEA] mb-2">
                Bouppteckning i Finland
              </h1> 
              <h1 className="text-4xl md:text-5xl text-[#F4EFEA] mb-6">
                – på svenska
              </h1>
              <h2 className="text-xl text-[#CBBBA5] mb-8 " >
                Professionell och trygg juridisk hjälp på svenska på distans – hembesök möjliga i Nyland
              </h2>

              {/*Kontakta mig knappen*/}
              <div className="flex flex-col md:flex-row items-center gap-4 justify-center mt-4">
              <a 
                href="#kontakta" className="border border-[#3A2B1C] bg-[#C7A76C] font-[Merriweather] text-[#2B2B2B] text- py-3 px-10 rounded-full font-medium transition-all duration-200 hover:bg-[#B7945D] hover:shadow-xl">
                    Kontakta mig
              </a>
              <a 
                href="#bouppteckning" className="border border-[#F4EFEA] bg-[#3A2B1C] font-[Merriweather] text-[#F4EFEA] py-3 px-10 gap-4 rounded-full font-medium transition-all duration-200 hover:bg-[#4A3826] hover:shadow-xl transition">
                    Vad är en bouppteckning?
              </a>

              </div>
              </motion.div>

        
                
            </div>    
            </div>
        </section>
        </>
    )
}
