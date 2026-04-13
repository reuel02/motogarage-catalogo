import { FaInstagram, FaShoppingCart } from "react-icons/fa";

export default function Header() {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center bg-zinc-900 text-zinc-200 antialiased border-b border-zinc-800 px-6 py-6 lg:px-20 gap-6 md:gap-0">
            
            {/* Logo */}
            <h1 className="text-4xl text-zinc-200 font-light text-center md:text-left">
                Moto<span className="text-amber-500 font-bold">Garage</span>
            </h1>

            {/* Box Direita (Navegação + Ícones) */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center">
                
                {/* Links */}
                <nav className="flex flex-row gap-6 text-base font-medium">
                    <a href="#" className="hover:text-amber-500 transition-colors">Catálogo</a>
                    <a href="#" className="hover:text-amber-500 transition-colors">Sobre</a>
                    <a href="#" className="hover:text-amber-500 transition-colors">Contato</a>
                </nav>

                {/* Ícones */}
                <div className="flex flex-row gap-5">
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <FaInstagram className="size-6 lg:size-7 hover:text-amber-500 transition-colors" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                        <FaShoppingCart className="size-6 lg:size-7 hover:text-amber-500 transition-colors" />
                    </a>
                </div>
            </div>
        </header>
    )
}