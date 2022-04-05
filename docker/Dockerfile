# pull official base image
FROM node:17-alpine

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# add app
COPY . ./

# start app
EXPOSE 3000
CMD ["yarn", "start"]
