<template>
  <div class="app-layout">
    <!-- นำ Navbar มาวางไว้บนสุด -->
    <Navbar />

    <main class="demo-container">
      <header class="header">
        <h1>Courses & Lessons Overview</h1>
        <p>ตัวอย่างการใช้งาน LessonCard.vue ร่วมกับ Mock Data 3 รูปแบบ</p>
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
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue' // 👈 Import Navbar เข้ามา
import LessonCard from './components/LessonCard.vue'
import { mockLessons, type LessonItem } from '../data/mockLessons'

const handleRead = (item: LessonItem) => {
  alert(`คลิกเข้าดูบทเรียน: "${item.title}"`)
}

const handleSave = (item: LessonItem) => {
  alert(`บันทึกบทเรียน: "${item.title}" เรียบร้อยแล้ว`)
}
</script>