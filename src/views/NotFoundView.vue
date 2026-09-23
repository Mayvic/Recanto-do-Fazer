<script setup lang="ts">
import { useHead } from '@unhead/vue'
useHead({ htmlAttrs: { lang: 'pt-BR' }, title: 'Página não encontrada | Recanto do Fazer', meta: [{ name: 'robots', content: 'noindex' }] })
</script>

<template><section class="not-found"><div class="container"><span class="eyebrow">Ops, caminho diferente</span><h1>Esta página ainda não <em>floresceu.</em></h1><p>O endereço pode ter mudado. Vamos voltar para o começo?</p><RouterLink class="button button-primary" to="/">Ir para a página inicial <i class="ri-arrow-right-line" aria-hidden="true"></i></RouterLink></div></section></template>
