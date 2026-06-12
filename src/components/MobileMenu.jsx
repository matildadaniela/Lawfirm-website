import { useEffect } from "react"

export const MobileMenu = ({menuOpen, setMenuOpen}) =>{

    return(
        <div className={`fixed top-0 left-0 w-full bg-[#3A2B1C]/80 z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
        `}>

            <button onClick={()=> setMenuOpen(false)} className= "absolute top-6 rigth-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
                >
                &times;    
            </button>
            <a href="#hem" 
                onClick={(() => setMenuOpen(false))}
                className={`text-2xl font-normal text-white my-4 transform transition-transform duration-300
                   ${menuOpen ? "opasity-100 translate-y-0" : "opacity-0 translate-y-0"} `}
                >
                Start
            </a>
            <a href="#bouppteckning" 
                onClick={(() => setMenuOpen(false))}
                className={`text-2xl font-normal text-white my-4 transform transition-transform duration-300
                    ${menuOpen ? "opasity-100 translate-y-0" : "opacity-0 translate-y-0"} `}
                 >
                Bouppteckning
            </a>
            <a href="#FAQ" 
                onClick={(() => setMenuOpen(false))}
                className={`text-2xl font-normal text-white my-4 transform transition-transform duration-300
                    ${menuOpen ? "opasity-100 translate-y-0" : "opacity-0 translate-y-0"} `}
                 >
                 Vanliga frågor
            </a>
            <a href="#kontakta" 
                onClick={(() => setMenuOpen(false))}
                className={`text-2xl font-normal text-white my-4 transform transition-transform duration-300
                    ${menuOpen ? "opasity-100 translate-y-0" : "opacity-0 translate-y-0"} `}
                 >
                Kontakta mig
            </a>
            <a href="#dataskydd" 
                onClick={(() => setMenuOpen(false))}
                className={`text-2xl font-normal text-white my-4 transform transition-transform duration-300
                    ${menuOpen ? "opasity-100 translate-y-0" : "opacity-0 translate-y-0"} `}
                 >
                Dataskydd
            </a>
        </div>
    ) 
}
