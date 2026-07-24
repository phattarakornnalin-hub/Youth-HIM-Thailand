<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const lessonId = route.params.id
</script>

<template>
  <div class="lesson-detail-page min-h-screen bg-[#FBF9F5] text-[#2D2B2A] p-6 sm:p-12">
    <div class="max-w-3xl mx-auto space-y-6">
      <div class="border-b border-[#E5E0D8] pb-6">
        <span class="text-sm font-medium text-[#8C6D53] uppercase tracking-wider">Lesson Detail</span>
        <h1 class="text-3xl font-bold text-[#2D2B2A] mt-2">รายละเอียดบทเรียน (ID: {{ lessonId }})</h1>
        <p class="text-sm text-[#6B6865] mt-1">หน้านี้ใช้สำหรับแสดงเนื้อหาบทเรียน อ่าน และดาวน์โหลดเอกสาร</p>
      </div>
      
      <div class="bg-white p-8 rounded-lg shadow-sm border border-[#E5E0D8] space-y-4">
        <p class="text-[#6B6865] leading-relaxed">
          [พื้นที่สำหรับเนื้อหาบทเรียนเต็ม ปุ่มดาวน์โหลด PDF และเนื้อหาที่เกี่ยวข้องจะถูกใส่ตรงนี้]
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>