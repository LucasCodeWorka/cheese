import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Avatar, type AvatarState } from '../features/avatar/Avatar';
import { initialMessages, localReply, type Message } from '../features/conversation/model';

export function App() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [focused, setFocused] = useState(false);
  const [phase, setPhase] = useState<'idle' | 'thinking' | 'responding'>('idle');
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const state: AvatarState = phase !== 'idle' ? phase : focused ? 'listening' : 'idle';
  function send(event: FormEvent) {
    event.preventDefault();
    const value = input.trim();
    if (!value || phase !== 'idle') return;
    setMessages(current => [...current, { id: Date.now(), author: 'user', text: value }]);
    setInput(''); setPhase('thinking');
    timers.current.push(setTimeout(() => {
      setMessages(current => [...current, { id: Date.now() + 1, author: 'cheese', text: localReply(value) }]);
      setPhase('responding');
      timers.current.push(setTimeout(() => setPhase('idle'), 1800));
    }, 900));
  }
  const status = { idle: 'EM SINTONIA', listening: 'ESCUTANDO', thinking: 'PROCESSANDO', responding: 'RESPONDENDO' }[state];
  return <div className="app-shell">
    <header className="topbar"><div className="brand"><span className="brand-mark">✳</span><div><strong>CHEESE<span className="brand-dot">.</span></strong><small>PERSONAL INTELLIGENCE</small></div></div><div className="top-center"><span className="pulse-dot"/> SISTEMA INICIALIZADO <span className="separator">/</span> SESSÃO LOCAL</div><div className="top-right">DESKTOP FOUNDATION <b>001</b></div></header>
    <main className="dashboard">
      <aside className="sidebar"><div className="section-label"><span>01 / VISÃO GERAL</span><span>✳</span></div><h2>Seu espaço.<br/><em>Seu controle.</em></h2><p>Um ponto de partida para uma nova forma de estar conectado.</p><div className="sidebar-line"/><div className="side-item"><span className="side-icon">◇</span><div><strong>Agentes</strong><small>Disponível no futuro</small></div><b>—</b></div><div className="side-item"><span className="side-icon">▱</span><div><strong>Projetos</strong><small>Disponível no futuro</small></div><b>—</b></div><div className="side-item"><span className="side-icon">⌘</span><div><strong>Contexto</strong><small>Nenhum acesso ativo</small></div><b>—</b></div><div className="privacy"><span>✳</span><div><strong>PRIVACIDADE PRIMEIRO</strong><p>Você decide o que compartilhar. Nenhum contexto é coletado nesta versão.</p></div></div><div className="side-footer">CHEESE OS <span>v0.1 / SIMULAÇÃO</span></div></aside>
      <section className="presence"><div className="panel-heading"><span>02 / PRESENÇA DIGITAL</span><span className="dim">IDENTIDADE ATIVA <b>✳</b></span></div><div className="presence-copy"><div className="eyebrow"><span className="pulse-dot"/> UMA NOVA PRESENÇA</div><h1>Olá, eu sou<br/><span>Cheese.</span></h1><p>Seu universo digital começa aqui.</p></div><Avatar state={state}/><div className="presence-bottom"><div><span className="tiny-label">ESTADO ATUAL</span><strong><span className="pulse-dot"/> {status}</strong></div><div className="wave" aria-hidden="true">▁ ▃ ▂ ▅ ▃ ▆ ▂ ▄ ▁ ▃ ▅ ▂ ▄ ▁</div><div className="version">ENTIDADE DIGITAL<br/><b>CHEESE / 001</b></div></div><div className="presence-note">✦ <span>Feito para evoluir com você.</span></div></section>
      <section className="conversation"><div className="panel-heading"><span>03 / CANAL DE CONVERSA</span><span className="dim">● LOCAL</span></div><div className="chat-title"><div><div className="eyebrow amber">CANAL ABERTO</div><h2>Vamos conversar<span>.</span></h2><p>Este é apenas o começo.</p></div><div className="chat-symbol">✳</div></div><div className="chat-meta"><span>HOJE <i/></span><span>CONVERSA SIMULADA</span></div><div className="messages" role="log" aria-live="polite">{messages.map(message => <article className={`message ${message.author}`} key={message.id}><div className="message-label">{message.author === 'cheese' ? '✳  CHEESE' : 'VOCÊ'} <span>• AGORA</span></div><p>{message.text}</p></article>)}{phase === 'thinking' && <div className="typing">CHEESE ESTÁ PROCESSANDO <span>· · ·</span></div>}</div><form className="composer" onSubmit={send}><label htmlFor="message">SUA MENSAGEM</label><div className="input-row"><input id="message" value={input} onChange={event => setInput(event.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} placeholder="Escreva algo para o Cheese..." maxLength={1000}/><button type="submit" disabled={!input.trim() || phase !== 'idle'} aria-label="Enviar mensagem">↗</button></div><div className="composer-foot"><span>✧ CONVERSA LOCAL E TEMPORÁRIA</span><span>ENTER PARA ENVIAR ↵</span></div></form></section>
    </main><footer className="statusbar"><span><i/> TODOS OS SISTEMAS EM SIMULAÇÃO</span><span>CRIADO PARA VOCÊ <b>✳</b> CHEESE</span><span>PRIVACIDADE ATIVA ◇</span></footer>
  </div>;
}
