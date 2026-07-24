<template>
  <div class="app-layout">
    <!-- Navbar (ถ้าอยากซ่อนด้วยใส่ v-if เหมือนกันได้ครับ) -->
    <Navbar />

    <!-- ส่วนเนื้อหา -->
    <div class="content-wrapper">
      <router-view />
    </div>

    <!-- แสดง Footer เฉพาะหน้าที่ไม่ได้สั่งซ่อน -->
    <Footer v-if="!route.meta.hideFooter" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
</script>