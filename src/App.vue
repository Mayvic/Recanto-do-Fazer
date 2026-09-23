<script setup lang="ts">
import { theme } from './theme'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import FloatingWhatsApp from './components/layout/FloatingWhatsApp.vue'
</script>

<template>
  <a-config-provider :theme="theme">
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <AppHeader />
    <main id="conteudo"><RouterView /></main>
    <AppFooter />
    <FloatingWhatsApp />
  </a-config-provider>
</template>
