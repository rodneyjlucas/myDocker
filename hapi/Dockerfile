FROM node:12-alpine

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code

# try to save some time by using the lock file durin npm ci
COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .

CMD ["node", "index.js"]