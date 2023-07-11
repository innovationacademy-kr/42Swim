# Build the app
FROM node:19-alpine as build

# Copy the package.json and yarn.lock files
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the files
COPY . .

# Build the app
RUN sync && yarn build

# Run the app with nginx
FROM nginx:alpine


# Copy the build files to the nginx html directory
COPY --from=build /dist /usr/share/nginx/html

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]