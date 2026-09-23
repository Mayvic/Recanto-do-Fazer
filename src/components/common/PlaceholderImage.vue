<script setup lang="ts">
withDefaults(defineProps<{ label: string; variant?: 'sun' | 'garden' | 'children' }>(), { variant: 'garden' })
</script>

<template>
  <div class="art-card" role="img" :aria-label="label">
    <svg class="watercolor-art" viewBox="0 0 600 440" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <filter id="soften"><feGaussianBlur stdDeviation="13" /></filter>
        <linearGradient id="hill" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#c9d6ad" /><stop offset="1" stop-color="#9db88f" /></linearGradient>
      </defs>
      <rect width="600" height="440" rx="32" fill="#f8f0d9" />
      <circle cx="450" cy="95" r="60" fill="#f5d87e" opacity=".8" />
      <ellipse cx="190" cy="160" rx="120" ry="92" fill="#e6bfd1" opacity=".42" filter="url(#soften)" />
      <ellipse cx="390" cy="225" rx="148" ry="112" fill="#b9d1d0" opacity=".5" filter="url(#soften)" />
      <path d="M0 330 Q126 242 250 326 T600 304 V440 H0Z" fill="url(#hill)" />
      <path d="M0 375 Q150 315 300 367 T600 350 V440 H0Z" fill="#d9c99b" />
      <g v-if="variant !== 'sun'" fill="#78946d">
        <path d="M90 319 129 201l40 118h-24l-16-53-17 53z" /><path d="M440 325 480 194l46 131h-28l-18-57-17 57z" />
        <path d="M125 246q4-62 34-82 31 19 35 82-30-20-69 0M475 241q2-60 34-77 30 19 34 77-30-20-68 0" fill="#92aa7c" />
      </g>
      <g v-if="variant === 'children'" stroke="#a66755" stroke-width="8" stroke-linecap="round" fill="none">
        <circle cx="269" cy="280" r="22" fill="#edc3a1" stroke="none"/><path d="M269 305v55m0-34-25 22m25-22 28 20m-28 14-20 31m20-31 23 30" />
        <circle cx="346" cy="275" r="20" fill="#d5a779" stroke="none"/><path d="M346 299v52m0-31-25 18m25-18 25 17m-25 14-18 29m18-29 22 27" />
      </g>
      <path d="M222 118q16-25 34 0m11-10q15-23 30 0" stroke="#8c9872" stroke-width="4" fill="none" stroke-linecap="round" />
      <g fill="#d68f74"><circle cx="208" cy="361" r="8"/><circle cx="395" cy="383" r="7"/><circle cx="360" cy="352" r="6"/></g>
    </svg>
    <span class="art-caption">{{ label }}</span>
  </div>
</template>
