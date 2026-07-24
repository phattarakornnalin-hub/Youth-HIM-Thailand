<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- 1. Logo / Brand Name -->
      <router-link to="/" class="brand-logo" @click="closeMenu">
        Digital Sanctuary
      </router-link>

      <!-- 2. Desktop Navigation Links -->
      <div class="nav-links desktop-menu">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/lesson/1" class="nav-item">Library</router-link>
        <router-link to="/" class="nav-item">Saved</router-link>
        <router-link to="/dashboard" class="nav-item">Admin</router-link>
      </div>

      <!-- 3. Right Icons / Actions -->
      <div class="nav-actions">
        <router-link to="/login" class="user-icon-btn" title="เข้าสู่ระบบ" @click="closeMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </router-link>

        <!-- Hamburger Toggle Button (แสดงเฉพาะบนมือถือ) -->
        <button class="hamburger-btn" @click="toggleMenu" aria-label="Toggle Menu">
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- 4. Mobile Menu Dropdown -->
    <div v-if="isMenuOpen" class="mobile-menu">
      <router-link to="/" class="mobile-nav-item" @click="closeMenu">Home</router-link>
      <router-link to="/lesson/1" class="mobile-nav-item" @click="closeMenu">Library</router-link>
      <router-link to="/" class="mobile-nav-item" @click="closeMenu">Saved</router-link>
      <router-link to="/dashboard" class="mobile-nav-item" @click="closeMenu">Admin</router-link>
    </div>
  </nav>
</template>