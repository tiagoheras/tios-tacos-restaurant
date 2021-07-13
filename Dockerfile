FROM node
COPY . .
RUN npm install
CMD ["npm", "run", "server"]
EXPOSE 8080