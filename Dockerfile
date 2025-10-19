# Build stage
FROM node:lts-alpine AS build

# Install Hugo extended version 0.151.2
RUN apk add --no-cache wget libc6-compat libstdc++
RUN ARCH=$(uname -m) && \
    if [ "$ARCH" = "aarch64" ]; then HUGO_ARCH="arm64"; else HUGO_ARCH="amd64"; fi && \
    wget -O hugo.tar.gz https://github.com/gohugoio/hugo/releases/download/v0.151.2/hugo_extended_0.151.2_linux-${HUGO_ARCH}.tar.gz && \
    tar -xzf hugo.tar.gz && \
    chmod +x hugo && \
    mv hugo /usr/local/bin/ && \
    rm hugo.tar.gz && \
    hugo version

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build TailwindCSS
#RUN npx tailwindcss -i ./assets/css/styles.css -o ./assets/css/site.css --minify

# Build Hugo site
RUN hugo --minify

# Production stage
FROM nginx:alpine

# Copy built site from build stage
COPY --from=build /app/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
