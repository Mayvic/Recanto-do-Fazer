<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import { INSTAGRAM_URL, MAPS_URL, SCHOOL_ADDRESS, SCHOOL_NAME, SCHOOL_TAGLINE, WHATSAPP_URL } from '../data/contatos'
import { canonicalHead } from '../data/seo'

useHead({ htmlAttrs: { lang: 'pt-BR' }, title: `Contato e localização | ${SCHOOL_NAME}`, link: canonicalHead('/contato'), meta: [{ name: 'description', content: `Fale com a escola ${SCHOOL_NAME}, ${SCHOOL_TAGLINE.toLowerCase()} em Nova Iguaçu. Consulte o endereço e agende uma visita.` }] })
const name = ref('')
const interest = ref('')
const message = ref('')
function sendMessage() {
  const text = [
    `Olá! Meu nome é ${name.value.trim() || '—'}.`,
    interest.value ? `Tenho interesse em: ${interest.value}.` : '',
    message.value.trim(),
  ].filter(Boolean).join('\n')
  window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <div class="content-page">
    <section class="page-hero"><div class="container page-hero-grid"><div><span class="eyebrow">Estamos por aqui</span><h1>Vamos começar com <em>uma conversa?</em></h1><p>Quer saber mais sobre nossa proposta, horários ou vagas? Será um prazer receber sua mensagem.</p><p class="page-claim">{{ SCHOOL_TAGLINE }}.</p></div><div class="contact-hero-art"><i class="ri-mail-heart-line" aria-hidden="true"></i><span>um abraço começa<br>com um olá</span></div></div></section>
    <section class="section-pad"><div class="container contact-layout"><div class="contact-details"><span class="eyebrow">Conte com a gente</span><h2>Fale com a <em>equipe Recanto.</em></h2><a class="contact-detail" :href="MAPS_URL" target="_blank" rel="noreferrer"><span class="detail-icon"><i class="ri-map-pin-2-line" aria-hidden="true"></i></span><span><strong>Nosso endereço</strong><small>{{ SCHOOL_ADDRESS }}</small><b>Ver no Google Maps <i class="ri-arrow-up-right-line" aria-hidden="true"></i></b></span></a><a class="contact-detail" :href="WHATSAPP_URL" target="_blank" rel="noreferrer"><span class="detail-icon"><i class="ri-whatsapp-line" aria-hidden="true"></i></span><span><strong>WhatsApp</strong><small>Envie sua dúvida ou agende uma visita.</small><b>+55 21 99694-6737</b></span></a><a class="contact-detail" :href="INSTAGRAM_URL" target="_blank" rel="noreferrer"><span class="detail-icon"><i class="ri-instagram-line" aria-hidden="true"></i></span><span><strong>Instagram</strong><small>Acompanhe novidades e momentos da escola.</small><b>@recantodofazer</b></span></a></div>
      <form class="whatsapp-form" @submit.prevent="sendMessage"><span class="eyebrow">Mensagem rápida</span><h2>Conte um pouquinho <em>do que procura.</em></h2><label for="contact-name">Seu nome</label><input id="contact-name" v-model="name" type="text" autocomplete="name" placeholder="Como podemos chamar você?" required><label for="contact-interest">Assunto</label><select id="contact-interest" v-model="interest"><option value="">Selecione uma opção</option><option>Maternal</option><option>Jardim de Infância</option><option>Fundamental I</option><option>Horários estendidos</option><option>Agendar uma visita</option><option>Outro assunto</option></select><label for="contact-message">Mensagem</label><textarea id="contact-message" v-model="message" rows="4" placeholder="Escreva sua mensagem aqui..."></textarea><button class="button button-primary form-submit" type="submit"><i class="ri-whatsapp-line" aria-hidden="true"></i> Enviar pelo WhatsApp</button><small class="form-privacy">Este formulário abre uma conversa no WhatsApp. Nenhum dado é salvo neste site.</small></form>
    </div></section>
    <section class="section-pad location-section"><div class="container location-card"><div><span class="eyebrow">Visite a escola</span><h2>Um endereço para <em>novos começos.</em></h2><p>{{ SCHOOL_ADDRESS }}</p></div><a class="button button-outline" :href="MAPS_URL" target="_blank" rel="noreferrer"><i class="ri-map-pin-line" aria-hidden="true"></i> Abrir localização</a></div></section>
  </div>
</template>
