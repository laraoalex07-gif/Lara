Lara - feature complete (work in progress)

This branch improve/pwa-ui now contains:
- Full Registrations (Registros): income/expense, categories (add from Otros), date range filter, edit/delete in modal, export/import JSON, export PDF.
- Viajes: create/edit/delete, fields client/rutaInicio/rutaFin/estado/condicion, filters, export/import JSON, PDF.
- Diezmos: quincena calculation from registros, suggested diezmo, record payments per quincena, payment history editable, export JSON/PDF.
- Service worker and manifest updated to include the app pages and icon (aa.jpg used as source).

How to test locally:
- Option 1: Merge branch to main and let GitHub Pages publish. Visit https://laraoalex07-gif.github.io/Lara/
- Option 2: Clone and serve locally:
  python -m http.server 8000
  open http://localhost:8000/Lara/index.html

Notes:
- Data is stored in localStorage (per browser/device). Use Export/Import to backup or move data.
- Google Drive sync postponed.

Commit: Finish feature implementation: registros, viajes, diezmos, categories, payments, export/import, PDF