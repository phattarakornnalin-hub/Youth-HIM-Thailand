<script setup lang="ts">
// โลจิก Dashboard และบทเรียนจะนำมาใส่ในขั้นตอนถัดไป
</script>

<template>
  <div class="dashboard-page min-h-screen bg-[#FBF9F5] text-[#2D2B2A] p-6 sm:p-12">
    <div class="max-w-5xl mx-auto space-y-6">
      <div class="flex items-center justify-between border-b border-[#E5E0D8] pb-6">
        <div>
          <h1 class="text-3xl font-bold text-[#2D2B2A]">ระบบจัดการบทเรียน (Dashboard)</h1>
          <p class="text-sm text-[#6B6865] mt-1">จัดการบทเรียน เพิ่ม แก้ไข และลบบทเรียนในระบบ</p>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-sm border border-[#E5E0D8] space-y-4">
        <h2 class="text-lg font-semibold text-[#2D2B2A]">รายการบทเรียนทั้งหมด (Lesson List)</h2>
        <div class="p-8 border border-dashed border-[#E5E0D8] rounded text-center text-[#6B6865]">
          [ พื้นที่สำหรับแสดง Lesson List และปุ่ม Create / Edit / Delete ]
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>