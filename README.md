# Lara (sitio)

Este repo contiene la página estática / PWA de Lara con calculadora de diezmos y historial.

Cambios incluidos en la rama propuesta `improve/pwa-ui`:
- UI renovada: botones grandes con iconos, más color y estética.
- Página `diezmos.html` con cálculo automático (10% de ingresos - gastos) y opción de guardar pago.
- Página `historial.html` que muestra los pagos guardados (localStorage) y permite eliminar.
- Service Worker y manifest actualizados para PWA (cache versionado y fallback).
- Manejo del botón atrás para mejorar la navegación en móviles/WebView.

Cómo probar localmente:
1. Clona el repo y sitúate en la carpeta:
   ```bash
   git clone https://github.com/laraoalex07-gif/Lara.git
   cd Lara
   ```
2. Sirve con un servidor local (Chrome permite SW en http://localhost):
   ```bash
   python -m http.server 8000
   # Abrir http://localhost:8000/Lara/
   ```
3. Comprueba que:
   - Al abrir Diezmos puedes calcular y guardar un pago.
   - En Historial aparece el registro y se puede eliminar.
   - El service worker se registra al cargar la página.

Notas:
- Para que el SW y la instalación PWA funcionen en producción necesitas HTTPS (GitHub Pages ya lo provee).
- Recomiendo comprimir `aa.jpg` y generar iconos 192x192 y 512x512 en formato PNG/WebP para mejor rendimiento y cumplir con los requisitos de Play Store / manifest.
- Si quieres puedo generar versiones optimizadas de la imagen y añadir un workflow CI para comprobar Lighthouse automáticamente.
