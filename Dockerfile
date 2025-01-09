ARG ENVIRONMENT=development

FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
COPY --from=builder ./app/dist ./dist
RUN npm pkg delete scripts.prepare
RUN npm ci --production

EXPOSE 3001
CMD ["node", "./dist/server.js"]

FROM node:20-alpine AS dev
WORKDIR /app
ENV NODE_ENV=development
COPY --from=base /app/node_modules ./node_modules
COPY --from=builder /app .
RUN npm install

EXPOSE 3000

CMD ["npx", "tsx", "watch", "src/server/server", "|", "pino-pretty"]
