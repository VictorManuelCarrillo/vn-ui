<script setup lang="ts">
import { computed } from 'vue';
import type { ButtonProps } from './button';

const props = withDefaults(defineProps<ButtonProps>(), {
  color: "primary",
  type: "button",
  disabled: false,
  filled: false,
  outlined: false,
  ghost: false,
  text: false,
});

const attrs = useAttrs();

// Computed para determinar la variante activa
const activeVariant = computed(() => {
  console.log("Props recibidas:", props); // Depuración
  if (props.filled) {
    return 'filled';
  } else if (props.outlined) {
    return 'outlined';
  } else if (props.ghost) {
    return 'ghost';
  } else if (props.text) {
    return 'text';
  }
  return 'default'; // Variante por defecto si ninguna es true
});

// Clases dinámicas del botón
const buttonClasses = computed(() => [
  'NvButton',
  `NvButton__color-${props.color}`,
  `NvButton--${activeVariant.value}`,
  props.disabled && 'NvButton--disabled',
]);

console.log("Clase generada:", buttonClasses.value); // Depuración
</script>

<template>
  <button
    :class="buttonClasses"
    v-bind="attrs"
  >
    <slot />
  </button>
</template>