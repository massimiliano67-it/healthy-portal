# Healthy Portal

English-language, Lusion.co-inspired creative-studio rebrand and multi-level reconstruction of the social benefits portal (85 static pages across Home, Level 1 category hubs, Level 2 product/simulation pages, and audience portals), served by a hardened zero-dependency Node.js static server.

## Live Deployment (Google Cloud Run)
- **URL**: https://healthy-portal-551741427771.us-central1.run.app/
- **Project**: `gemini-enterprise-demo-485114` (`us-central1`)

## Local Development

```bash
npm start
# Open http://127.0.0.1:8080
```

## Regenerating Pages

```bash
npm run generate
```

## Cloud Run Deployment

```bash
gcloud run deploy healthy-portal \
  --source=. \
  --region=us-central1 \
  --project=gemini-enterprise-demo-485114 \
  --set-env-vars="BIND_HOST=0.0.0.0" \
  --allow-unauthenticated
```
