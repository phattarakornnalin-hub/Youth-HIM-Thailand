<!-- src/components/Footer.vue -->
<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- 1. Left Section: Brand & Copyright -->
      <div class="footer-brand">
        <h3 class="footer-title">YouthLead Hub</h3>
        <p class="footer-copyright">© 2024 Youth Leader Resource Hub</p>
      </div>

      <!-- 2. Middle Section: Navigation Links -->
      <nav class="footer-links">
        <router-link to="/login" class="footer-link">Admin Login</router-link>
        <router-link to="/privacy" class="footer-link">Privacy Policy</router-link>
        <router-link to="/contact" class="footer-link">Contact</router-link>
      </nav>

      <!-- 3. Right Section: Action Icons -->
      <div class="footer-icons">
        <a href="#" class="icon-link" title="Website" aria-label="Website">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </a>
        <a href="mailto:contact@youthlead.com" class="icon-link" title="Email Us" aria-label="Email Us">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
        <button class="icon-link icon-btn" title="Share" aria-label="Share" @click="handleShare">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const handleShare = () => {
  if (navigator.share) {
    navigator.share({
      title: 'YouthLead Hub',
      url: window.location.href
    }).catch(() => {})
  } else {
    navigator.clipboard.writeText(window.location.href)
    alert('คัดลอกลิงก์เรียบร้อยแล้ว!')
  }
}
</script>