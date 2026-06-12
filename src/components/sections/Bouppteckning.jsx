import { motion } from 'framer-motion';
import { Helmet } from "react-helmet";

export const Bouppteckning = () =>{
    return(
      <>
      <Helmet>
      <meta name="description" content="Bouppteckning enligt finsk lag ska göras inom tre månader. Vi hjälper dig med allt från dokumentinsamling till färdig handling."></meta>
      </Helmet>
      <section id="bouppteckning" className="bg-[#F4EFEA] py-20">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
   {/* TEXTEN */}
<div className="w-full md:w-1/2">
  <h2 className="text-3xl md:text-4xl text-[#7A4F2C] mb-10">
    Vad är en bouppteckning?
  </h2>

  <div className="space-y-6 text-[#2B2B2B] text-left">
    {[
      "När en nära anhörig går bort är sorgen tung, och många praktiska frågor kan kännas överväldigande. En av de viktigaste uppgifterna som enligt lag måste utföras är bouppteckningen.",
      "Att göra en bouppteckning innebär att kartlägga och dokumentera den avlidnas tillgångar och skulder, samt reda ut vem som är delägare i dödsboet. Enligt finsk lag ska bouppteckningen göras inom tre månader från dödsfallet. Observera att bouppteckningen inte är ett arvskifte – ingen blir alltså ägare till några tillgångar vid bouppteckningen.",
      "Jag erbjuder dig sakkunnig och vänlig hjälp med bouppteckningen. Mitt mål är att underlätta för dig genom att ta hand om processen på ett smidigt sätt, i den utsträckning du behöver mina tjänster. Jag hjälper även till med att samla in dokument om så önskas.",
      "Varje dödsbo är unikt, och jag anpassar mitt arbete efter just din situation. En väl genomförd bouppteckning är viktig eftersom den ligger till grund för beskattning av arvingarna och eventuella testamentstagare samt för det framtida arvskiftet.",
      "Om det bara finns en arvinge behövs inget arvskifte – arvingen får hela arvet med stöd av bouppteckningen och en släktutredning. Om arvet fördelas genom testamente, måste arvingen visa att testamentet har vunnit laga kraft.",
      "Jag åtar mig endast uppdrag där arvingarna är överens. Jag hanterar inga tvistemål i rätten.",
      "Du är varmt välkommen att kontakta mig via telefon eller e-post. Vi hörs!",
    ].map((text, index) => (
      <p key={index}>{text}</p>
    ))}

    <motion.div
      className="mt-8 flex"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <a
        href="#kontakta"
        className="border border-[#F4EFEA] bg-[#3A2B1C] text-[#F4EFEA] py-3 px-10 gap-4 rounded-full font-normal transition-all duration-200 hover:bg-[#4A3826] hover:shadow-xl transition"
      >
        Kontakta mig
      </a>
    </motion.div>
  </div>
</div>


    {/* BILD TILL HÖGER */}
    <motion.div
            className="w-full md:w-1/2 h-[50rem] rounded-xl shadow-md overflow-hidden relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "linear-gradient(rgba(122, 79, 44, 0.25), rgba(122, 79, 44, 0.25)), url('/vag_hand.jpg')"
              }}
            />
          </motion.div>
  </div>
</section>
</>



)
}

 