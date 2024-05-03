FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/anonphoenix007/Ragnarok-MD /root/Anonphoenix007

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/Anonphoenix007/node_modules

# Install dependencies
WORKDIR /root/Anonphoenix007
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
