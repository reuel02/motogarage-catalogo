export default function CardMoto({ moto }) {
    return (
        <div key={moto.id} className="flex flex-col gap-3 bg-bg-secondary p-4 rounded-md text-text-primary mb-7 border border-bg-secondary hover:border-border-hover transition-colors">
            <div className="relative overflow-hidden rounded-md">
                <img src={moto.imagem}
                    alt="Imagem da moto"
                    className="w-full h-80 object-cover rounded-md brightness-95"
                />
                {/* Overlay escuro para integrar fotos claras ao tema */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-bg-primary/40 pointer-events-none"></div>
            </div>
            <div className="flex flex-row gap-7 items-center">
                <span className="bg-badge rounded-md p-1 text-white font-bold">{moto.condicao}</span>
                <p className="font-thin text-text-muted">Código: {moto.codigo}</p>
            </div>
            <div className="flex flex-row gap-6 items-center">
                <p className="text-2xl font-thin">{moto.fabricante}</p>
                <span className="text-2xl font-bold text-accent">{moto.modelo}</span>
            </div>
            <p className="font-thin text-sm text-text-secondary">{moto.descricao}</p>
            <p className="text-2xl">{moto.preco}</p>
            <div className="grid grid-cols-3 items-center w-full mt-2 text-text-secondary border-t border-border pt-3">
                <p className="font-thin text-left">{moto.categoria}</p>
                <p className="font-medium text-center">{moto.ano}</p>
                <p className="font-medium text-right">{moto.km}</p>
            </div>
        </div>
    )
}