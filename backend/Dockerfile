FROM node:19-alpine

WORKDIR /app/42swim

COPY package.json ./

RUN npm install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
