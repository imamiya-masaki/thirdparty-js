FROM node:20.11.1-alpine

WORKDIR /usr/src/app

COPY . .
RUN corepack enable pnpm
RUN pnpm install
RUN pnpm build

ENV PORT 8000
EXPOSE 8000

ENTRYPOINT ["pnpm"]
CMD ["start"]