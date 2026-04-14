import { FaInstagram, FaShoppingCart } from "react-icons/fa";

export default function Header() {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center bg-bg-secondary text-text-primary antialiased border-b border-border px-6 py-6 lg:px-20 gap-6 md:gap-0 sticky top-0 z-50">
            
            {/* Logo */}
            <a href="#">
                <img
                    src="/assets/logo_motogarage.svg"
                    alt="MotoGarage Logo"
                    className="h-10 md:h-12 w-auto"
                />
            </a>

            {/* Box Direita (Navegação + Ícones) */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center">
                
                {/* Links */}
                <nav className="flex flex-row gap-6 text-base font-medium">
                    <a href="#catalogo" className="hover:text-accent transition-colors">Catálogo</a>
                    <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
                    <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
                </nav>

                {/* Ícones */}
                <div className="flex flex-row gap-5">
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <FaInstagram className="size-6 lg:size-7 hover:text-accent transition-colors" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                        <FaShoppingCart className="size-6 lg:size-7 hover:text-accent transition-colors" />
                    </a>
                </div>
            </div>
        </header>
    )
}