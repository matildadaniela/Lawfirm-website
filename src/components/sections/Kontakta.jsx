import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet";

export const Kontakta = () => {
  return (
    <>
    <Helmet>
      <meta name="description" content="Möten kan hållas i hemmet, per telefon eller i mötesrum. Mötesrum erbjuds i Helsingfors, Esbo, Vanda, Borgå, Lovisa, Karis och andra orter i Nyland."></meta>
    </Helmet>
    <section id="kontakta" className="bg-[#EDE4DC] py-20 px-4 text-[#2B2B2B]">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Titel */}
        <h2 className="text-4xl text-[#7A4F2C]">Kontakta mig</h2>

        {/* Kontaktkort */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-[#E0D6C6] space-y-6">
        
        {/* Bild */}
        <div className="flex justify-center">
          <img
            src="robin_bild.png"
            alt="Robin Lindberg"
            className="w-40 h-40 rounded-full object-cover shadow-md border-4 border-[#E0D6C6]"
          />
        </div>
          
          {/* Kontaktuppgifter */}
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-lg">
              <Phone className="text-[#7A4F2C]" />
              <a href="tel:+3584578758687" className="underline hover:text-[#C7A76C]">045 78 75 86 87</a>
            </p>
            <p className="flex items-center gap-2 text-lg">
              <Mail className="text-[#7A4F2C]" />
              <a href="https://www.turvaposti.fi/meddelande/contact@robinlindberg.fi" className="underline hover:text-[#C7A76C]">https://www.turvaposti.fi/meddelande/contact@robinlindberg.fi</a>
            </p>
            <p className=" text-[#555]">Du kan ringa måndag–fredag kl. 10–17. Svarar jag inte, är målsättningen att ringa dig senast följande vardag.</p>
          </div>

          {/* Möten */}
          <div>
            <h3 className="text-2xl font-normal text-[#7A4F2C] mb-2 flex items-center gap-2">
              <MapPin /> Möten & plats
            </h3>
            <p>Jag är bosatt i Esbo men har inget fast kontor. Jag erbjuder videomöten, telefonsamtal och e-postkontakt.</p>

            {/*<div className="mt-4">
              <p>Möten kan hållas:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>i kundens hem</li>
                <li>per telefon eller videomöte</li>
                <li>i ett bokat mötesrum</li>
              </ul>
            </div>

            <div className="mt-4">
              <p>Mötesrum kan ordnas i:</p>
              <ul className="list-disc list-inside ml-4 mt-2 grid grid-cols-2 gap-y-1">
                <li>Hangö</li>
                <li>Ekenäs</li>
                <li>Karis</li>
                <li>Kyrkslätt</li>
                <li>Esbo</li>
                <li>Vanda</li>
                <li>Helsingfors</li>
                <li>Sibbo</li>
                <li>Borgå</li>
                <li>Lovisa</li>
              </ul>
            </div>*/}

            <p className="italic mt-6">Tveka inte att höra av dig – jag ser fram emot att hjälpa dig.</p>
          </div>

          {/* Knappar */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a href="tel:+3584578758687" className="bg-[#3A2B1C] text-[#F4EFEA] px-6 py-3 rounded-full text-sm font-normal hover:bg-[#4A3826] transition">
              Ring
            </a>
            <a href="https://www.turvaposti.fi/meddelande/contact@robinlindberg.fi" className="bg-[#3A2B1C] text-[#F4EFEA] px-6 py-3 rounded-full text-sm font-normal hover:bg-[#4A3826] transition">
              Skicka e-post
            </a>
          </div>

          {/* Om företaget */}
          <div className="pt-6 border-t border-[#E0D6C6]">
            <p className="font-medium">Jurist magister Robin Lindberg / Lindbergs juridiska tjänster</p>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>FO-nummer: 1998458-0</li>
              <li>Momsregistrerad i Finland</li>
              <li>Registrerad i förskottsuppbördsregistret</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
