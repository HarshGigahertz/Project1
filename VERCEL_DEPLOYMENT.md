# Vercel Deployment Guide for PIGMIL.DIY

## Overview
This guide explains how to deploy your PIGMIL.DIY application to Vercel.

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub repository connected to Vercel
- All required API keys configured

## Deployment Steps

### 1. Connect GitHub Repository to Vercel
1. Go to https://vercel.com/import
2. Select "Project from Git Repository"
3. Connect your GitHub repository (HarshGigahertz/Project1)

### 2. Configure Environment Variables
In your Vercel project settings, add the following environment variables:

**LLM API Keys:**
- `GROQ_API_KEY` - Groq API key (optional)
- `OPENAI_API_KEY` - OpenAI API key (optional)
- `ANTHROPIC_API_KEY` - Anthropic Claude API key (optional)
- `GOOGLE_GENERATIVE_AI_API_KEY` - Google Generative AI key (optional)
- `MISTRAL_API_KEY` - Mistral API key (optional)
- `COHERE_API_KEY` - Cohere API key (optional)
- `HuggingFace_API_KEY` - HuggingFace API key (optional)
- `OPEN_ROUTER_API_KEY` - OpenRouter API key (optional)
- `DEEPSEEK_API_KEY` - DeepSeek API key (optional)
- `XAI_API_KEY` - xAI API key (optional)
- `PERPLEXITY_API_KEY` - Perplexity API key (optional)
- `TOGETHER_API_KEY` - Together AI API key (optional)
- `HYPERBOLIC_API_KEY` - Hyperbolic API key (optional)

**Custom Base URLs (for local models):**
- `OLLAMA_API_BASE_URL` - Ollama base URL (optional, e.g., http://127.0.0.1:11434)
- `OPENAI_LIKE_API_BASE_URL` - OpenAI-like API base URL (optional)
- `LMSTUDIO_API_BASE_URL` - LM Studio base URL (optional, e.g., http://127.0.0.1:1234)
- `TOGETHER_API_BASE_URL` - Together AI base URL (optional)
- `HYPERBOLIC_API_BASE_URL` - Hyperbolic base URL (optional)

**Other:**
- `OPENAI_LIKE_API_KEY` - OpenAI-like API key (optional)
- `AWS_BEDROCK_CONFIG` - AWS Bedrock config JSON (optional)
- `VITE_LOG_LEVEL` - Log level for debugging (optional, default: debug)
- `DEFAULT_NUM_CTX` - Context size for local models (optional)

### 3. Build Configuration
The vercel.json file already specifies:
- **Build Command:** `pnpm run build`
- **Output Directory:** `./build/client`
- **Install Command:** `pnpm install`
- **Framework:** Remix

### 4. Deploy
Once configured, Vercel will automatically:
1. Install dependencies using pnpm
2. Build the project using Remix Vite build
3. Deploy the application

**Manual deployment:**
```bash
npm install -g vercel
vercel login
vercel deploy --prod
```

### 5. Monitoring
After deployment:
- Check build logs in Vercel dashboard
- Monitor runtime errors in Functions
- Verify environment variables are properly set
- Test API endpoints with your LLM provider keys

## Important Notes

⚠️ **Security:**
- Never commit `.env` files to GitHub
- Always use Vercel's environment variable settings
- Rotate API keys regularly
- Keep your LLM provider credentials secure

⚠️ **Performance:**
- Vercel has execution timeout limits (10s for hobby plan, 60s for pro)
- Large context sizes (DEFAULT_NUM_CTX) may exceed timeouts
- Consider adjusting context size based on your plan

⚠️ **Compatibility:**
- This deployment is optimized for Node.js based LLM providers
- Local LLM endpoints (Ollama, LM Studio) won't work from Vercel (firewall restrictions)
- Use cloud-hosted or API-based providers instead

## Troubleshooting

**Build fails with "pnpm not found":**
- Vercel should auto-detect pnpm from package.json
- Ensure packageManager is set in package.json

**Deployment timeout:**
- Reduce DEFAULT_NUM_CTX value
- Optimize build process
- Check for large dependencies

**Environment variables not working:**
- Verify variable names match exactly
- Redeploy after adding/changing variables
- Check Vercel Function settings

**API requests fail:**
- Ensure API keys are valid
- Check if provider allows requests from Vercel IP ranges
- Verify base URLs are correct

## Support
For issues specific to:
- **Vercel:** https://vercel.com/support
- **Remix:** https://remix.run/docs
- **PIGMIL.DIY:** Check the main README.md

## Next Steps
After successful deployment:
1. Update your DNS settings if using a custom domain
2. Set up continuous deployment from GitHub
3. Configure analytics and monitoring
4. Document your deployment configuration
5. Keep environment variables updated
