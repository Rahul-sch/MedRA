# MedRa Pre-Order Landing Page

A modern, light-themed pre-order landing page for MedRa - a revolutionary robotic lead shield system designed for interventional radiology and fluoroscopy labs.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Install the additional Tailwind CSS animate plugin:
```bash
npm install tailwindcss-animate
# or
yarn add tailwindcss-animate
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
medra-landing/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & Tailwind directives
├── components/
│   ├── ui/                 # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── accordion.tsx
│   ├── Navbar.tsx          # Fixed navigation with smooth scroll
│   ├── Hero.tsx            # Above-fold hero section
│   ├── Features.tsx        # Feature cards grid
│   ├── SocialProof.tsx     # Testimonials & stats
│   ├── PreorderForm.tsx    # Pre-order waitlist form
│   ├── FAQ.tsx             # Accordion FAQ section
│   └── Footer.tsx          # Footer with links
├── lib/
│   └── utils.ts            # Utility functions
├── tailwind.config.ts      # Tailwind theme configuration
└── package.json
```

## 🎨 Customization

### Colors

The light theme color palette is defined in `tailwind.config.ts`:

- **Accent Color**: Hospital blue (#0B7CCC) - used for CTAs and interactive elements
- **Background**: White (#FFFFFF) with subtle grays for sections
- **Text**: Dark slate for primary, grays for secondary/tertiary

To change the accent color, update the `accent` values in `tailwind.config.ts`.

### Content

1. **Hero Section** (`components/Hero.tsx`):
   - Update headline and sub-heading
   - Replace product image placeholder
   - Modify stats in floating cards

2. **Features** (`components/Features.tsx`):
   - Edit feature cards content
   - Change icons from lucide-react library
   - Adjust grid layout (currently 4 columns on large screens)

3. **Pre-order Form** (`components/PreorderForm.tsx`):
   - Connect form submission to your backend/email service
   - Update form fields as needed
   - Modify benefits list

4. **FAQ** (`components/FAQ.tsx`):
   - Add/remove questions in the `faqs` array
   - Update contact information

### Images

Place product images in the `public/images/` directory and update references:

- Hero image: `components/Hero.tsx` (replace placeholder)
- Logo: Update in `components/Navbar.tsx` and `components/Footer.tsx`
- Trust badges: Add to `components/Hero.tsx`

## 🔧 Features

- ✅ Fully responsive design (mobile-first)
- ✅ Smooth scroll navigation
- ✅ Animated sections on scroll
- ✅ Accessible components (WCAG AA compliant)
- ✅ SEO optimized with Next.js metadata
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for rapid styling
- ✅ Shadcn UI components

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Any Node.js hosting platform

## 📝 Form Integration

The pre-order form currently logs to console. To integrate with a backend:

1. **Option A - Email Service (e.g., SendGrid, Mailgun)**:
   ```typescript
   // In components/PreorderForm.tsx
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault()
     const response = await fetch('/api/preorder', {
       method: 'POST',
       body: JSON.stringify(formData),
     })
   }
   ```

2. **Option B - Form Service (e.g., Formspree, Basin)**:
   - Update form action to point to service endpoint
   - Add hidden fields as needed

3. **Option C - CRM Integration (e.g., HubSpot, Salesforce)**:
   - Use their API to create leads/contacts

## 🔍 SEO Optimization

Update metadata in `app/layout.tsx`:
- Title
- Description
- Keywords
- Open Graph tags
- Favicon (add to `public/`)

## 📄 License

Proprietary - MedRa 2025

## 🤝 Support

For questions or issues, contact: info@medra.example.com
