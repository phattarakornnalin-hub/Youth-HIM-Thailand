<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const identifier = ref('admin@youthlead.hub')
const password = ref('')

const handleLogin = () => {
  // ใส่ Logic การตรวจสอบสิทธิ์/API Call ตรงนี้
  console.log('Logging in with:', identifier.value, password.value)
  
  // ตัวอย่าง: เมื่อเข้าสู่ระบบสำเร็จ ให้ redirect ไปหน้า Dashboard
  // router.push('/dashboard')
}
</script>

<template>
  <div class="login-wrapper">
    <div class="login-container">
      <!-- Logo Header -->
      <div class="header-section">
        <div class="logo-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
        <h1 class="title">Admin Console</h1>
        <p class="subtitle">YouthLead Hub Security Portal</p>
      </div>

      <!-- Login Card Form -->
      <div class="card">
        <form @submit.prevent="handleLogin">
          <!-- Email / Username Input -->
          <div class="form-group">
            <label for="identifier">Email or Username</label>
            <input 
              id="identifier"
              v-model="identifier" 
              type="text" 
              placeholder="admin@youthlead.hub"
              required 
            />
          </div>

          <!-- Password Input -->
          <div class="form-group">
            <div class="label-row">
              <label for="password">Password</label>
              <a href="#" class="forgot-link">Forgot Password?</a>
            </div>
            <input 
              id="password"
              v-model="password" 
              type="password" 
              placeholder="••••••••"
              required 
            />
          </div>

          <!-- Submit Button -->
          <button type="submit" class="submit-btn">
            <span>Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
          </button>
        </form>
      </div>

      <!-- Footer Links -->
      <div class="footer-section">
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <span class="dot">•</span>
          <a href="#">Contact Support</a>
        </div>
        <p class="copyright">© 2024 Youth Leader Resource Hub</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Background and Container */
.login-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  /* ลายเส้นตารางบางๆ (Grid Pattern Background) ตามภาพ */
  background-image: 
    linear-gradient(to right, #f0f0f0 1px, transparent 1px),
    linear-gradient(to bottom, #f0f0f0 1px, transparent 1px);
  background-size: 24px 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
}

.login-container {
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Header Section */
.header-section {
  text-align: center;
  margin-bottom: 24px;
}

.logo-box {
  width: 64px;
  height: 64px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  margin-bottom: 16px;
  color: #111827;
}

.title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  margin: 0 0 6px 0;
}

.subtitle {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0;
}

/* Card Form */
.card {
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 28px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 8px;
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.label-row label {
  margin-bottom: 0;
}

.forgot-link {
  font-size: 0.825rem;
  font-weight: 600;
  color: #000000;
  text-decoration: none;
}

.forgot-link:hover {
  text-decoration: underline;
}

input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.95rem;
  color: #1f2937;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s ease;
}

input:focus {
  border-color: #000000;
}

input::placeholder {
  color: #9ca3af;
}

/* Button */
.submit-btn {
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
  transition: background-color 0.15s ease;
}

.submit-btn:hover {
  background-color: #1a1a1a;
}

/* Footer Section */
.footer-section {
  margin-top: 32px;
  text-align: center;
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
}

.footer-links a {
  font-size: 0.85rem;
  font-weight: 500;
  color: #4b5563;
  text-decoration: none;
}

.footer-links a:hover {
  color: #000000;
}

.dot {
  color: #d1d5db;
  font-size: 0.85rem;
}

.copyright {
  font-size: 0.8rem;
  color: #9ca3af;
  margin: 0;
}
</style>