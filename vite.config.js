import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ex1-react-course-birthday-buddy/",
  plugins: [react()],
});
