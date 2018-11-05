FROM node:8.9-alpine

# Create a work directory and copy over our dependency manifest files.
RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY ["package.json", "package-lock.json*", "./"]

# If you're using yarn:
#  yarn build
RUN npm install --silent && mv node_modules ../

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000

FROM nginx:1.13.9-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]