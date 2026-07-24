<template>
  <section class="recent-section">
    <!-- Header ของ Section -->
    <div class="recent-header">
      <h2 class="section-title">Recent Lessons</h2>
      <router-link to="/archive" class="view-archive-link">
        View Archive
      </router-link>
    </div>

    <!-- รายการบทเรียนแนวตั้ง (List) -->
    <div class="recent-list">
      <div 
        v-for="item in lessons" 
        :key="item.id" 
        class="recent-card"
        @click="$emit('select', item.id)"
      >
        <!-- รูปภาพฝั่งซ้าย -->
        <div class="recent-thumb">
          <img v-if="item.imageSrc" :src="item.imageSrc" :alt="item.title" class="thumb-img" />
          <svg v-else class="placeholder-svg" preserveAspectRatio="none" viewBox="0 0 100 100">
            <line x1="0" y1="0" x2="100" y2="100" />
            <line x1="100" y1="0" x2="0" y2="100" />
          </svg>
        </div>

        <!-- รายละเอียดตรงกลาง -->
        <div class="recent-info">
          <h3 class="recent-title">{{ item.title }}</h3>
          <p class="recent-meta">
            by {{ item.author }} • <span class="recent-category">{{ item.category }}</span>
          </p>
        </div>

        <!-- Action ฝั่งขวา (เวลาอ่าน, Bookmark, Arrow) -->
        <div class="recent-actions">
          <span class="read-time">{{ item.readTime }}</span>
          
          <!-- ปุ่ม Bookmark -->
          <button 
            class="action-icon-btn" 
            title="Bookmark" 
            @click.stop="$emit('bookmark', item.id)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>

          <!-- ปุ่ม Arrow -->
          <button 
            class="action-icon-btn" 
            title="Read Lesson"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { RecentLessonItem } from '../data/mockRecentLessons'

defineProps<{
  lessons: RecentLessonItem[]
}>()

defineEmits<{
  (e: 'select', id: number | string): void
  (e: 'bookmark', id: number | string): void
}>()
</script>