# Free to Hang - Veebisait

Free to Hang äppi tutvustav veebisait, loodud Next.js ja Tailwind CSS-iga.

## Kiire start

### Eeldused
- Node.js 18+ 
- npm või yarn

### Paigaldamine

1. Klooni repositoorium:
```bash
git clone <repo-url>
cd free-to-hang-website
```

2. Paigalda sõltuvused:
```bash
npm install
```

3. Käivita arenduskeskkond:
```bash
npm run dev
```

Ava brauseris: http://localhost:3000

## Vercel'isse deploy

### Automaatne deploy
1. Push kood GitHub/GitLab/Bitbucket-isse
2. Ühenda Vercel'iga repositoorium
3. Vercel deployb automaatselt

### Käsitsi deploy
```bash
npm run build
npx vercel --prod
```

## Projekt struktuuri

```
free-to-hang-website/
├── app/
│   ├── globals.css      # Globaalsed stiilid
│   ├── layout.tsx       # Põhi layout
│   └── page.tsx         # Avalehe komponent
├── public/              # Staatilised failid
├── next.config.js       # Next.js konfiguratsioon
├── tailwind.config.js   # Tailwind konfiguratsioon
└── package.json         # Projektisõltuvused
```

## Omadused

- ✅ Responsive design (mobile-first)
- ✅ Modern UI/UX Tailwind CSS-iga
- ✅ Smooth animatsioonid Framer Motion-iga
- ✅ SEO optimeeritud (meta tagid, structured data)
- ✅ Optimeeritud Vercel deploy jaoks
- ✅ TypeScript tugi
- ✅ Estonian language support

## Tehnoloogiad

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel

## Kohandamine

### Värvid
Muuda värvipaletti failis `tailwind.config.js`:

```js
colors: {
  primary: {
    // Sinu värvisektsioon
  }
}
```

### Sisu
Põhiline sisu asub failis `app/page.tsx`. Muuda:
- Hero sektsiooni tekst
- Omaduste nimekirja
- Kasutajate arvustused
- Kontaktandmed

### Stiilid
Globaalsed stiilid: `app/globals.css`
Komponendispetsiifilised stiilid: Tailwind klassid

## Deploy protsess

1. **Development:** `npm run dev`
2. **Build:** `npm run build` 
3. **Deploy:** Vercel automaatselt või `npx vercel`

## Vercel seaded

Fail `next.config.js` on juba konfigureeritud Vercel'i jaoks:
- Static export
- Optimeeritud piltide töötlus
- Trailing slashes

## Tugi

Kui on küsimusi või probleeme:
1. Kontrolli `npm run build` errori
2. Vaata Vercel deployment logisid
3. Kontrolli faili struktuuri

---

**Õnne soovime Free to Hang äpiga! 🎉** 