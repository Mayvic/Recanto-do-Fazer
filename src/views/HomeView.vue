<script setup lang="ts">
import { useHead } from '@unhead/vue'
import PlaceholderImage from '../components/common/PlaceholderImage.vue'
import { turmas } from '../data/turmas'
import { SCHOOL_ADDRESS, SCHOOL_DESCRIPTION, SCHOOL_NAME, SCHOOL_TAGLINE, INSTAGRAM_URL, MAPS_URL, WHATSAPP_URL } from '../data/contatos'
import { canonicalHead, canonicalUrl } from '../data/seo'

useHead({
  title: `${SCHOOL_NAME} | Escola Waldorf em Nova Iguaçu`,
  link: canonicalHead('/'),
  meta: [
    { name: 'description', content: SCHOOL_DESCRIPTION },
    { property: 'og:title', content: `${SCHOOL_NAME} — Escola Waldorf na Baixada Fluminense` },
    { property: 'og:description', content: SCHOOL_DESCRIPTION },
    { property: 'og:type', content: 'website' },
    { name: 'theme-color', content: '#f7edcf' },
  ],
    htmlAttrs: { lang: 'pt-BR' },
    script: [{ type: 'application/ld+json', innerHTML: JSON.stringify({
    '@context': 'https://schema.org', '@type': 'EducationalOrganization', name: SCHOOL_NAME,
    description: SCHOOL_DESCRIPTION, slogan: SCHOOL_TAGLINE, telephone: '+5521996946737',
    address: { '@type': 'PostalAddress', streetAddress: 'R. Ministro Lafaiete de Andrade, 1777 - Comendador Soares - Marco II', addressLocality: 'Nova Iguaçu', addressRegion: 'RJ', postalCode: '26261-220', addressCountry: 'BR' },
    sameAs: [INSTAGRAM_URL], url: canonicalUrl('/') || undefined,
  }) }],
})

const highlights = [
  { icon: 'ri-group-line', title: 'Turmas pequenas', text: 'Até 10 crianças por turma' },
  { icon: 'ri-heart-3-line', title: 'Cuidado próximo', text: 'Professora e auxiliar em cada turma' },
  { icon: 'ri-leaf-line', title: 'Comida de verdade', text: 'Alimentação natural e colorida' },
]
</script>

<template>
  <div class="page-home">
    <section class="hero-section section-pad">
      <div class="hero-wash wash-yellow"></div><div class="hero-wash wash-green"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow"><i class="ri-sun-line" aria-hidden="true"></i> Um lugar para crescer com sentido</span>
          <h1>Aprender com as mãos, <span>florescer por inteiro.</span></h1>
          <p class="hero-lead">Uma infância com tempo para brincar, imaginar e descobrir o mundo — com presença, natureza e afeto.</p>
          <p class="hero-claim">{{ SCHOOL_TAGLINE }}.</p>
          <div class="hero-actions">
            <a class="button button-primary" :href="WHATSAPP_URL" target="_blank" rel="noreferrer">Agende uma visita <i class="ri-arrow-right-line" aria-hidden="true"></i></a>
            <RouterLink class="button button-quiet" to="/pedagogia-waldorf">Conheça nossa pedagogia</RouterLink>
          </div>
          <div class="hero-note"><i class="ri-map-pin-2-line" aria-hidden="true"></i> Nova Iguaçu, Baixada Fluminense</div>
        </div>
        <div class="hero-art-wrap"><PlaceholderImage label="Ilustração aquarelada de um jardim com árvores e crianças brincando" variant="children" /><span class="art-sticker"><i class="ri-sparkling-2-line" aria-hidden="true"></i> Infância com presença</span></div>
      </div>
      <div class="hero-bottom container"><span>Educação Infantil</span><i></i><span>Fundamental I</span><i></i><span>Natureza e comunidade</span></div>
    </section>

    <section class="highlight-band" aria-label="Diferenciais da escola"><div class="container highlights-grid">
      <article v-for="item in highlights" :key="item.title" class="highlight-item"><span class="highlight-icon"><i :class="item.icon" aria-hidden="true"></i></span><div><h2>{{ item.title }}</h2><p>{{ item.text }}</p></div></article>
    </div></section>

    <section class="section-pad intro-section"><div class="container intro-grid">
      <div class="intro-art"><PlaceholderImage label="Ilustração aquarelada de um jardim escolar" variant="garden" /><span class="floating-leaf"><i class="ri-leaf-fill" aria-hidden="true"></i></span></div>
      <div class="section-copy"><span class="eyebrow">Educar é cultivar possibilidades</span><h2>Uma escola onde a infância pode <em>ser infância.</em></h2><p>A Pedagogia Waldorf olha para cada etapa do desenvolvimento com respeito. Aqui, o cotidiano combina ritmo, brincadeira, arte e convivência para que cada criança aprenda de forma viva.</p><p>Somos {{ SCHOOL_TAGLINE.toLowerCase() }}, em Nova Iguaçu: um espaço de encontros, vínculos e descobertas na Baixada Fluminense.</p><RouterLink to="/pedagogia-waldorf" class="text-link">Entenda a Pedagogia Waldorf <i class="ri-arrow-right-line" aria-hidden="true"></i></RouterLink></div>
    </div></section>

    <section class="section-pad classes-section"><div class="container"><div class="section-heading"><span class="eyebrow">Cada fase tem seu tempo</span><h2>Um caminho para cada <em>estação da infância.</em></h2><p>Grupos acolhedores e experiências adequadas ao momento de desenvolvimento de cada criança.</p></div>
      <div class="class-card-grid"><article v-for="(turma, index) in turmas" :key="turma.name" class="class-card" :class="`tone-${turma.color}`"><span class="class-number">0{{ index + 1 }}</span><span class="class-icon"><i :class="turma.icon" aria-hidden="true"></i></span><h3>{{ turma.name }}</h3><p>{{ turma.description }}</p><div class="class-meta"><span><i class="ri-time-line" aria-hidden="true"></i>{{ turma.schedule }}</span><span><i class="ri-user-heart-line" aria-hidden="true"></i>{{ turma.age }}</span></div><RouterLink to="/turmas" class="text-link">Ver detalhes <i class="ri-arrow-right-line" aria-hidden="true"></i></RouterLink></article></div>
    </div></section>

    <section class="section-pad rhythm-section"><div class="container rhythm-card"><div><span class="eyebrow">O dia a dia</span><h2>Ritmo que acolhe.<br><em>Espaço para descobrir.</em></h2><p>Histórias, movimento, atividades artísticas e tempo ao ar livre fazem parte de uma rotina que dá segurança e liberdade para aprender.</p><RouterLink class="button button-light" to="/rotina">Veja uma rotina-exemplo <i class="ri-arrow-right-line" aria-hidden="true"></i></RouterLink></div><div class="rhythm-art"><div class="sun-doodle"><i class="ri-sun-fill" aria-hidden="true"></i></div><div class="rhythm-note note-one"><i class="ri-book-open-line" aria-hidden="true"></i> Histórias</div><div class="rhythm-note note-two"><i class="ri-seedling-line" aria-hidden="true"></i> Natureza</div><div class="rhythm-note note-three"><i class="ri-palette-line" aria-hidden="true"></i> Criação</div></div></div></section>

    <section class="section-pad care-section"><div class="container care-grid"><div class="section-copy"><span class="eyebrow">Cuidado nos pequenos gestos</span><h2>Um ambiente pequeno, <em>um mundo de possibilidades.</em></h2><p>Turmas com até 10 crianças, acompanhadas por uma professora e uma auxiliar, favorecem relações próximas e atenção ao percurso de cada uma.</p><ul class="check-list"><li><i class="ri-checkbox-circle-fill" aria-hidden="true"></i> Alimentação natural, com frutas e legumes</li><li><i class="ri-checkbox-circle-fill" aria-hidden="true"></i> Opções de horário estendido até 15h ou 18h</li><li><i class="ri-checkbox-circle-fill" aria-hidden="true"></i> Atividades de contraturno para ampliar experiências</li></ul><RouterLink class="text-link" to="/turmas">Conheça as turmas e horários <i class="ri-arrow-right-line" aria-hidden="true"></i></RouterLink></div><div class="care-quote"><span class="quote-mark">“</span><p>Na infância, cada descoberta merece tempo, espaço e alguém que esteja verdadeiramente presente.</p><span class="quote-caption">Um princípio que inspira nosso cotidiano</span><div class="quote-flower"><i class="ri-flower-line" aria-hidden="true"></i></div></div></div></section>

    <section class="section-pad testimonials-section"><div class="container"><div class="section-heading"><span class="eyebrow">Família e escola, lado a lado</span><h2>Uma comunidade que cresce <em>junto.</em></h2><p class="demo-note">Espaço demonstrativo: substituir por relatos reais e autorizados antes da publicação.</p></div><div class="testimonial-grid"><article class="testimonial-card"><div class="stars" aria-label="Exemplo visual de avaliação">★★★★★</div><p>“Este espaço está reservado para uma fala de família sobre a experiência na escola.”</p><strong>Depoimento ilustrativo</strong><small>Modelo para edição</small></article><article class="testimonial-card"><div class="stars" aria-label="Exemplo visual de avaliação">★★★★★</div><p>“Aqui poderá entrar uma história real, com autorização, sobre o cotidiano da criança.”</p><strong>Depoimento ilustrativo</strong><small>Modelo para edição</small></article></div></div></section>

    <section class="section-pad visit-section"><div class="container visit-card"><div><span class="eyebrow">Nosso cantinho em Nova Iguaçu</span><h2>Um bom começo pode ser <em>uma conversa.</em></h2><p>{{ SCHOOL_ADDRESS }}</p></div><div class="visit-actions"><a class="button button-primary" :href="WHATSAPP_URL" target="_blank" rel="noreferrer"><i class="ri-whatsapp-line" aria-hidden="true"></i> Fale com a gente</a><a class="button button-outline" :href="MAPS_URL" target="_blank" rel="noreferrer"><i class="ri-map-pin-line" aria-hidden="true"></i> Ver no mapa</a><a class="social-text-link" :href="INSTAGRAM_URL" target="_blank" rel="noreferrer"><i class="ri-instagram-line" aria-hidden="true"></i> Acompanhe no Instagram</a></div></div></section>
  </div>
</template>
