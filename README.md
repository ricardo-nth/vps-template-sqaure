# Square Healthcare Template

A geometric, structured Astro.js template for healthcare agencies with strong lines and professional feel.

🔗 **Live Demo:** https://vps-template-square.vercel.app

## Features

- Astro 5.x
- Tailwind CSS v4
- TypeScript
- SEO ready
- Professional, structured design system
- Dual-profile preview mode (Supported Living + Domiciliary Care)

## Quick Start

1. Click **Use this template** on GitHub.
2. Clone your new repository.
3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the dev server:

   ```bash
   pnpm dev
   ```

5. Open the local URL shown in the terminal and begin editing content.

## Dual-Profile Preview Mode

This template supports dual-profile preview mode for agencies that want to showcase both Supported Living and Domiciliary Care service offerings on the same canonical URLs.

### Preview Mode (Default)

By default, the template renders both profiles with a toggle control bar:

```bash
pnpm dev
# or
pnpm build
```

### Production Mode - Single Profile Handoff

For production handoff to a single profile, set the environment variables:

**For Supported Living:**
```bash
PUBLIC_CARE_PROFILE_PREVIEW=false PUBLIC_DEFAULT_CARE_PROFILE=supported-living pnpm build
```

**For Domiciliary Care:**
```bash
PUBLIC_CARE_PROFILE_PREVIEW=false PUBLIC_DEFAULT_CARE_PROFILE=dom-care pnpm build
```

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PUBLIC_CARE_PROFILE_PREVIEW` | Enable/disable profile toggle UI | `true` |
| `PUBLIC_DEFAULT_CARE_PROFILE` | Default profile (`supported-living` or `dom-care`) | `supported-living` |

### Content Collections

All page content is stored in Astro content collections at `src/content/`:

- `squareGlobal/` - Global settings (profile summary copy)
- `squareHome/` - Homepage content
- `squareServices/` - Services page content
- `squareComplexCare/` - Complex care service page content
- `squareAbout/` - About page content
- `squareContact/` - Contact page content
- `squareServiceModel/` - Our service model page content

Each collection has `default.yaml` (Supported Living) and `dom-care.yaml` (Domiciliary Care) entries.

## Customization Checklist

- [ ] Update `src/config/site.ts`
- [ ] Replace `[Business Name]` placeholders
- [ ] Add contact details
- [ ] Update services and care model
- [ ] Customize the CQC journey
- [ ] Replace images with your own
- [ ] Update the logo
- [ ] Edit content collections in `src/content/`

## Service Detail Pages

The template includes a detailed service page example with a full CQC journey:

- `src/pages/services/complex-care`

## Project Structure

```text
src/
  components/    Reusable UI components
  config/        Site configuration
  content/       Content collections (YAML)
  layouts/       Layout wrappers
  lib/           Utilities (image registry)
  pages/         Route-based pages
  styles/        Global styles
public/          Static assets
```

## Available Scripts

- `pnpm dev` — Start the development server
- `pnpm build` — Build for production
- `pnpm preview` — Preview the production build

## Need Professional Help?

Get this template professionally customized for your agency:

https://vertexplatformsolutions.com/offers/healthcare-agencies

## Tech Stack

- Astro 5.x
- Tailwind CSS v4
- TypeScript

## License

MIT
