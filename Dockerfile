FROM stefanscherer/node-windows:pure

WORKDIR /TwitterDev

ADD . /TwitterDev

CMD ["npm", "install"]

EXPOSE 3000

CMD ["npm", "start"]