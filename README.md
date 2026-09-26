# IIT Bombay Techfest 2026 — Cyborg Landing Page

A responsive, cyborg-themed landing page for IIT Bombay Techfest 2026. The experience is built as a near-future event interface: live system status, orbital signal graphics, arena pathways, participation protocol, schedule, and an interactive registration modal.

## Run locally

From the workspace root:

```bash
pnpm install
PORT=4173 BASE_PATH=/ pnpm --filter @workspace/techfest-cyborg run dev
```

The original Replit project uses the artifact workflow to inject `PORT` and `BASE_PATH` automatically.

## Highlights

- Responsive desktop, tablet, and mobile layouts
- Scroll-triggered reveal motion and hover states
- Mobile navigation with anchor scrolling
- Interactive registration/waitlist modal with success state
- No external image dependencies; the orbital system is CSS-built