<script setup lang="ts">
import { computed, ref } from 'vue'
import { useHead } from '@unhead/vue'
import { rotinaPorTurma } from '../data/rotina'
import { SCHOOL_NAME, SCHOOL_TAGLINE } from '../data/contatos'
import { canonicalHead } from '../data/seo'

useHead({ htmlAttrs: { lang: 'pt-BR' }, title: `Rotina do dia a dia | ${SCHOOL_NAME}`, link: canonicalHead('/rotina'), meta: [{ name: 'description', content: `Conheça exemplos de rotina Waldorf para Maternal, Jardim e Fundamental I na ${SCHOOL_NAME}, ${SCHOOL_TAGLINE.toLowerCase()} em Nova Iguaçu.` }] })
const selected = ref<keyof typeof rotinaPorTurma>('maternal')
const activeRoutine = computed(() => rotinaPorTurma[selected.value])
const tabKeys = Object.keys(rotinaPorTurma) as Array<keyof typeof rotinaPorTurma>
</script>

<template>
  <div class="content-page">
    <section class="page-hero"><div class="container page-hero-grid"><div><span class="eyebrow">Um ritmo que dá segurança</span><h1>O dia a dia tem <em>seu próprio compasso.</em></h1><p>Alternar momentos de movimento, criação, descanso e convivência ajuda a construir um cotidiano acolhedor.</p><p class="page-claim">{{ SCHOOL_TAGLINE }}.</p></div><div class="routine-hero-mark"><i class="ri-sun-foggy-line" aria-hidden="true"></i><span>chegar · brincar · descobrir</span></div></div></section>
    <section class="section-pad"><div class="container routine-panel"><div class="section-heading"><span class="eyebrow">Exemplo de organização</span><h2>Uma rotina pensada para <em>cada grupo.</em></h2><p>Selecione uma turma para visualizar uma sequência ilustrativa.</p></div>
      <div class="routine-tabs" role="tablist" aria-label="Escolha a turma">
        <button v-for="key in tabKeys" :key="key" class="routine-tab" :class="{ 'is-selected': selected === key }" role="tab" :aria-selected="selected === key" :aria-controls="'routine-panel'" @click="selected = key">{{ rotinaPorTurma[key].label }}</button>
      </div>
      <div id="routine-panel" class="routine-content" role="tabpanel"><h3>{{ activeRoutine.label }}</h3><p class="routine-note"><i class="ri-information-line" aria-hidden="true"></i> Modelo demonstrativo. A rotina real pode variar conforme a turma e o planejamento pedagógico.</p><ol class="routine-timeline"><li v-for="(item, index) in activeRoutine.items" :key="item"><span class="timeline-dot"><i :class="['ri-sun-line', 'ri-run-line', 'ri-book-open-line', 'ri-restaurant-line', 'ri-leaf-line', 'ri-home-heart-line'][index]" aria-hidden="true"></i></span><div><span class="timeline-label">Momento {{ String(index + 1).padStart(2, '0') }}</span><h4>{{ item }}</h4><p>Horário e detalhes a serem definidos pela coordenação pedagógica.</p></div></li></ol></div>
    </div></section>
    <section class="section-pad routine-cta"><div class="container distinction-card"><span class="eyebrow">Conheça de perto</span><h2>O melhor jeito de sentir a escola é <em>vivendo uma visita.</em></h2><RouterLink to="/contato" class="button button-primary">Agendar uma conversa <i class="ri-arrow-right-line" aria-hidden="true"></i></RouterLink></div></section>
  </div>
</template>
