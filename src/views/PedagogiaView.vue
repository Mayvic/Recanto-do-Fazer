<script setup lang="ts">
import { useHead } from '@unhead/vue'
import PlaceholderImage from '../components/common/PlaceholderImage.vue'
import { SCHOOL_DESCRIPTION, SCHOOL_NAME, SCHOOL_TAGLINE } from '../data/contatos'
import { canonicalHead, canonicalUrl } from '../data/seo'

const homeUrl = canonicalUrl('/')
const pageUrl = canonicalUrl('/pedagogia-waldorf')
const breadcrumbSchema = homeUrl && pageUrl ? [{
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: homeUrl },
    { '@type': 'ListItem', position: 2, name: 'Pedagogia Waldorf', item: pageUrl },
  ],
}] : []

useHead({
  title: `Pedagogia Waldorf | ${SCHOOL_NAME}`,
  link: canonicalHead('/pedagogia-waldorf'),
  meta: [{ name: 'description', content: `${SCHOOL_TAGLINE}. Conheça os princípios da Pedagogia Waldorf e como eles inspiram nosso cotidiano em Nova Iguaçu.` }, { property: 'og:title', content: `Pedagogia Waldorf | ${SCHOOL_NAME}` }, { property: 'og:description', content: SCHOOL_DESCRIPTION }],
    htmlAttrs: { lang: 'pt-BR' },
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify([
    ...breadcrumbSchema,
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
      { '@type': 'Question', name: 'O que é a Pedagogia Waldorf?', acceptedAnswer: { '@type': 'Answer', text: 'É uma abordagem educacional que considera o desenvolvimento integral da criança e integra experiências práticas, artísticas, intelectuais e sociais.' } },
      { '@type': 'Question', name: 'Como a Pedagogia Waldorf aparece no cotidiano?', acceptedAnswer: { '@type': 'Answer', text: 'Por meio de ritmos, brincadeiras, narrativas, arte, materiais naturais e atividades apropriadas a cada fase do desenvolvimento.' } },
    ] },
  ]) }],
})
</script>

<template>
  <div class="content-page">
    <section class="page-hero"><div class="container page-hero-grid"><div><span class="eyebrow">Aprender com cabeça, coração e mãos</span><h1>Pedagogia Waldorf: <em>educação para a vida.</em></h1><p>Uma abordagem que respeita os tempos da infância e cultiva curiosidade, imaginação e confiança.</p><p class="page-claim">{{ SCHOOL_TAGLINE }} — em Nova Iguaçu, RJ.</p></div><div class="page-hero-art"><PlaceholderImage label="Ilustração em aquarela de árvore, sol e jardim" variant="sun" /></div></div></section>
    <section class="section-pad"><div class="container split-section"><div class="section-copy"><span class="eyebrow">Uma história que inspira</span><h2>Uma educação que vê <em>a criança por inteiro.</em></h2><p>A Pedagogia Waldorf nasceu em 1919, em Stuttgart, a partir das ideias do filósofo e educador Rudolf Steiner. Sua proposta considera que aprender envolve pensar, sentir e agir — e que cada etapa da infância pede experiências próprias.</p><p>Em vez de apressar etapas, essa perspectiva valoriza o desenvolvimento gradual, o vínculo com educadores e a parceria cotidiana entre escola e família.</p></div><div class="fact-card"><span class="fact-year">1919</span><strong>Stuttgart, Alemanha</strong><span>O início da primeira escola Waldorf, criada para atender filhos de trabalhadores da fábrica Waldorf-Astoria.</span></div></div></section>
    <section class="section-pad septenios-section"><div class="container"><div class="section-heading"><span class="eyebrow">Desenvolvimento em movimento</span><h2>Cada idade tem sua <em>maneira de aprender.</em></h2><p>A ideia dos setênios observa ciclos aproximados de sete anos como uma forma de compreender mudanças e necessidades ao longo do crescimento.</p></div><div class="septenio-grid"><article class="septenio-card"><span class="septenio-age">0—7 anos</span><h3>Descobrir fazendo</h3><p>Nos primeiros anos, a criança aprende muito pela imitação, pelo movimento e pela exploração sensorial. Brincar, repetir gestos do cotidiano e estar em contato com materiais diversos alimenta sua curiosidade.</p><span class="septenio-icon"><i class="ri-seedling-line" aria-hidden="true"></i></span></article><article class="septenio-card"><span class="septenio-age">7—14 anos</span><h3>Imaginar e sentir</h3><p>Na idade escolar, histórias, imagens e experiências artísticas ajudam a construir significado. Os conteúdos ganham vida por meio de narrativas, observação, criação e participação ativa.</p><span class="septenio-icon"><i class="ri-sun-cloudy-line" aria-hidden="true"></i></span></article></div></div></section>
    <section class="section-pad"><div class="container practice-grid"><div class="practice-art"><PlaceholderImage label="Ilustração aquarelada de flores e plantas do jardim" variant="garden" /></div><div class="section-copy"><span class="eyebrow">Na prática, todos os dias</span><h2>Ritmo, natureza e <em>mãos que criam.</em></h2><p>Na Recanto do Fazer, os princípios Waldorf ganham forma em experiências adequadas a cada turma, sempre conduzidas pela equipe pedagógica.</p><ul class="check-list"><li><i class="ri-checkbox-circle-fill" aria-hidden="true"></i> Ritmos diários e celebrações das estações</li><li><i class="ri-checkbox-circle-fill" aria-hidden="true"></i> Brincar livre, contos e imaginação</li><li><i class="ri-checkbox-circle-fill" aria-hidden="true"></i> Materiais naturais, arte e atividades práticas</li><li><i class="ri-checkbox-circle-fill" aria-hidden="true"></i> Vínculo próximo entre escola e família</li></ul></div></div></section>
    <section class="section-pad distinction-section"><div class="container distinction-card"><span class="eyebrow">Uma presença especial na região</span><h2>{{ SCHOOL_TAGLINE }}.</h2><p>Em Nova Iguaçu, queremos que mais famílias da região encontrem uma proposta educativa que valoriza a infância, a comunidade e a conexão com a natureza.</p><RouterLink class="button button-primary" to="/contato">Venha conhecer a escola <i class="ri-arrow-right-line" aria-hidden="true"></i></RouterLink></div></section>
  </div>
</template>
