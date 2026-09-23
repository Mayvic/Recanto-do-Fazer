<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
const links = [
  { label: 'Início', to: '/' },
  { label: 'Pedagogia Waldorf', to: '/pedagogia-waldorf' },
  { label: 'Turmas', to: '/turmas' },
  { label: 'Rotina', to: '/rotina' },
  { label: 'Contato', to: '/contato' },
]
</script>

<template>
  <header class="site-header">
    <div class="header-inner container">
      <RouterLink class="brand" to="/" aria-label="Recanto do Fazer, página inicial">
        <span class="brand-mark"><i class="ri-leaf-line" aria-hidden="true"></i></span>
        <span class="brand-copy"><strong>recanto <em>do fazer</em></strong><small>ESCOLA WALDORF · NOVA IGUAÇU</small></span>
      </RouterLink>

      <nav class="desktop-nav" aria-label="Navegação principal">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="nav-link" :exact-active-class="link.to === '/' ? 'is-active' : undefined">{{ link.label }}</RouterLink>
      </nav>

      <a href="https://wa.me/+5521996946737" class="header-cta" target="_blank" rel="noreferrer" aria-label="Fale com a escola pelo WhatsApp">
        <i class="ri-whatsapp-line" aria-hidden="true"></i><span>Fale conosco</span>
      </a>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="mobile-navigation" aria-label="Abrir navegação" @click="menuOpen = true">
        <i class="ri-menu-3-line" aria-hidden="true"></i>
      </button>
    </div>

    <a-drawer v-model:open="menuOpen" title="Navegação" placement="right" :width="300" :body-style="{ padding: '12px 22px' }">
      <nav id="mobile-navigation" class="mobile-nav" aria-label="Navegação móvel">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="mobile-nav-link" @click="menuOpen = false">{{ link.label }}<i class="ri-arrow-right-line" aria-hidden="true"></i></RouterLink>
        <a class="mobile-whatsapp" href="https://wa.me/+5521996946737" target="_blank" rel="noreferrer"><i class="ri-whatsapp-line" aria-hidden="true"></i> Conversar no WhatsApp</a>
      </nav>
    </a-drawer>
  </header>
</template>
