import { useState } from "react"

export default function Contato() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [enviando, setEnviando] = useState(false)

    function darSubmit(e) {
        e.preventDefault()

        setEnviando(true)

        // Simulando carregamento de 1.5s
        setTimeout(() => {
            alert("Mensagem enviada com sucesso!")
            
            // Limpa os campos depois que enviar
            setNome("");
            setTelefone("");
            setEmail("");
            setMensagem("");
            setEnviando(false)
        }, 1500)
    }

  return (
    <section className="flex flex-col max-w-7xl justify-center md:flex-row gap-7 pb-10 pt-20 border-t border-border">
      <form onSubmit={darSubmit} className="flex flex-col gap-2 md:w-150">
        <input
            value={nome}
          type="text"
          onChange={(e) => setNome(e.target.value)}
          required
          placeholder="Insira seu nome"
          className="border border-border text-text-input p-2 focus:border-accent focus:outline-none hover:border-accent transition-colors"
        />
        <input
            value={telefone}
          type="tel"
          onChange={(e) => setTelefone(e.target.value)}
          required
          placeholder="Insira um telefone"
          className="border border-border text-text-input p-2 focus:border-accent focus:outline-none hover:border-accent transition-colors"
        />
        <input
            value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Insira um email"
          className="border border-border text-text-input p-2 focus:border-accent focus:outline-none hover:border-accent transition-colors"
        />
        <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          required
          placeholder="Insira sua mensagem"
          className="border border-border text-text-input p-2 focus:border-accent focus:outline-none focus hover:border-accent transition-colors"
        ></textarea>
        <button
          type="submit"
          className="bg-accent p-3 text-white w-32 hover:cursor-pointer disabled:bg-accent/50 disabled:cursor-wait"
          disabled={enviando}
        >
          {enviando ? "Enviando..." : "Enviar"}
        </button>
      </form>

      <div className="flex flex-col gap-3 text-white max-w-md">
        <p className="text-xl font-light text-text-secondary">
          Nós queremos ouvir você!
        </p>
        <h2 className="text-4xl font-bold text-accent">Entre em contato</h2>
        <p className="text-lg text-text-primary font-light leading-relaxed mt-2">
          Ficou interessado em alguma de nossas máquinas, quer negociar ou tem
          dúvidas sobre o nosso acervo?
        </p>
        <p className="text-lg text-text-secondary font-light leading-relaxed">
          Preencha o formulário ao lado e nossa equipe ligará os motores para te
          atender com a máxima agilidade. A moto ideal para o seu trajeto pode
          estar a um clique de distância.
        </p>
      </div>
    </section>
  );
}
