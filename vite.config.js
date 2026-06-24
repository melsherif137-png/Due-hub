import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // أو البلجن الخاص بـ Vue لو شغال بيه
import tailwindcss from "@tailwindcss/vite"; // 1. استدعاء البلجن الجديد

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. إضافة البلجن هنا
  ],
});
