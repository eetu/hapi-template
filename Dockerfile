# Build herokulike node environment replace base image if planning to run service somewhere else
FROM heroku/heroku:16

ENV PORT 3000

ENV NODE_ENGINE 8.9.4

ENV PATH /app/heroku/node/bin:/app/user/node_modules/.bin:$PATH

RUN mkdir -p /app/heroku/node /app/.profile.d
WORKDIR /app/user

# Install node
RUN curl -s https://s3pository.heroku.com/node/v$NODE_ENGINE/node-v$NODE_ENGINE-linux-x64.tar.gz | tar --strip-components=1 -xz -C /app/heroku/node

# Export the node path in .profile.d
RUN echo "export PATH=\"/app/heroku/node/bin:/app/user/node_modules/.bin:\$PATH\"" > /app/.profile.d/nodejs.sh
