# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

# --- STAGE 1: Final Build Image ---

ARG NODE_VERSION=26.5.0
FROM node:${NODE_VERSION}-alpine as frontendbuilder

# Set working directory for all build stages.
WORKDIR /app

# Copy lockfiles
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- STAGE 2: Final Production Image ---
FROM node:${NODE_VERSION}-alpine as frontendrunner
WORKDIR /app
# Copy the built frontend assets and backend server into the final image
COPY --from=frontendbuilder /app/package*.json ./
COPY --from=frontendbuilder /app/dist ./
RUN npm ci

EXPOSE 5174
CMD ["npm", "run", "app"]



