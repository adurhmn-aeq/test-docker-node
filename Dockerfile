FROM node:18

WORKDIR /app

COPY package.json .

RUN ["npm", "install"]

ARG TEST_ENV_BUILD
ARG PORT_BUILD

ENV TEST_ENV $TEST_ENV_BUILD
ENV PORT $PORT_BUILD
ENV TEST_ENV_NO_ARG testenvnoarg_default

COPY index.mjs .

CMD ["npm", "start"]