FROM node:alpine
ENV NODE_ENV=production
WORKDIR /src/app/usr
COPY package*.json ./
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 5000
RUN chown -R node /src/app/usr
USER node
CMD ["npm","start"]

