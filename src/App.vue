<script lang="ts">
import { defineComponent } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  setup() {
    useHead({
      title: 'Password Strength Meter',
      meta: [
        { name: 'description', content: 'Password Strength Meter' },
      ],
    })
  },
})
</script>

<template>
  <router-view />
</template>
