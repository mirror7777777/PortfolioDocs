# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

# --- STAGE 1: Final Build Image ---

FROM node:26-alpine as frontendbuilder

# Set working directory for all build stages.
WORKDIR /usr/src/app

# Copy lockfiles
COPY package*.json ./
RUN npm ci --include=dev
COPY . dist

# --- STAGE 2: Final Production Image ---
FROM node:26-alpine as frontendrunner
WORKDIR /usr/src/app
# Copy the built frontend assets and backend server into the final image
COPY --from=frontendbuilder /usr/src/app/package*.json ./
COPY --from=frontendbuilder /usr/src/app/dist ./dist
RUN npm ci --include=dev

EXPOSE 5174
CMD ["npm", "run", "dev"]