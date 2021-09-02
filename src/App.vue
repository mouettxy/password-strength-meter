<script lang="ts">
import { defineComponent, computed, ref } from 'vue'

export default defineComponent({
  setup() {
    const password = ref('')

    const passwordStrength = computed(() => {
      let strength = 0

      if (password.value.length >= 8) strength += 1

      if (password.value.match(/(?=.*[0-9])/)) strength += 1

      if (password.value.match(/(?=.*[!,%,&,@,#,$,^,*,?,_,~,<,>,])/)) strength += 1

      if (password.value.match(/(?=.*[a-z])/)) strength += 1

      if (password.value.match(/(?=.*[A-Z])/)) strength += 1

      return strength
    })

    return {
      password,
      passwordStrength,
    }
  },

  mounted() {
    document.title = 'Type your password'
  },
})
</script>

<template>
  <main class="flex items-center justify-center h-screen">
    <div class="shadow-lg p-4 rounded-lg space-y-4">
      <h1 class="font-medium text-3xl tracking-wider">
        Password strength
      </h1>
      <div class="flex items-center space-x-8">
        <Animation :strength="passwordStrength" />
        <div class="flex items-center self-start">
          <base-input v-model="password" label="Enter password" type="password" />
        </div>
      </div>
    </div>
  </main>
</template>
