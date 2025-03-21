<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    :class="buttonClasses"
    v-bind="attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useAttrs, computed } from 'vue'
import type { ButtonProps } from './button';
const props = withDefaults(defineProps<ButtonProps>(), {
  color: 'primary',
  type: 'button',
  size: 'md',
  shape: 'normal'
})

const attrs = useAttrs()

const activeVariant = computed(() => {
  if (props.outlined) return 'outlined'
  if (props.ghost) return 'ghost'
  if (props.filled) return 'solid'
  return 'solid'
})


const gradientClass = computed(() => {
  if (!props.gradient) return null
  if (typeof props.gradient === 'string') return `NvButton__gradient-${props.gradient}`
  return 'NvButton__gradient-default'
})


const Nv = 'NvButton';
const buttonClasses = computed(() => [
  'NvButton',
  `NvButton__color-${props.color}`,
  `NvButton--${activeVariant.value}`,
  `NvButton--size-${props.size}`,
  Nv+'__shape-'+props.shape,


  props.gradient && 'NvButton--gradient',
  gradientClass.value,

  props.disabled && 'NvButton--disabled'
])
</script>
