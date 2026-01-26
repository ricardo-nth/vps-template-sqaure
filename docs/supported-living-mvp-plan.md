# Supported Living MVP Template - Smallest Startup Version

## 🎯 Overview
Minimal viable template for new Supported Living startups in CQC registration. Focus: simple nav, service-focused, CQC-compliant feedback. No testimonials/CQC ratings yet.

## 📄 Pages (5 core)
1. **`/` (index.astro)**: Hero (Supported Living focus), services teaser → [/services], approach teaser → [/our-service-model], CTA → [/contact]
2. **`/about.astro`**: Company story, values, mission intro, **TeamSection** component
3. **`/services.astro`**: Supported Living services sections (Learning Disabilities, Mental Health Support, Physical Disabilities, Older Adults, Autism)
4. **`/our-service-model.astro`**: Ethos, unique approach, care model, CQC registration process
5. **`/contact.astro`**: Contact details/phone/map, **careers section** (jobs list), **Compliments & Complaints** feedback form/link (CQC req)

## 🧭 Navigation Structure
```
Header:
├── Logo → /
├── About → /about
├── Services → /services
├── Our Service Model → /our-service-model
└── Contact → /contact
```
- No "Home" button (logo suffices)
- Mobile-friendly dropdown if needed later

## 🗺️ Site Architecture (Mermaid)

```mermaid
graph TD
    Home[/] --> About[/about + Team]
    Home --> Services[/services<br/>Learning Disab<br/>Mental Health<br/>Physical Disab<br/>Older Adults]
    Home --> Model[/our-service-model<br/>Ethos Values<br/>CQC Process]
    Home --> Contact[/contact<br/>Details Careers<br/>Feedback]
    About -.-> Team[Team Bios]
    Services -.-> SL[Supported Living Details]
    Contact -.-> Careers[Job Vacancies]
    Contact -.-> Feedback[CQC Compliments<br/>Complaints Form]
```

## 🔧 Implementation Details (follow src/pages/agents.md)
- **All pages**: `SiteLayout` + custom `metadata` (title: "Page - Healthcare", desc 150-160ch, schema: WebPage/Service)
- **Styling**: Semantic tokens (`bg-card`, `text-foreground`, `primary` etc.)
- **Structure**: `<section class="bg-background py-16">`, `max-w-6xl mx-auto px-4`
- **Icons**: Tabler via Icon.astro (e.g., tabler:users-group for team)
- **Accessibility**: H1-H3 hierarchy, alt text, ARIA
- **SEO**: Unique desc/keywords for Supported Living UK

### Page-Specific
- **About**: Story + values list + TeamSection (reuse existing)
- **Services**: Grid/section per service type w/ descriptions, benefits, CTA to contact
- **Service Model**: Why us points (reuse WhyChooseUs?), CQC journey
- **Contact**: Phone/email/map, careers jobs table/list, dedicated feedback section/form placeholder

## 📝 Refactors
- **Header.astro**: Update `navLinks` array to match above (remove #anchors)
- **Homepage components**:
  | Component | Current | New |
  |-----------|---------|-----|
  | ServicesOverview | #services | /services |
  | WhyChooseUs | #why-us | /our-service-model |
  | TeamSection | #team | /about |
  | ContactSection | #contact | /contact |
- **Footer.astro**: Add links to all pages + "Compliments & Complaints" → /contact#feedback + legal stubs (/privacy, /cookies)

## ✅ Quality Gates
- Build: `pnpm build && pnpm preview`
- Links work across site
- Mobile responsive nav
- Healthcare tone: trust, professional, accessible
- CQC ready: feedback prominent

## Next: Implementation in code mode