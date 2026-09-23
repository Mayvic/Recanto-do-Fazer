<script setup lang="ts">
import { WHATSAPP_URL } from '../../data/contatos'
</script>

<template>
  <a class="floating-whatsapp" :href="WHATSAPP_URL" target="_blank" rel="noreferrer" aria-label="Converse com o Recanto do Fazer pelo WhatsApp">
    <i class="ri-whatsapp-line" aria-hidden="true"></i><span>Vamos conversar?</span>
  </a>
</template>
