# ============================
# STAGE 1: Builder
# ============================
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

# ============================
# STAGE 2: Production
# ============================
FROM node:18-alpine AS production

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV FIREBASE_PROJECT_ID=api-node-480420

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/ ./  

EXPOSE 3000

CMD ["node", "index.js"]