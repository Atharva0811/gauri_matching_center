# 📋 Gauri Matching Center - Project Summary

## 🎯 Project Context

**Gauri Matching Center** is a premium e-commerce storefront for a Pune-based ethnic wear business specializing in:
- **Dress Materials** (Silk, Chanderi, Banarasi fabrics)
- **Matching Accessories** (Latkans, Zari borders, finishing touches)
- **Tailoring Services** (Blouse stitching, Anarkali suits, Fall & Pico)

The business operates primarily through **WhatsApp orders** with same-day delivery in Pune, targeting local customers who value traditional craftsmanship and premium quality.

---

## 🏗️ Architecture

### **Tech Stack**
```
Frontend:        Next.js 15.1.0 (App Router)
Styling:         Tailwind CSS + Custom CSS (Silk textures, gradients)
CMS:             Sanity Studio v5.7.0
Image Handling:  Sanity CDN + Next.js Image Optimization
Deployment:      Cloudflare Pages (Edge Runtime)
Payments:        UPI (via WhatsApp)
Analytics:       Porter fulfillment tracking
```

### **System Architecture**
```
┌─────────────────────────────────────────────────────┐
│                  User Browser                        │
│          (localhost:3000 / Cloudflare Pages)        │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│              Next.js App Router                      │
│  ┌──────────────────────────────────────────────┐  │
│  │  Pages (SSR/ISR - 60s revalidation)          │  │
│  │  • / (Homepage - Latest 3 dresses)           │  │
│  │  • /dresses (All dress materials)            │  │
│  │  • /accessories (Matching items)             │  │
│  │  • /tailoring (Stitching services)           │  │
│  │  • /studio (Sanity CMS - Edge Runtime)       │  │
│  └──────────────────────────────────────────────┘  │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│           Sanity Headless CMS                        │
│  Project ID: i1awouo7                               │
│  Dataset: production                                │
│  ┌──────────────────────────────────────────────┐  │
│  │  Content Types:                               │  │
│  │  • Dress (name, image, price, description)   │  │
│  │  • Accessory (name, image, price)            │  │
│  │  • Tailoring (serviceName, basePrice, time)  │  │
│  │  • Customization (options for dresses)       │  │
│  └──────────────────────────────────────────────┘  │
└──────────────────┬──────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────┐
│              WhatsApp Business API                   │
│  Phone: +91 9322264199                              │
│  ┌──────────────────────────────────────────────┐  │
│  │  Order Payload:                               │  │
│  │  • Product details                            │  │
│  │  • Delivery time (9 AM logic)                │  │
│  │  • Porter fulfillment note                   │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
```

---

## 🎨 Design System

### **Brand Identity**
- **Primary Colors**: Saffron/Orange (#EA580C) + Gold accents
- **Typography**: Black font-weight (900), italic tracking-tighter for headers
- **Theme**: "Pune Heritage" - Traditional yet modern
- **Visual Elements**: 
  - Silk texture overlays
  - Gradient hero sections
  - Glassmorphism effects
  - Micro-animations on hover

### **Key Design Principles**
1. **No Purple/Violet** (Purple Ban rule from frontend-specialist)
2. **Premium First Impression** (Bold, uppercase headers)
3. **Trust Signals** (Same-day delivery, No returns policy, Secure UPI)
4. **Empty States** (Elegant "Coming Soon" messages with emojis)

---

## 🚀 MVP Features

### **Core Functionality**
✅ **Product Catalog**
- Real-time inventory from Sanity CMS
- Image optimization via Sanity CDN
- ISR (Incremental Static Regeneration) - 60s cache
- Empty state handling for zero inventory

✅ **WhatsApp Checkout**
- One-click "Order on WA" buttons
- Pre-filled message with product details
- Delivery time calculation (9 AM next day logic)
- Porter fulfillment integration

✅ **Content Management**
- Sanity Studio at `/studio` route
- Edge Runtime compatibility (MessageChannel polyfill)
- Real-time preview in dev mode
- Manual redeploy for production updates

✅ **Business Logic**
- Same-day Pune delivery (if ordered before 9 AM)
- No returns on customized orders
- Sold-out state management
- Professional tailor pricing display

### **Pages & Routes**
```
/                    → Homepage (Hero + Latest 3 dresses)
/dresses             → Full dress material catalog
/accessories         → Matching center items
/tailoring           → Stitching services with pricing
/studio              → Sanity CMS (password-protected)
```

---

## 📂 Project Structure

```
gauri_matching_center/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Homepage (async, ISR)
│   │   ├── dresses/page.tsx            # Dresses catalog
│   │   ├── accessories/page.tsx        # Accessories catalog
│   │   ├── tailoring/page.tsx          # Tailoring services
│   │   ├── studio/[[...index]]/page.tsx # Sanity Studio (Edge)
│   │   ├── layout.tsx                  # Root layout
│   │   └── globals.css                 # Global styles + animations
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Header.tsx              # Navigation
│   │   │   ├── Footer.tsx              # Footer with policies
│   │   │   └── Button.tsx              # Reusable button
│   │   └── store/
│   │       └── ProductCard.tsx         # Product display card
│   ├── lib/
│   │   ├── types.ts                    # TypeScript interfaces
│   │   ├── whatsapp.ts                 # WhatsApp URL generator
│   │   └── delivery.ts                 # 9 AM delivery logic
│   ├── sanity/
│   │   ├── client.ts                   # Sanity client config
│   │   └── schemas/
│   │       ├── dress.ts                # Dress schema
│   │       ├── accessory.ts            # Accessory schema
│   │       ├── tailoring.ts            # Tailoring schema
│   │       └── customization.ts        # Customization options
│   └── sanity.config.ts                # Studio configuration
├── .env.local                          # Environment variables
├── next.config.mjs                     # Next.js config (Sanity CDN)
├── tailwind.config.js                  # Tailwind customization
├── package.json                        # Dependencies
└── .npmrc                              # legacy-peer-deps=true
```

---

## 🔄 Workflow

### **Development Workflow**
1. **Local Development**: `npm run dev` (Port 3000)
2. **Add Products**: Navigate to `http://localhost:3000/studio`
3. **Publish Content**: Click "Publish" in Sanity Studio
4. **Test Orders**: Click "Order on WA" → Verify WhatsApp payload
5. **Build**: `npm run build` (Verifies production readiness)

### **Deployment Workflow**
1. **Commit Changes**: Push to GitHub repository
2. **Cloudflare Auto-Build**: Triggered on git push
3. **Build Command**: `npm run pages:build` (Vercel adapter)
4. **Output**: `.vercel/output` directory
5. **Deploy**: Cloudflare Pages serves static + edge functions

### **Content Update Workflow**
```
Sanity Studio (Add/Edit Product)
         ↓
   Click "Publish"
         ↓
   [Option A] Wait 60s (ISR cache expires)
   [Option B] Trigger Cloudflare redeploy
         ↓
   New content live on website
```

---

## 🔐 Environment Variables

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=i1awouo7
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=sk0IuZcdg6oKl6Nuw6BC18Er9rmCOnhx...
WHATSAPP_PHONE_NUMBER=919322264199
```

---

## 🐛 Known Issues & Solutions

### **Issue 1: New Sanity content not appearing**
- **Cause**: ISR cache (60s) or static build snapshot
- **Solution**: Wait 60s or trigger Cloudflare redeploy

### **Issue 2: Sanity images not loading**
- **Cause**: `cdn.sanity.io` not whitelisted in `next.config.mjs`
- **Solution**: Added to `remotePatterns` ✅

### **Issue 3: Studio crashes on Edge Runtime**
- **Cause**: `MessageChannel` missing in Cloudflare Workers
- **Solution**: Added polyfill in `studio/[[...index]]/page.tsx` ✅

### **Issue 4: Cloudflare build fails (dependency conflicts)**
- **Cause**: React 19 vs Sanity's React 18 peer deps
- **Solution**: Added `.npmrc` with `legacy-peer-deps=true` ✅

---

## 📊 Performance Metrics

- **ISR Cache**: 60 seconds (configurable)
- **Image Optimization**: Sanity CDN + Next.js Image
- **Build Time**: ~2-3 minutes on Cloudflare
- **Lighthouse Score Target**: 90+ (Performance, SEO, Accessibility)

---

## 🎯 Business Goals

1. **Reduce WhatsApp Friction**: Pre-filled messages with product details
2. **Build Trust**: Clear policies (No returns, Same-day delivery)
3. **Premium Positioning**: High-end design vs competitors
4. **Local Focus**: Pune-specific delivery messaging
5. **Inventory Management**: Real-time stock via Sanity

---

## 🔧 Quick Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)

# Production Build
npm run build            # Build for production
npm run start            # Start production server

# Cloudflare Pages
npm run pages:build      # Build for Cloudflare
npm run pages:deploy     # Deploy to Cloudflare (local)

# Linting
npm run lint             # Run ESLint
```

---

## 📞 Support & Contact

- **Business Phone**: +91 9322264199
- **Sanity Project**: [https://www.sanity.io/manage](https://www.sanity.io/manage)
- **Studio URL**: `http://localhost:3000/studio` (local) or `https://your-domain.pages.dev/studio` (production)

---

**This is a production-ready MVP** for a local ethnic wear business transitioning from pure WhatsApp commerce to a hybrid model with a professional web presence. The architecture prioritizes **speed, trust, and ease of content management** while maintaining the personal touch of WhatsApp-based ordering. 🧵✨
