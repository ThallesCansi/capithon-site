import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  ExternalLink,
  Github,
  Menu,
  Mic2,
  Radar,
  Sparkles,
  Trophy,
  X,
} from 'lucide-react'
import { CapithonMark } from './components/CapithonMark'
import { Reveal } from './components/Reveal'
import { SectionHeading } from './components/SectionHeading'
import { SignalOrb } from './components/SignalOrb'
import { links, loop, stack, team } from './data/content'

const nav = [
  ['Viu AI', '#viu-ai'],
  ['Hack2L', '#hack2l'],
  ['Time', '#time'],
  ['Contato', '#contato'],
]

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />

      <header className={`topbar ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand-link" href="#top" aria-label="Capithon — início">
          <CapithonMark />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <a className="nav-cta" href={links.github} target="_blank" rel="noreferrer">
          GitHub <ExternalLink size={14} />
        </a>
        <button className="menu-button" onClick={() => setMobileOpen((value) => !value)} aria-label="Abrir menu">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
          >
            {nav.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)}>{label}</a>
            ))}
            <a href={links.github} target="_blank" rel="noreferrer">Abrir GitHub <ExternalLink size={15} /></a>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy">
            <motion.div
              className="winner-pill"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Trophy size={15} /> 1º lugar · Hack2L AI Agents Hackathon
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
            >
              Transformamos sinais em <span>software que age.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              Somos a Capithon — uma equipe de builders que cria produtos AI-native para reduzir a distância entre o que está mudando no mundo e a decisão certa dentro das empresas.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              <a className="button primary" href="#viu-ai">Conheça a Viu AI <ArrowRight size={17} /></a>
              <a className="button ghost" href={links.winnerPost} target="_blank" rel="noreferrer">Ver anúncio da vitória <ExternalLink size={16} /></a>
            </motion.div>
            <motion.div
              className="hero-proof"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <div><strong>4</strong><span>builders</span></div>
              <div><strong>50+</strong><span>participantes</span></div>
              <div><strong>#1</strong><span>Hack2L Campinas</span></div>
            </motion.div>
          </div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <SignalOrb />
          </motion.div>
        </section>

        <section className="marquee-band" aria-label="Tecnologias">
          <div className="marquee-track">
            {[...stack, ...stack].map((item, index) => <span key={`${item}-${index}`}>{item}<i>•</i></span>)}
          </div>
        </section>

        <section className="section block" id="viu-ai">
          <Reveal>
            <SectionHeading
              eyebrow="Nosso primeiro produto"
              title="Viu AI — inteligência de mercado que não espera um prompt."
              copy="A Viu AI monitora sinais, investiga mudanças e prepara decisões com evidência. O objetivo é transformar inteligência de mercado em um loop contínuo de percepção, investigação e ação."
            />
          </Reveal>

          <div className="product-showcase">
            <Reveal className="product-frame">
              <div className="browser-bar">
                <span /><span /><span />
                <small>viu.ai / market-intelligence</small>
              </div>
              <img src="/viu-ai-cover.png" alt="Capa visual da Viu AI" />
            </Reveal>
            <div className="product-points">
              <Reveal delay={0.05} className="feature-card">
                <Radar />
                <div><strong>Detecta mudanças</strong><p>Conecta sinais de mercado e métricas internas para identificar anomalias relevantes.</p></div>
              </Reveal>
              <Reveal delay={0.1} className="feature-card">
                <BrainCircuit />
                <div><strong>Investiga com autonomia</strong><p>Escolhe ferramentas, cruza evidências e produz hipóteses sem depender de uma sequência rígida.</p></div>
              </Reveal>
              <Reveal delay={0.15} className="feature-card">
                <Mic2 />
                <div><strong>Leva o caso à decisão</strong><p>Organiza uma Decision Room com evidências e uma experiência de voz para discussão executiva.</p></div>
              </Reveal>
            </div>
          </div>

          <Reveal className="loop-panel">
            <div className="loop-header">
              <span className="eyebrow">Closed loop</span>
              <strong>Percebe. Investiga. Decide. Age. Mede. Aprende.</strong>
            </div>
            <div className="loop-grid">
              {loop.map((item, index) => (
                <div className="loop-item" key={item.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="product-actions">
            <a className="button primary" href={links.github} target="_blank" rel="noreferrer"><Github size={17} /> Ver repositório da Viu AI</a>
            <a className="button ghost" href={links.hackathonProject} target="_blank" rel="noreferrer">Página do projeto <ExternalLink size={16} /></a>
          </Reveal>
        </section>

        <section className="section block victory" id="hack2l">
          <Reveal>
            <SectionHeading
              eyebrow="Hack2L · Campinas · 2026"
              title="Construído em poucas horas. Validado no palco. Campeão."
              copy="No Hack2L de AI Agents, promovido pela Canastra Ventures com a Liga Empreendedora no Instituto de Computação da Unicamp, a Capithon conquistou o primeiro lugar com a Viu AI."
            />
          </Reveal>
          <div className="victory-grid">
            <Reveal className="trophy-card">
              <div className="trophy-icon"><Trophy /></div>
              <span>RESULTADO</span>
              <strong>1º lugar</strong>
              <p>Capithon foi anunciada como equipe campeã entre mais de 50 builders participantes.</p>
              <a href={links.winnerPost} target="_blank" rel="noreferrer">Ver publicação da Canastra Ventures <ExternalLink size={15} /></a>
            </Reveal>
            <Reveal delay={0.08} className="quote-card">
              <Sparkles size={22} />
              <blockquote>A Viu AI chamou atenção por conectar anomalias de negócio, sinais de clientes e vendas a um processo de decisão orientado por evidências.</blockquote>
              <span>Capithon · 1º lugar no Hack2L</span>
            </Reveal>
          </div>
        </section>

        <section className="section block" id="time">
          <Reveal>
            <SectionHeading
              eyebrow="Capithon"
              title="Quatro perspectivas. Uma mesma obsessão por construir."
              copy="Produto, estratégia, engenharia, IA, integração e design trabalhando juntos — da primeira hipótese ao pitch que venceu o Hack2L."
            />
          </Reveal>
          <div className="team-grid">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.05} className="team-card">
                <div className="avatar-orbit"><span>{member.initials}</span></div>
                <div className="team-copy"><h3>{member.name}</h3><p>{member.role}</p></div>
                <span className="team-index">0{index + 1}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section block principles">
          <Reveal>
            <SectionHeading eyebrow="Como pensamos" title="AI-native não é um chatbot em cima de um workflow." />
          </Reveal>
          <div className="principles-grid">
            <Reveal className="principle"><Bot /><h3>Autonomia com limites</h3><p>Agentes devem ter iniciativa, mas operar com políticas, evidência e auditabilidade.</p></Reveal>
            <Reveal delay={0.06} className="principle"><Radar /><h3>Sinal até decisão</h3><p>O valor está em reduzir latência organizacional — não apenas gerar mais um dashboard.</p></Reveal>
            <Reveal delay={0.12} className="principle"><Sparkles /><h3>Produto antes do hype</h3><p>Experiências bonitas importam. Mas o loop precisa resolver uma dor real e mensurável.</p></Reveal>
          </div>
        </section>

        <section className="section contact" id="contato">
          <Reveal className="contact-card">
            <div>
              <span className="eyebrow">Próximo capítulo</span>
              <h2>Vamos construir a próxima vantagem AI-native?</h2>
              <p>A Capithon nasceu no hackathon. A ambição vai muito além dele.</p>
            </div>
            <div className="contact-actions">
              <a className="button primary" href={links.github} target="_blank" rel="noreferrer"><Github size={17} /> Falar pelo GitHub</a>
              <a className="button ghost" href={links.winnerPost} target="_blank" rel="noreferrer">Nossa história <ArrowRight size={16} /></a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer>
        <CapithonMark compact />
        <div><strong>CAPITHON</strong><span>Builders of autonomous AI.</span></div>
        <span className="footer-domain">capithon.com.br</span>
      </footer>
    </div>
  )
}

export default App
