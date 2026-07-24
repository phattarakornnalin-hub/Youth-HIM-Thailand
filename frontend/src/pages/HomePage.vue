<script setup lang="ts">
import { useRouter } from 'vue-router'
import LessonCard from '../components/LessonCard.vue'

const router = useRouter()

const handleReadLesson = (id: string | number) => {
  router.push(`/lesson/${id}`)
}

const handleSaveLesson = (id: string | number) => {
  alert(`บันทึกบทเรียน ID: ${id} เรียบร้อย!`)
}
</script>

<template>
  <div style="padding: 2rem; display: flex; justify-content: center;">
    <LessonCard
      id="1"
      badgeText="NEW RELEASE"
      title="Strategic Leadership in Small Groups"
      description="Master the art of facilitating deep conversations and managing dynamics in youth circles. A comprehensive guide for 2024 leaders."
      @read="handleReadLesson"
      @save="handleSaveLesson"
    />
  </div>
</template>