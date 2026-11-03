import React, { useState } from 'react';
import { ArrowRight, Check, Clock3, Download, FileText, Heart, Lightbulb, Menu, Printer, Sparkles, Star, Users, X, ChevronDown, BookOpen, Shapes, Palette, Calculator, Music2, Puzzle, ShieldCheck } from 'lucide-react';

const samples = [
  { title: 'Alfabetização divertida', tag: 'LETRAS E PALAVRAS', kind: 'letters' },
  { title: 'Complete a sequência', tag: 'RACIOCÍNIO LÓGICO', kind: 'sequence' },
  { title: 'Vamos contar?', tag: 'MATEMÁTICA', kind: 'numbers' },
  { title: 'Cores e formas', tag: 'ATIVIDADE INFANTIL', kind: 'shapes' },
];
const bonuses = [
  ['BÔNUS 01','Jogos e atividades para imprimir','Ideias práticas para movimentar a rotina da turma.'],
  ['BÔNUS 02','Atividades de reforço da alfabetização','Exercícios para letras, sílabas, leitura e escrita.'],
  ['BÔNUS 03','Atividades de matemática','Contagem, números, formas e raciocínio lógico.'],
  ['BÔNUS 04','Desenhos para colorir','Páginas criativas para pintar e explorar a imaginação.'],
  ['BÔNUS 05','Atividades para educação infantil','Propostas lúdicas para os pequenos.'],
  ['BÔNUS 06','Dinâmicas para a sala de aula','Momentos de interação, movimento e aprendizagem.'],
];
const faq = [
  ['Como recebo o material?','Após a confirmação do pagamento, você recebe as instruções de acesso no e-mail informado na compra.'],
  ['O material é digital?','Sim. O conteúdo é digital, organizado para você acessar e imprimir quando precisar.'],
  ['Posso imprimir as atividades?','Sim. As páginas foram pensadas para uso impresso. Verifique as orientações de cada arquivo.'],
  ['Serve para diferentes idades?','O acervo reúne propostas variadas. Confira a indicação de faixa etária e adapte cada atividade à sua turma.'],
  ['Por quanto tempo terei acesso?','As condições de acesso serão informadas na etapa de compra.'],
  ['Tem garantia?','A política e o prazo de garantia serão apresentados no checkout antes da confirmação da compra.'],
];
function Worksheet({kind}:{kind:string}) {
  return <div className={'worksheet '+kind}>
    <div className="ws-top"><span>ATIVIDADE PEDAGÓGICA</span><span>✿</span></div>
    {kind==='letters' ? <><b className="ws-title">VAMOS APRENDER?</b><div className="letter-grid">{['A','E','I','O','U','B'].map((v,i)=><span key={i}>{v}</span>)}</div><small>PINTE AS VOGAIS</small><div className="ws-lines"/></> :
    kind==='sequence' ? <><b className="ws-title">QUAL VEM DEPOIS?</b><div className="sequence-row"><i>1</i><i>2</i><i>3</i><i>?</i></div><div className="ws-lines"/><div className="ws-lines"/></> :
    kind==='numbers' ? <><b className="ws-title">CONTE E MARQUE</b><div className="count-dots">● ● ●<br/>● ●<br/>● ● ● ●</div><div className="answer-row"><span>5</span><span>8</span><span>9</span></div></> :
    <><b className="ws-title">FORMAS E CORES</b><div className="shape-row"><i/><i/><i/><i/></div><div className="ws-lines"/><div className="ws-lines"/></>}
    <div className="ws-footer">NOME: ____________________</div>
  </div>;
}
function App() {
  const [openFaq,setOpenFaq] = useState<number|null>(0);
  const [openCategory,setOpenCategory] = useState<number|null>(0);
  const [mobileOpen,setMobileOpen] = useState(false);
  return <div className="site">
    <div className="top-ribbon">CONDIÇÃO ESPECIAL DE LANÇAMENTO • ACERVO DIGITAL</div>
    <header className="hero" id="inicio">
      <nav className="nav wrap"><a className="brand" href="#inicio"><span className="brand-mark"><Shapes size={20}/></span> Dinâmicas & Aprendizagem</a><button className="mobile-toggle" onClick={()=>setMobileOpen(!mobileOpen)} aria-label="Abrir menu">{mobileOpen?<X/>:<Menu/>}</button><div className={'nav-links '+(mobileOpen?'show':'')}><a href="#conteudo">O que vem</a><a href="#beneficios">Benefícios</a><a href="#bonus">Bônus</a><a href="#oferta">Oferta</a></div><a className="nav-cta" href="#oferta">Quero conhecer <ArrowRight size={15}/></a></nav>
      <div className="hero-inner wrap">
        <div className="hero-copy"><div className="eyebrow"><Sparkles size={14}/> UM ACERVO PARA O ANO TODO</div>
          <h1>+1.000 Dinâmicas<br/>para o <em>ano inteiro</em></h1>
          <p className="hero-sub">Atividades lúdicas e materiais pedagógicos para deixar sua rotina mais leve, criativa e cheia de aprendizagem.</p>
          <div className="hero-points"><span><Check/> Pronto para imprimir</span><span><Check/> Acesso digital</span><span><Check/> Ideias para sua turma</span></div>
          <a className="primary-btn" href="#oferta">Quero acessar agora <ArrowRight size={17}/></a>
          <div className="guarantee-note"><ShieldCheck size={14}/> Confira as condições de acesso e garantia na compra</div>
        </div>
        <div className="hero-art"><div className="art-glow"/><div className="book-stack"><div className="book book-back"><span>ATIVIDADES</span><b>PARA<br/>APRENDER</b><small>CRIAR • BRINCAR • DESCOBRIR</small></div><div className="book book-front"><div className="book-spark">✦ ✿ ✦</div><strong>+1.000</strong><b>DINÂMICAS<br/>PARA O ANO<br/>INTEIRO</b><div className="book-kids">☺　☻　☺</div></div><div className="tablet"><div className="tablet-bar"/><div className="tablet-grid"><Worksheet kind="letters"/><Worksheet kind="numbers"/></div></div><div className="paper-fan"><Worksheet kind="sequence"/></div></div><div className="floating-note"><span>✦</span> Um ano inteiro de ideias!</div></div>
      </div>
    </header>
    <div className="ticker"><div className="wrap ticker-inner"><span>✓ Mais de 1.000 propostas</span><span>✓ Alfabetização e matemática</span><span>✓ Desenhos para colorir</span><span>✓ Dinâmicas em grupo</span><span>✓ Material digital</span><span>✓ Para usar o ano inteiro</span></div></div>

    <section className="section samples-section" id="conteudo"><div className="wrap">
      <div className="section-heading"><span className="kicker">UM UNIVERSO DE POSSIBILIDADES</span><h2>Veja um pouco do que você vai encontrar</h2><p>Um acervo variado para planejar, ensinar e aprender de um jeito mais divertido.</p></div>
      <div className="sample-grid">{samples.map((s)=><article className="sample-card" key={s.kind}><div className="sample-preview"><Worksheet kind={s.kind}/></div><div className="sample-info"><span>{s.tag}</span><h3>{s.title}</h3><p>Material visual e pronto para adaptar à sua rotina.</p></div></article>)}</div>
      <div className="center"><a className="text-link" href="#oferta">Quero ver tudo que está incluso <ArrowRight size={16}/></a></div>
    </div></section>

    <section className="feature-strip"><div className="wrap feature-grid"><div><span className="feature-icon"><FileText/></span><b>Material digital</b><small>Arquivos organizados para consultar e imprimir.</small></div><div><span className="feature-icon"><Download/></span><b>Acesso prático</b><small>Consulte seus materiais de onde estiver.</small></div><div><span className="feature-icon"><Printer/></span><b>Pronto para imprimir</b><small>Escolha a atividade e prepare sua aula.</small></div><div><span className="feature-icon"><BookOpen/></span><b>Para o ano inteiro</b><small>Variedade para diferentes momentos da turma.</small></div></div></section>

    <section className="section" id="beneficios"><div className="wrap"><div className="section-heading"><span className="kicker">MAIS LEVEZA NA SUA ROTINA</span><h2>Por que ter esse acervo?</h2><p>Menos tempo procurando ideias. Mais tempo vivendo experiências de aprendizagem com a turma.</p></div><div className="benefit-grid"><div className="benefit"><span><Clock3/></span><h3>Economia de tempo</h3><p>Tenha sugestões variadas à mão para organizar suas atividades com mais agilidade.</p></div><div className="benefit"><span><Users/></span><h3>Turmas mais engajadas</h3><p>Alterne propostas individuais, em duplas e em grupo para estimular a participação.</p></div><div className="benefit"><span><Heart/></span><h3>Aprendizagem com afeto</h3><p>Use brincadeiras e atividades criativas para tornar o aprendizado mais acolhedor.</p></div></div></div></section>

    <section className="section category-section"><div className="wrap category-layout"><div className="category-intro"><span className="kicker">TUDO ORGANIZADO POR TEMA</span><h2>Encontre a atividade certa para cada momento</h2><p>Explore diferentes áreas e escolha propostas de acordo com os objetivos da sua turma.</p><div className="category-stamp"><Sparkles/> Mais ideias, menos improviso</div></div><div className="accordion">{[['Alfabetização e linguagem','Letras, vogais, sílabas, formação de palavras, leitura e escrita.'],['Matemática e raciocínio','Números, contagem, operações, formas geométricas e desafios lógicos.'],['Desenhos para colorir','Ilustrações e propostas criativas para pintar, observar e imaginar.'],['Dinâmicas e brincadeiras','Jogos de integração, atenção, movimento, cooperação e socialização.'],['Educação infantil','Atividades lúdicas para explorar coordenação, percepção e descobertas.']].map((item,i)=><div className={'accordion-item '+(openCategory===i?'active':'')} key={item[0]}><button onClick={()=>setOpenCategory(openCategory===i?null:i)}><span className="acc-icon">{[<BookOpen/>,<Calculator/>,<Palette/>,<Music2/>,<Puzzle/>][i]}</span><b>{item[0]}</b><ChevronDown className="chevron"/></button>{openCategory===i&&<p>{item[1]}</p>}</div>)}</div></div></section>

    <section className="section bonus-section" id="bonus"><div className="wrap"><div className="section-heading"><span className="bonus-pill">✦ CONTEÚDOS EXTRAS</span><h2>Você também recebe materiais bônus</h2><p>Recursos complementares para ampliar suas possibilidades em sala de aula.</p></div><div className="bonus-grid">{bonuses.map((b,i)=><article className="bonus-card" key={b[0]}><div className="bonus-top"><span>{b[0]}</span><span className="included">INCLUSO</span></div><div className="bonus-icon">{[<Puzzle/>,<BookOpen/>,<Calculator/>,<Palette/>,<Shapes/>,<Users/>][i]}</div><h3>{b[1]}</h3><p>{b[2]}</p></article>)}</div></div></section>

    <section className="testimonials section"><div className="wrap"><div className="section-heading"><span className="kicker">FEITO PARA A ROTINA REAL</span><h2>Mais praticidade para quem ensina</h2><p>Um material de apoio para inspirar novas ideias e enriquecer o planejamento.</p></div><div className="quote-row"><div className="quote-card"><div className="stars">★★★★★</div><p>“Uma boa atividade pode transformar o clima da aula e despertar a curiosidade das crianças.”</p><span>INSPIRAÇÃO PARA SUA ROTINA</span></div><div className="quote-card quote-highlight"><div className="stars">✦ ✦ ✦</div><p>“Tenha mais opções para variar as propostas ao longo das semanas, sem começar do zero.”</p><span>MAIS VARIEDADE, MAIS POSSIBILIDADES</span></div><div className="quote-card"><div className="stars">★★★★★</div><p>“Organize seu acervo por temas e escolha o que faz sentido para cada momento da turma.”</p><span>UM APOIO PARA O ANO TODO</span></div></div></div></section>

    <section className="section offer-section" id="oferta"><div className="wrap"><div className="section-heading"><span className="kicker">ESCOLHA SUA OPÇÃO</span><h2>Tenha mais de 1.000 ideias sempre à mão</h2><p>Selecione a opção que melhor combina com a sua necessidade.</p></div><div className="pricing-grid"><article className="price-card featured"><span className="popular">MAIS COMPLETO</span><h3>Acervo Completo</h3><p className="price-desc">Dinâmicas, atividades e materiais extras</p><div className="price"><small>R$</small><strong>—</strong><span>valor a definir</span></div><ul><li><Check/> Mais de 1.000 dinâmicas e atividades</li><li><Check/> Alfabetização, letras, vogais e sílabas</li><li><Check/> Atividades de matemática</li><li><Check/> Desenhos para colorir</li><li><Check/> Dinâmicas e brincadeiras</li><li><Check/> Materiais bônus</li></ul><a className="primary-btn full" href="#duvidas">Quero acessar agora <ArrowRight size={16}/></a><small className="secure">Acesso digital • Detalhes no checkout</small></article><article className="price-card"><h3>Acervo Essencial</h3><p className="price-desc">Uma seleção para começar</p><div className="price"><small>R$</small><strong>—</strong><span>valor a definir</span></div><ul><li><Check/> Seleção de atividades</li><li><Check/> Propostas de alfabetização</li><li><Check/> Atividades de matemática</li><li><Check/> Acesso digital</li></ul><a className="outline-btn full" href="#duvidas">Conhecer esta opção <ArrowRight size={16}/></a><small className="secure">Conteúdo exato a confirmar</small></article></div></div></section>

    <section className="guarantee-section"><div className="wrap guarantee-inner"><div className="seal"><ShieldCheck size={38}/><b>7</b><small>DIAS</small></div><div><span className="kicker">COMPRA COM TRANQUILIDADE</span><h2>Garantia e suporte</h2><p>Consulte o prazo, as condições de garantia e os canais de suporte informados na página de pagamento.</p></div></div></section>

    <section className="section faq-section" id="duvidas"><div className="wrap faq-wrap"><div className="section-heading"><span className="kicker">AINDA TEM DÚVIDAS?</span><h2>Perguntas frequentes</h2><p>Veja as respostas para as dúvidas mais comuns.</p></div><div className="faq-list">{faq.map((f,i)=><div className="faq-item" key={f[0]}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}>{f[0]}<ChevronDown className={openFaq===i?'rotate':''}/></button>{openFaq===i&&<p>{f[1]}</p>}</div>)}</div></div></section>

    <section className="closing"><div className="wrap"><span>✦ SUA PRÓXIMA IDEIA COMEÇA AQUI</span><h2>Transforme sua rotina<br/>de sala de aula</h2><p>Mais de 1.000 dinâmicas para inspirar o ano inteiro.</p><a className="light-btn" href="#oferta">Quero conhecer o acervo <ArrowRight size={16}/></a></div></section>
    <footer><div className="wrap footer-inner"><a className="brand" href="#inicio"><span className="brand-mark"><Shapes size={18}/></span> Dinâmicas & Aprendizagem</a><small>© 2026 • Material digital educacional. Todos os direitos reservados.</small></div></footer>
  </div>;
}
export default App;
