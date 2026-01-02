Lara - Improved PWA UI

This branch (improve/pwa-ui) includes the following changes:

- registros.html: Implemented localStorage persistence, add/delete, export/import JSON, client-side PDF generation (jsPDF), and a confirmation modal for deletions.
- viajes.html: Same improvements as registros (persistence, export/import JSON, PDF generation, delete modal).
- diezmos.html: Enhanced with editing modal, persistence, export/import JSON, PDF generation and total calculation.
- sw.js: Updated service worker to pre-cache pages and include the app icon at /Lara/aa.jpg.
- manifest.json: Uses /Lara/aa.jpg as the application icon (no new PNGs were created; aa.jpg is referenced directly).
- README updated to reflect these improvements.

Notes:
- The manifest intentionally references the icon at /Lara/aa.jpg as requested.
- jsPDF is used from CDN for client-side PDF exports.
- Export/import uses JSON files and will merge imported entries at the top of existing lists.

Commit message: "Implement registros, viajes, enhanced diezmos, export/import and UI improvements; use aa.jpg for icons"
