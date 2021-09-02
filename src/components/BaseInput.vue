<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useVModel } from '@vueuse/core'

export default defineComponent({
  props: {
    modelValue: {
      required: false,
      type: [String, Number],
      default: '',
    },
    label: {
      required: false,
      type: String,
      default: '',
    },
    type: {
      required: false,
      type: String,
      default: '',
    },
  },

  setup(props, { emit }) {
    const model = useVModel(props, 'modelValue', emit)

    return {
      model,
    }
  },
})
</script>

<template>
  <div>
    <label class="flex flex-col">
      <span class="font-semibold tracking-wide mb-2 font-lg text-gray-800">{{ label }}</span>
      <input v-model="model" :type="type" class="ease-in-out focus:ring duration-300 border border-gray-200 shadow-sm border-solid rounded-md text-black bg-white outline-none leading-relaxed font-thin px-1 py-2 min-h-7 align-middle" :placeholder="placeholder" />
    </label>
  </div>
</template>
