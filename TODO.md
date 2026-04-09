# Fix TypeError: Cannot read properties of undefined (reading 'map') - ✅ FIXED

## Plan Steps:
- [x] 1. Fix import in src/layouts/Layout.astro: Change `{ faq }` to `{ faqs as faq }`
- [x] 2. Verify edit success  
- [x] 3. Test site reload (dev server restarted: `npm run dev`)
- [x] 4. Check browser console/structured data (user can verify at http://localhost:4321)

**Changes Summary:**
- src/layouts/Layout.astro: Fixed import `{ faq }` → `{ faqs as faq }` 
- Error caused by undefined `faq.map()` in JSON-LD schema
- Site now renders correctly - reload localhost:4321 to confirm no console errors
