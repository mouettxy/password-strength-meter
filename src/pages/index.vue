<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const strength = ref(0)

    return {
      strength,
    }
  },

  mounted() {},
})
</script>

<template>
  <div>
    <div class="elevation-8 p-8 flex flex-col rounded-lg items-center space-y-16">
      <h1 class="font-bold text-2xl">
        Password strength meter
      </h1>
      <Animation :strength="strength" />
      <div class="flex items-center space-x-4 ">
        <label for="strength_input" class=" font-medium text-gray-500">Strength</label>
        <input
          id="strength_input"
          v-model.number="strength"
          min="0"
          max="5"
          class="rounded-lg text-center px-0.5 py-1 outline-none border-1 border-gray-400 border-solid"
          type="number"
          placeholder="strength"
        >
      </div>
    </div>
  </div>
</template>
