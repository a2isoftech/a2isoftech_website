# A2I Softech website

Single-page static marketing site for A2I Softech, a UK IT consultancy. Plain HTML/CSS/JS —
no build step, no frameworks, no package.json.

## Files

- `index.html` — the whole site (nav, hero, services, skills, about, portfolio, testimonials,
  compliance/trust, contact)
- `style.css` — all styling: navy/slate palette with a teal accent, mobile-first breakpoints
- `script.js` — mobile nav toggle, scroll-reveal via IntersectionObserver, contact form handler
- `privacy.html` — standalone privacy policy page
- `CNAME` — GitHub Pages custom domain file, must contain exactly `a2isoftech.com`
- `skills_and_projects.pdf` — source CV used to write the skills/portfolio copy; gitignored,
  not published

## Deployment

Hosted on **GitHub Pages**, served from the `master` branch root, under the `a2isoftech`
GitHub account (repo is public — required for Pages on a free personal account). Pushing to
`master` redeploys automatically within a minute or two. Custom domain `a2isoftech.com` is
pointed at GitHub Pages via GoDaddy DNS (4 A records at `@` to GitHub's IPs, plus a CNAME for
`www` to `a2isoftech.github.io`).

There is no contact-form backend. The form in `index.html`/`script.js` builds a `mailto:` link
to `a2isoftech@gmail.com` and opens the user's email client — this is intentional, not a
missing feature.

## Content notes

- Copy is written in company voice ("we/our A2I Softech"), not first-person solo-contractor
  voice — keep it that way in any future edits.
- Portfolio case studies are anonymised generalisations of real project experience from the CV;
  no real client/company/project names should be reused verbatim.
- IR35 status is intentionally not mentioned anywhere on the site — do not reintroduce it
  unless asked.
- Remaining placeholders to eventually replace with real values: ICO registration number,
  professional indemnity insurer name (both in the "Working with us" trust section and
  `privacy.html`).

## Repo access

Only the `a2isoftech` account has write/push access to this repo. It is intentionally public
so the site can be served by GitHub Pages, but that only grants read/clone/fork access to
others — forks are independent copies and can never modify this repo directly.
