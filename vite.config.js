import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
	base: "./", // Универсальные относительные пути
	build: {
		outDir: "docs", // Папка для сборки
		// assetsDir: "assets",
		// rollupOptions: {
		// 	output: {
		// 		// Убираем хэши из имен файлов для более простых путей (опционально)
		// 		assetFileNames: "assets/[name].[ext]",
		// 		chunkFileNames: "assets/[name].js",
		// 		entryFileNames: "assets/[name].js",
		// 	},
		// },
	}
});
