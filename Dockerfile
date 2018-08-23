FROM node:7

WORKDIR /TwitterDev

ADD . /TwitterDev

CMD ["npm", "install"]

EXPOSE 3000

CMD ["npm", "start"]