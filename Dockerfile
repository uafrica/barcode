# https://github.com/mhart/alpine-node/
FROM mhart/alpine-node:6.4.0

COPY . /src

WORKDIR /src

RUN npm install

EXPOSE 3030
CMD ["node", "/src/server.js"]
