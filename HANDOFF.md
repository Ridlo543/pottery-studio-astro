# Handoff: Brand Studio Portfolio Showcase

**Folder:** `D:\Programming\project\brand-studio-portfolio`
**Status:** Handoff only (belum ada implementasi kode)
**Tanggal:** 2026-11-24

---

## 1. Konteks & Sumber Kebutuhan (Terverifikasi dari Upwork)

Proyek portofolio ini dirancang berdasarkan kebutuhan nyata dari wawancara Upwork dengan klien **Asifa E.** (`Asifa Enersia, Nessie`, Melle, Germany):

- **Job ID:** `2119728479488588889` (`https://www.upwork.com/jobs/~022119728479488588889`)
- **Judul Job:** `Motion Designer - Web Designer - UI/UX Designer` (`INDONESIANS ONLY`)
- **Room Upwork:** `room_d4a1102e21a69e57fec97ba951279403` (`Asifa Enersia, Nessie`)
- **Profil Klien di Upwork:** Melle, Germany | Payment Verified | `$325.00` spent | 4 hires / 6 jobs posted | Rating `5.0` (3 reviews)
- **Riwayat Kontrak Klien (2026):**
  1. `Brand Designer for Wellness Brands and Personal Branding` (Sep-Okt 2026)
  2. `Virtual Assistant for Instagram outreach and tracking` (Jun-Jul 2026)
  3. `Brand Identity + LinkedIn Assets + Portfolio Landing Page Design` (Jun-Agu 2026)
  4. `Brand Mascot Illustrator Needed for Podcast Logo & YouTube Background` (Feb-Mar 2026)
- **Catatan Identitas Publik:** Penelusuran web, Instagram, LinkedIn, dan direktori bisnis Jerman (`Melle`, `49324`, `Asifa`, `Enersia`, `Nessie`) tidak menemukan entitas publik terdaftar atas nama tersebut. Kemungkinan brand/studio masih dalam tahap persiapan sebelum rilis publik.

### Permintaan Persis Klien di Chat (`2026-11-10T08:59:03Z`)
```text
Hello.

Would you be able to design a modern brand studio website?
The style would be similar like https://www.studioblue.agency/ https://marinaveziko.com/ https://www.several.club/

Thank you
```

---

## 2. Analisis Teknis & Visual 3 Website Referensi

Hasil inspeksi HTML mentah dan konten ketiga referensi:

| Referensi | Platform Asli | Pola Visual & Struktur |
| :--- | :--- | :--- |
| `https://www.studioblue.agency/` | **Webflow** (`data-wf-site`) | Grid visual besar penuh mockup & GIF/motion halus, navigasi super minimal (`STUDIO BLUE AGENCY®`, `ABOUT`, email, `Book a call`), hampir tanpa teks panjang di beranda. |
| `https://marinaveziko.com/` | **Cargo** (`cargo.site`) | Editorial minimalis, tipografi display besar, layout galeri asimetris, fokus penuh pada art direction dan identitas merek. |
| `https://www.several.club/` | **Webflow** (`webflow.com`) | Kartu case study dengan tag disiplin (`Branding / Visual Identity / Web Design / Motion`), thumbnail video/motion loop, mockup produk nyata (signage, kemasan, iPad), dan copywriting singkat. |

### Pelajaran Utama
1. Klien studio branding tidak mencari tampilan dashboard SaaS, landing page gradient AI, atau kartu fitur 3 kolom generik.
2. Mereka menilai **art direction, tipografi editorial, whitespace, mockup visual nyata, dan motion halus**.
3. Karena referensi aslinya memakai Webflow/Cargo, klien terbiasa **mengedit konten dan case study sendiri tanpa menyentuh kode**.

---

## 3. Tujuan & Batasan Proyek

- **Tujuan:** Membangun 1 website showcase **Modern Brand & Digital Studio** (konsep studio branding untuk brand wellness, F&B, dan produk digital) yang:
  1. Menyamai kualitas visual editorial dan motion dari 3 referensi di atas.
  2. Menyediakan **panel CMS visual** agar klien/pemilik situs bisa menambah, mengubah, dan mengurutkan case study, gambar, video, serta teks secara bebas tanpa menyentuh kode.
  3. Unggul secara teknis dan SEO (HTML statis cepat, Core Web Vitals tinggi, metadata lengkap).
- **Kejujuran Portofolio:** Beri label jelas di footer/about sebagai **Concept Studio / Design Exploration** (jangan mengklaim brand konsep di dalamnya sebagai klien komersial nyata).

---

## 4. Rekomendasi Tech Stack

- **Framework:** **Astro** (output statis HTML, JS minimal, TTFB cepat, SEO teknis bersih)
- **Styling:** **Tailwind CSS** + custom typography scale (editorial display + clean sans-serif)
- **Motion:** **GSAP** atau **CSS + Astro View Transitions** (ringan, 60fps, tanpa membebani bundle React penuh; hindari animasi berlebihan yang mengganggu keterbacaan)
- **CMS (Edit Bebas oleh Klien):**
  - **Opsi A (Gratis, paling ringan untuk klien non-teknis):** **Pages CMS** (`pages-cms/pages-cms`, MIT, hosted gratis di `app.pagescms.org` atau self-host) — form UI + media manager yang langsung commit ke repo GitHub Astro.
  - **Opsi B (Gratis, terintegrasi di repo Astro):** **Keystatic** (`Thinkmill/keystatic`, `@keystatic/astro`, MIT) — panel admin `/keystatic` langsung di dalam proyek Astro tanpa database eksternal.
  - **Opsi C (Visual editing klik-langsung di halaman, berbayar):** **CloudCannon** (`@cloudcannon/editable-regions`, partner resmi Astro) — paling mirip Webflow untuk edit langsung di preview, tetapi berbayar (Standard `$49-$55/bln`, Lite `$10/bln` khusus Partner).
- **Hosting:** Vercel atau Cloudflare Pages (`$0`)

### Catatan Tradeoff vs Webflow/Framer
- **Kelebihan Astro + CMS:** Gratis di-host, skor Lighthouse/SEO lebih tinggi, dan menunjukkan kemampuan engineering + desain sekaligus.
- **Batasan:** Klien bisa mengedit konten (teks, gambar, video, tag, urutan case study) lewat CMS, tetapi tidak bisa drag-and-drop mengubah struktur grid layout seperti di Webflow/Framer.


---

## 5. Tooling Desain UI/UX, Aset Gambar, Skill & MCP

### A. Desain UI/UX Sebelum Coding (Penpot + Penpot MCP)
- **Tool utama:** **Penpot** (`https://penpot.app`) — `$0` penuh (open-source, unlimited files & teams, hingga 8 editor, 10 GB storage, layout CSS Grid/Flexbox native).
- **Penpot MCP Server (Resmi):**
  - Dokumentasi: `https://help.penpot.app/mcp/`
  - **Remote MCP:** Aktifkan di *Your account -> Integrations -> MCP Server* di `design.penpot.app`, salin URL (`https://design.penpot.app/mcp/stream?userToken=...`), lalu hubungkan ke agent (`npx -y add-mcp -g -n penpot <URL>`). Di file Penpot, jalankan *File -> MCP Server -> Connect* dan biarkan tab Penpot tetap aktif.
  - **Local MCP:** `http://localhost:4401/mcp` (mendukung akses file lokal seperti `import_image` dan `export_shape`).
  - **Alur kerja:** Buat wireframe, skala tipografi, token warna, dan grid asimetris di Penpot terlebih dahulu, lalu agent membaca struktur/token/aset lewat Penpot MCP untuk diterjemahkan ke Astro + Tailwind.
- **Alternatif opsional (punya kuota gratis terbatas):**
  - **Paper** (`https://paper.design`): canvas berbasis HTML/CSS asli, gratis `100 MCP tool calls/minggu`.
  - **pen.dev** (`https://pen.dev`, dulu `pencil.dev`): gratis `5 hari/bulan` sesi agent/MCP, bisa import HTML/Figma dan export HTML/Tailwind.

### B. Aset Gambar, Ikon & Audit Visual (Sudah Terpasang Lokal)
- **Skill utama:** `design-taste-frontend` (`C:\Users\Advan\.omp\agent\skills\design-taste-frontend\`)
  - `scripts/photos.mjs`: mencari foto berlisensi (Wikimedia Commons CC0/CC-BY/public domain + library terkurasi Unsplash/Wikimedia, tanpa API key Pexels), mengunduh ke `assets/img` dalam format WebP teroptimasi (`srcset`, batas hero `<= 400 KB`, lainnya `<= 250 KB`), dan menghasilkan `credits.json` + baris kredit footer.
  - `scripts/icons.mjs`, `scripts/moments.mjs`, `scripts/effects.mjs`: ikon produk asli, motion/dealt moments, dan efek visual.
  - `scripts/gate.mjs`, `scripts/perf.mjs`, `scripts/shoot.mjs`: audit browser, Core Web Vitals, dan screenshot multi-viewport.
- **Skill pendukung lokal:** `antislop-ui`, `antislop-layoutmobile`, `antislop-copywriting`, `frontend-design`, `ui-ux-pro-max`.
- **Catatan aset stok:** Pexels MCP tidak dipakai (tidak tersedia/tidak aktif); gunakan `photos.mjs` (Wikimedia Commons + library terkurasi) atau `hanoak/unsplash-mcp-server` (butuh `UNSPLASH_ACCESS_KEY` gratis, Demo tier 50 req/jam) jika butuh foto tambahan.

### C. MCP & Skill Khusus Astro
- **Astro Docs MCP (Resmi, gratis, tanpa API key):**
  - URL: `https://mcp.docs.astro.build/mcp` (Streamable HTTP, `https://docs.astro.build/en/guides/build-with-ai/`).
  - CLI Claude Code: `claude mcp add --transport http astro-docs https://mcp.docs.astro.build/mcp`
- **Skill Astro opsional:** `astro-sites-manager` (`npx skills add https://github.com/fabricioctelles/skills --skill astro-sites-manager`).
---

## 6. Spesifikasi Halaman & Fitur

### A. Halaman Utama (`/`)
- **Header minimal:** Nama studio, 3 tautan (`Work`, `About`, `Contact`), tanpa mega-menu atau tombol CTA berlebihan.
- **Hero editorial:** 1 pernyataan posisi studio yang singkat dan tajam dengan tipografi display besar + whitespace lega.
- **Asymmetric Case Study Grid (4-6 proyek konsep):**
  - Fokus domain yang relevan dengan riwayat klien: misal 1 brand wellness/skincare, 1 F&B/hospitality, 1 podcast/media brand, 1 produk digital/editorial.
  - Setiap kartu menampilkan: judul proyek, tag disiplin (`Brand Identity / Web Design / Motion`), dan visual utama (gambar resolusi tinggi atau video/motion loop halus saat hover).

### B. Halaman Detail Case Study (`/work/[slug]`)
- Ringkasan singkat (klien/konsep, tahun, disiplin, 2-3 kalimat konteks).
- Galeri visual penuh: mockup desktop & mobile, palet warna, sistem tipografi, dan aset identitas merek.
- Navigasi ke proyek berikutnya (`Next Project`).

### C. Halaman About (`/about`) & Contact (`/contact`)
- Profil studio ringkas, daftar layanan (Brand Identity, Web Design, Motion, Digital Experience), dan kontak langsung (email + form/tautan booking).

### D. SEO & Teknis
- Semantic HTML (`<main>`, `<article>`, `<nav>`, heading hierarchy H1-H3 rapi).
- Meta title, meta description, OpenGraph image per halaman/case study, `sitemap.xml`, `robots.txt`, dan JSON-LD schema (`Organization` / `CreativeWork`).
- Optimasi gambar (`astro:assets` / WebP / AVIF, `width`/`height` eksplisit untuk mencegah CLS).

---

## 7. Kriteria Selesai (Acceptance Checklist)

1. **Visual & Responsif:** Dicek langsung di Playwright pada viewport desktop (`1440x900`) dan mobile (`390x844`) tanpa horizontal overflow, teks terpotong, atau gambar pecah.
2. **CMS Edit Flow:** Terbukti bisa menambah/mengedit 1 case study lewat panel CMS dan perubahan tampil di build/preview.
3. **SEO & Performa:** Build produksi (`astro build`) lolos tanpa error; meta tags, OG tags, dan sitemap terverifikasi di HTML output.
4. **Deploy Live:** Tersedia URL live (Vercel/Cloudflare Pages) yang siap dilampirkan di portofolio Upwork dan profil utama.
