FROM node:16-slim 
WORKDIR /app
EXPOSE 3000
ENV BACKEND_PORT=5000
COPY package*json ./ 
RUN npm install  
COPY . .
ENTRYPOINT ["npm","start"]


