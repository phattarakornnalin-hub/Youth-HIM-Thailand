<!-- src/pages/HomePage.vue -->
<template>
  <main class="demo-container">
    <header class="header">
      <h1>Featured Content</h1>
    </header>

    <div class="cards-wrapper">
      <LessonCard
        v-for="item in mockLessons"
        :key="item.id"
        :badge="item.badge"
        :title="item.title"
        :description="item.description"
        :image-src="item.imageSrc"
        :primary-action-text="item.primaryActionText"
        :secondary-action-text="item.secondaryActionText"
        @read="handleRead(item)"
        @save="handleSave(item)"
      />
    </div>

    <!-- ส่วน Recent Lessons -->
    <RecentLessons 
      :lessons="recentLessonsList"
      @select="handleSelectRecent"
      @bookmark="handleBookmarkRecent"
    />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LessonCard from '../components/LessonCard.vue'
import RecentLessons from '../components/RecentLessons.vue'

import { mockLessons, type LessonItem } from '../data/mockLessons'
import { mockRecentLessons } from '../data/mockRecentLessons'

const router = useRouter()
const recentLessonsList = ref(mockRecentLessons)

const handleRead = (item: LessonItem) => {
  // เมื่อกดอ่าน ให้ Nav ไปยังหน้า Lesson Detail ตาม ID
  router.push(`/lesson/${item.id}`)
}

const handleSave = (item: LessonItem) => {
  alert(`บันทึกบทเรียน: ${item.title}`)
}

const handleSelectRecent = (id: number | string) => {
  router.push(`/lesson/${id}`)
}

const handleBookmarkRecent = (id: number | string) => {
  alert(`Bookmark Recent Lesson ID: ${id}`)
}
</script>