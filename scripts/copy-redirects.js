import { copyFileSync } from 'fs'

try {
  copyFileSync('public/_redirects', '.output/public/_redirects') // Si usas SSR o preset `static`, usa esta ruta
  console.log('✅ _redirects copiado correctamente')
} catch (error) {
  console.error('❌ Error al copiar _redirects:', error)
}