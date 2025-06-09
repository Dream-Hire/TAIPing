FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

# 의존성 설치
RUN npm ci --only=production=false
COPY . .
RUN npm run build

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]