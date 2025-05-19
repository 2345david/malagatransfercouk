import { copyFileSync } from 'fs';

try {
  copyFileSync('public/_redirects', '.output/public/_redirects');
  console.log('✅ _redirects copiado correctamente a .output/public');
} catch (error) {
  console.error('❌ Error al copiar _redirects:', error);
}