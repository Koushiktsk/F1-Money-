# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose the app port
EXPOSE 5000

# Start command
CMD ["node", "app.js"]