<template>
  <div class="card">
    <div class="card-image">
      <img v-if="imageSrc" :src="imageSrc" :alt="title" class="card-img" />
      <svg v-else class="placeholder-svg" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" />
        <line x1="100" y1="0" x2="0" y2="100" />
      </svg>
    </div>

    <div class="card-content">
      <span v-if="badge" class="badge">{{ badge }}</span>
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-description">{{ description }}</p>

      <div class="card-actions">
        <button class="btn btn-primary" @click="$emit('read')">
          {{ primaryActionText }}
        </button>
        <button class="btn btn-secondary" @click="$emit('save')">
          {{ secondaryActionText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  badge?: string
  title?: string
  description?: string
  imageSrc?: string
  primaryActionText?: string
  secondaryActionText?: string
}>()

defineEmits(['read', 'save'])
</script>