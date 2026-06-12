import { Helmet } from "react-helmet";

export const Footer = () => {
  return (
    <>
    <Helmet>
    <meta name="description" content="Behöver du hjälp med att skriva testamente eller göra en intressebevakningsfullmakt? Läs mer om juridisk hjälp på robinlindberg.fi."></meta>
    </Helmet>
    <footer className="bg-[#3A2B1C] text-[#F4EFEA] py-10 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Navigationslänkar */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          {[
            { href: "#hem", label: "Hem" },
            { href: "#bouppteckning", label: "Bouppteckning" },
            { href: "#FAQ", label: "Vanliga frågor" },
            { href: "#kontakta", label: "Kontakta" },
            { href: "#dataskydd", label: "Dataskydd" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="relative hover:text-[#C7A76C] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C7A76C] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Info */}
        <div className="text-sm space-y-4 leading-relaxed text-center md:text-left">
          <p>
            Behöver du i stället till exempel hjälp med att skriva ett testamente eller göra en intressebevakningsfullmakt? 
            Då kan du läsa mer om det på webbplatsen&nbsp;
            <a
              href="https://robinlindberg.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#C7A76C]"
            >
              robinlindberg.fi
            </a>
          </p>

          <p>
            Lindbergs juridiska tjänster har specialiserat sig på att erbjuda juridiska tjänster på svenska av hög kvalitet och med personlig och vänlig betjäning. Företaget har inget eget kontor men strävar efter att ha kontakt med kunden på det sätt som passar henne eller honom bäst. För att undvika överraskningar när fakturan kommer, får kunden på förhand en offert med ett fastslaget pris.
          </p>

          <p>FO-nummer 1998458-0</p>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs pt-6 border-t border-[#C7A76C]/30">
          © {new Date().getFullYear()} Lindbergs juridiska tjänster | Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
    </>
  );
};
