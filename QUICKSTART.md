# ⚡ Quick Start Guide - AURORA

Get your ultra-premium website running in **5 minutes**!

## 🚀 Fast Setup (3 Commands)

```bash
# 1. Navigate to project
cd "c:/Users/BARYAL LAPTOPS/Downloads/aurora-premium"

# 2. Install dependencies (takes ~2 minutes)
npm install

# 3. Start development server
npm run dev
```

**That's it!** Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
aurora-premium/
├── app/                    # Pages & routes
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
│
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features grid
│   ├── Services.tsx       # Services showcase
│   ├── Stats.tsx          # Statistics
│   ├── Testimonials.tsx   # Testimonials
│   └── CTA.tsx            # Call-to-action
│
├── lib/                   # Utilities
│   └── utils.ts           # Helper functions
│
└── public/                # Static files
```

---

## 🎨 Quick Customization

### 1. Change Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: "hsl(221 83% 53%)",  // Change to your brand color
}
```

### 2. Update Site Name

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Company Name",
  description: "Your description",
};
```

### 3. Change Logo

Edit `components/Header.tsx` (line 45):

```typescript
<span className="text-white font-bold text-xl">Y</span> // Your initial
```

### 4. Update Contact Info

Edit `components/Footer.tsx` (line 60-70):

```typescript
<span>your-email@domain.com</span>
<span>+1 (555) 123-4567</span>
<span>Your City, Country</span>
```

---

## 📝 Common Tasks

### Add a New Page

1. Create folder in `app/`: `app/pricing/`
2. Create `page.tsx` inside it
3. Add to navigation in `components/Header.tsx`

### Add a New Component

1. Create file in `components/`: `components/NewComponent.tsx`
2. Import in your page: `import { NewComponent } from "@/components/NewComponent"`
3. Use it: `<NewComponent />`

### Change Animations

Edit any component file, find the `motion.div` elements:

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}    // Start state
  animate={{ opacity: 1, y: 0 }}     // End state
  transition={{ duration: 0.6 }}     // Animation speed
>
```

---

## 🔧 Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Check code quality
```

---

## 🌐 Deploy in 2 Minutes

### Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Done!** Your site is live.

### Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

---

## 💡 Pro Tips

### Tip 1: Use Dark Mode
Click the sun/moon icon in the header to toggle themes.

### Tip 2: Mobile Testing
Access from your phone: `http://YOUR_COMPUTER_IP:3000`

### Tip 3: Hot Reload
Changes auto-refresh in the browser. No need to restart!

### Tip 4: TypeScript Errors
Hover over red squiggles in VS Code for error details.

### Tip 5: Tailwind Classes
Install "Tailwind CSS IntelliSense" extension in VS Code for autocomplete.

---

## ❓ Troubleshooting

### Problem: Port 3000 is busy
**Solution:** Use a different port
```bash
npm run dev -- -p 3001
```

### Problem: Module not found
**Solution:** Reinstall dependencies
```bash
rm -rf node_modules
npm install
```

### Problem: Build fails
**Solution:** Clear cache
```bash
rm -rf .next
npm run build
```

### Problem: Styles not updating
**Solution:** Restart dev server
```bash
# Press Ctrl+C to stop
npm run dev
```

---

## 📚 Next Steps

1. ✅ Customize colors and branding
2. ✅ Update all content (text, images)
3. ✅ Add your logo and favicon
4. ✅ Configure contact form backend
5. ✅ Set up analytics (Google Analytics)
6. ✅ Test on mobile devices
7. ✅ Run performance tests
8. ✅ Deploy to production

---

## 🎓 Learn More

- **Next.js:** [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion:** [framer.com/motion](https://www.framer.com/motion/)
- **TypeScript:** [typescriptlang.org/docs](https://www.typescriptlang.org/docs/)

---

## 🆘 Need Help?

- 📖 Read `README.md` for detailed documentation
- 📋 Check `FEATURES.md` for complete feature list
- 🛠️ See `SETUP.md` for advanced setup
- 📧 Email: hello@aurora.design

---

**You're all set! Start building your amazing website! 🚀**
