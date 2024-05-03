FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/anonphoenix007/Ragnarok-MD /root/Ragnarok-md

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/Ragnarok-md/node_modules

# Install dependencies
WORKDIR /root/Ragnarok-md
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
