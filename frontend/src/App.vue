<!-- src/App.vue -->
<template>
  <div class="app-layout">
    <!-- Navbar จะแสดงอยู่ทุกหน้า -->
    <Navbar />

    <!-- หน้าต่างสลับ Component ตาม Router -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>