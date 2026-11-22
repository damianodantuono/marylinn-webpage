# GEMINI.md — MAR STUDIO by Marylin Casà

## 1. Panoramica Progetto
Sito vetrina professionale per **MAR STUDIO by Marylin Casà**, studio specializzato in dermopigmentazione (PMU), laminazione, microblading, lentiggini semipermanenti, piercing, gemme dentali e formazione (Academy).
- **Obiettivo V1:** Sito vetrina ad alta conversione ottimizzato per traffico proveniente da Instagram (mobile-first) e SEO locale.
- **Gestione Pagamenti in V1:** Nessun gateway di pagamento o carrello e-commerce attivo in questa fase. La sezione Shop (Sieri) e le Gift Card sono presenti come vetrina con CTA diretta verso WhatsApp per l'ordine/prenotazione.

## 2. Stack Tecnologico e Architettura
- **Framework:** Astro (modalità statica SSG, zero runtime JS superfluo).
- **Styling:** Tailwind CSS.
- **Linguaggio:** TypeScript strict per dati e configurazioni.
- **Interattività:** Solo JavaScript vanilla leggero (`<script>` nativi Astro con `IntersectionObserver`) per animazioni numeri allo scroll, filtri galleria e menu mobile. Evitare librerie pesanti.
- **Centralizzazione Dati:** Impostazioni studio e contenuti devono risiedere nelle Astro Content Collections (`src/content/`) ed essere validati in `src/content/config.ts`. La configurazione Pages CMS (`.pages.yml`) deve mantenere modificabili le collezioni e caricare le immagini in `public/images/uploads`.

## 3. Identità Visiva e UX (Beauty Luxury & Editorial)
- **Target:** Prevalentemente utenti mobile da Instagram Bio. Layout mobile-first impeccabile.
- **Palette Colori:** Sfondo caldo avorio/crema (`#FAF8F5`), superfici secondarie sabbia/tortora chiaro (`#F2ECE4`), testo principale antracite morbido (`#1F1D1B`), accenti oro satinato / nude caldo (`#B89778` / `#C5A880`).
- **Tipografia:** Abbinamento editoriale con font Serif elegante per i titoli (`Cormorant Garamond` o `Playfair Display` via Google Fonts) e Sans-serif pulito e leggibile per testi e UI (`Plus Jakarta Sans` o `Inter`).
- **Lingua:** Tutti i testi visibili all'utente devono essere in **italiano** naturale, curato e orientato al settore estetico/beauty.

## 4. Sitemappa e Specifiche delle Pagine

### `/` — Home Page
1. **Hero Section:** Titolo d'impatto ("MAR STUDIO by Marylin Casà"), sottotitolo, CTA primaria ("Prenota una consulenza") e placeholder immagine/video hero full-bleed.
2. **Contatori Animati (stile Ylenia Cammareri):** Sezione con numeri chiave (es. anni di esperienza, trattamenti eseguiti, certificazioni/premi, allieve formate) che si animano progressivamente al primo ingresso nel viewport (`IntersectionObserver` + `requestAnimationFrame`).
3. **Anteprima Trattamenti (Catalogo):** Griglia con card per ciascuna macro-categoria che rimanda alla pagina dedicata.
4. **Anteprima Prima & Dopo:** Carosello/griglia compatta con link alla pagina galleria completa.
5. **Sezione Recensioni:** Card con recensioni clienti (stelle, testo, nome, trattamento).
6. **Blocco "Dove Sei" & Contatti Rapidi:** Indirizzo ben visibile, mappa leggera e pulsante diretto verso Google Maps.

### `/chi-sono` — Su di Me
- Presentazione personale e professionale di Marylin Casà, filosofia dello studio e percorso.
- **Video Descrizione Studio (16:9 senza sottotitoli):** Contenitore responsive con aspect-ratio fisso `aspect-video` (16:9), poster frame di anteprima e player video HTML5 pulito (`playsinline`, senza tracce `<track>`/sottotitoli).
- **Galleria Gare e Premi:** Sezione dedicata alle foto professionali delle competizioni e ai premi/riconoscimenti vinti.

### `/trattamenti` (Hub) + Pagine Dedicate SEO
Creare **rotte separate** (non semplici tab JS) per massimizzare l'indicizzazione su Google per ciascun servizio:
- `/trattamenti/pmu` — PMU (Sopracciglia, Labbra e Occhi)
- `/trattamenti/microblading` — Microblading
- `/trattamenti/lentiggini` — Lentiggini (Freckles)
- `/trattamenti/laminazione` — Laminazione (Ciglia e Sopracciglia)
- `/trattamenti/piercing` — Piercing *(ottimizzare meta title, H1 e testi per ricerca locale SEO)*
- `/trattamenti/gemme-dentali` — Gemme Dentali

**Struttura obbligatoria per ogni pagina trattamento:**
1. Copertina dedicata con spazio per la foto di Marylin abbinata al trattamento.
2. Spiegazione dettagliata del trattamento, durata, benefici e FAQ essenziali.
3. Mini-galleria lavori della categoria.
4. **Blocco Conversione Ricorrente (CTA):**
   - Pulsante primario **"Prenota ora"** (che porta a `/contatti` o apre WhatsApp con messaggio precompilato specifico per quel trattamento).
   - Banner/Card grafico **"Seguimi su Instagram"** con anteprima feed/profilo e link diretto al profilo IG.

### `/prima-e-dopo` — Galleria Risultati (Foto e Video)
- Filtri interattivi per categoria (Tutti, PMU, Microblading, Lentiggini, Laminazione, Piercing, Gemme).
- Supporto misto per **foto Prima/Dopo** (affiancate o con badge Prima/Dopo) e **video Prima/Dopo** (con `preload="none"` / lazy loading per non rallentare il caricamento della pagina).

### `/corsi` — Academy & Formazione (stile Silvia Soave)
- Presentazione dei corsi professionali tenuti da Marylin.
- Schede corsi con programma, durata, a chi è rivolto e kit incluso.
- **Sezione Attestati:** Spazio grafico dedicato a mostrare gli attestati ufficiali rilasciati a fine corso.
- CTA finale per richiedere date, programmi PDF e costi via form o WhatsApp.

### `/shop-gift-card` — Sieri & Gift Card (Vetrina V1)
- **Sieri & Prodotti Cura:** Griglia prodotti con foto, descrizione, benefici, prezzo indicativo e pulsante **"Richiedi su WhatsApp"** (nessun carrello/pagamento online).
- **Gift Card MAR STUDIO:** Card grafica elegante (es. tagli da 50€, 100€, 150€ o trattamento personalizzato) con pulsante **"Regala / Prenota Gift Card su WhatsApp"**.

### `/contatti` — Contatti & Dove Sei
- **Dove Sei (prioritario in alto):** Indirizzo completo ben visibile, cartina incorporata (`<iframe>` con `loading="lazy"`) e pulsante ad alta visibilità **"Apri su Google Maps"** (`https://www.google.com/maps/search/?api=1&query=MAR+STUDIO+Marylin+Casa`).
- **Tasto WhatsApp diretto:** Pulsante per avviare subito la chat per info e appuntamenti.
- **Form Ricontatto Email:** Form accessibile (Nome, Email, Telefono, Servizio di interesse, Messaggio) predisposto per **Web3Forms** (action configurabile tramite la chiave nelle impostazioni studio in `src/content/studio/settings.json`, zero backend).

## 5. Componenti Ricorrenti Globali
- `Navbar.astro`: Logo testuale/monogramma elegante, menu responsive con dropdown/link diretti ai trattamenti, link rapidi.
- `CtaConversionBlock.astro`: Componente riutilizzabile da inserire in fondo ai trattamenti e nelle pagine chiave (CTA "Prenota ora" + box grafico "Seguimi su IG").
- `WhatsAppFloat.astro`: Pulsante flottante in basso a destra con link `https://wa.me/...` e messaggio precompilato personalizzabile per pagina.
- `AnimatedStats.astro`: Componente contatori numerici animati allo scroll.
- `Footer.astro`: Riepilogo navigazione, indirizzo studio, orari, link Instagram, WhatsApp, P.IVA placeholder e link Privacy/Cookie Policy.

## 6. Regole di Sviluppo e Qualità
- Tutte le immagini devono avere attributi `alt` descrittivi e `loading="lazy"` (tranne l'immagine hero above-the-fold).
- Ogni pagina deve impostare `<title>` e `<meta name="description">` dinamici e univoci tramite il layout principale `BaseLayout.astro`.
- Usare placeholder visivi curati (es. SVG/gradienti eleganti o immagini placeholder locali in `public/images/placeholders/`) in modo che il sito sia subito navigabile, esteticamente completo e privo di immagini rotte prima dell'inserimento degli scatti reali.