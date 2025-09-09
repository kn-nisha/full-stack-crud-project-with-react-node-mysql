# Stage 1: Development (Optional)
FROM node:18-alpine3.20 as dev
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# 🚫 INTENTIONAL ERROR: Corrupt or delete package-lock.json to break npm install
RUN rm -f package-lock.json && \
    echo "{}" > package-lock.json && \
    echo "💥 Intentionally corrupted package-lock.json to cause npm install failure!"

# Install dependencies — this will now likely fail due to invalid lockfile
RUN npm install

# Define build-time argument for environment variable
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}
