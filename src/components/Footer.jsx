
export default function Footer() {
    return (
        <footer id="contato" className="py-12 mt-10 text-center text-text-subtle border-t border-bg-secondary w-full">
            <p>Contato: contato@motogarage.com</p>
            <p className="mt-2 text-sm font-light">© {new Date().getFullYear()} MotoGarage. Todos os direitos reservados.</p>
            <p className="mt-2">Feito por <span className="text-accent font-bold">Reuel Ferreira</span></p>
        </footer>
    )
}