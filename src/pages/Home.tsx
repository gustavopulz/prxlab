export default function Home() {
  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col">
      {/* Hero */}
      <section className="px-4 lg:px-20 2xl:px-60 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Bem-vindo à <span className="text-blue-500">PRXLab</span>
        </h1>
        <p className="text-lg text-slate-300 mx-auto">
          Inovação, tecnologia e eficiência em um só lugar.
        </p>
      </section>

      {/* Sobre a PRXLab */}
      <section className="px-4 lg:px-20 2xl:px-60 py-12 text-center mx-auto max-w-7xl">
        <h2 className="text-2xl font-semibold mb-6">Sobre a PRXLab</h2>
        <p className="text-slate-300 mb-4">
          A <span className="font-semibold text-blue-400">PRXLab</span> nasceu
          com a missão de desenvolver soluções digitais modernas que conectam
          pessoas, empresas e processos. Nosso foco é criar ferramentas
          intuitivas, seguras e de alto desempenho, que simplifiquem o dia a dia
          de quem precisa de tecnologia para crescer.
        </p>
        <p className="text-slate-300 mb-4">
          Atuamos em diferentes áreas da tecnologia, desde sistemas de gestão
          corporativa até plataformas especializadas para segmentos específicos,
          sempre guiados por uma visão prática: unir inovação com resultados
          reais.
        </p>
        <p className="text-slate-300">
          Mais do que desenvolver softwares, acreditamos em construir parcerias
          de longo prazo, ajudando nossos clientes a superar desafios e alcançar
          novos patamares de eficiência.
        </p>
      </section>

      {/* Finance System */}
      <section className="px-4 lg:px-20 2xl:px-60 py-12 flex-1">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Nosso Sistema
        </h2>

        <div className="max-w-2xl bg-slate-800 border border-slate-700 rounded-xl p-8 shadow hover:shadow-xl transition mx-auto text-center">
          <h3 className="text-xl font-bold mb-4 text-green-400">
            Finance System
          </h3>
          <p className="text-slate-300 mb-6">
            Sistema de controle financeiro que ajuda empresas e pessoas a
            organizar despesas, receitas e relatórios de forma prática e
            eficiente.
          </p>
          <a
            href="https://finance-system.prxlab.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Acessar
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 lg:px-20 2xl:px-40 mt-16 text-center text-slate-500 text-sm border-t border-slate-700 py-6">
        © {new Date().getFullYear()} PRXLab — Todos os direitos reservados.
      </footer>
    </div>
  );
}
