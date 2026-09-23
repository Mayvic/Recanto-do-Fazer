<script setup lang="ts">
import { INSTAGRAM_URL, MAPS_URL, SCHOOL_ADDRESS, SCHOOL_NAME, SCHOOL_TAGLINE, WHATSAPP_URL } from '../../data/contatos'
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-about">
        <RouterLink to="/" class="footer-brand"><i class="ri-leaf-line" aria-hidden="true"></i> {{ SCHOOL_NAME }}</RouterLink>
        <p>{{ SCHOOL_TAGLINE }}.<br>Uma infância vivida com presença, natureza e sentido.</p>
        <div class="social-links">
          <a :href="INSTAGRAM_URL" target="_blank" rel="noreferrer" aria-label="Instagram do Recanto do Fazer"><i class="ri-instagram-line" aria-hidden="true"></i></a>
          <a :href="WHATSAPP_URL" target="_blank" rel="noreferrer" aria-label="WhatsApp do Recanto do Fazer"><i class="ri-whatsapp-line" aria-hidden="true"></i></a>
        </div>
      </div>
      <div class="footer-nav">
        <h2>Explore</h2>
        <RouterLink to="/pedagogia-waldorf">Pedagogia Waldorf</RouterLink>
        <RouterLink to="/turmas">Nossas turmas</RouterLink>
        <RouterLink to="/rotina">Rotina do dia a dia</RouterLink>
        <RouterLink to="/contato">Contato</RouterLink>
      </div>
      <div class="footer-address">
        <h2>Venha nos conhecer</h2>
        <p>{{ SCHOOL_ADDRESS }}</p>
        <a :href="MAPS_URL" target="_blank" rel="noreferrer">Ver localização <i class="ri-arrow-up-right-line" aria-hidden="true"></i></a>
      </div>
    </div>
    <div class="container footer-bottom"><span>© {{ new Date().getFullYear() }} {{ SCHOOL_NAME }}.</span><span>Feito com cuidado para florescer junto.</span></div>
  </footer>
</template>
