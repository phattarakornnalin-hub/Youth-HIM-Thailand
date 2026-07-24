<!-- src/App.vue -->
<template>
  <div class="app-layout">
    <!-- Navbar ด้านบน -->
    <Navbar />

    <!-- ส่วนเนื้อหาตาม Router -->
    <div class="content-wrapper">
      <router-view />
    </div>

    <!-- Footer ด้านล่าง -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>