# Use official Node.js image as the base image
FROM node:14-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY Frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY Frontend ./

# Build the React app
RUN npm run build

# Use Nginx as the base image for serving the application
FROM nginx:alpine

# Copy the built React app to the Nginx public directory
# COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
# EXPOSE 3000


# Copy custom nginx configuration
COPY /Frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React app to the Nginx public directory
COPY --from=build /app/build /usr/share/nginx/html





# COPY /Frontend/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80


# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
