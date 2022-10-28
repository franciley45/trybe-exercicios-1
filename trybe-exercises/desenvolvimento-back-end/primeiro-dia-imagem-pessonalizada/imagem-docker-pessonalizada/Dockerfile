# COLOCAR IMAGEM BASE
FROM node:16.14 AS build

# DEFINIR PASTA PADRÃO 
WORKDIR /app

# COPIAR ARQUIVOS PARA INSTALAÇÃO
# esquerda local - direita é container
COPY package.json .
# consistência de pacotes
COPY package-lock.json . 

# FAZER INSTALAÇÃO
# SEMPRE VAI RODAR 
RUN npm install

# COPIAR CÓDIGO
COPY . .

# GERAR BUILD
RUN npm run build

##### novo estágio de build

# COLOCAR IMAGEM BASE
FROM nginx:stable-alpine

# COPIAR ARQUIVOS DA BUILD
COPY --from=build /app/build /usr/share/nginx/html
# SUBSTITUINDO ARQUIVOS
#
 COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# DEFINIR PORTA PARA RODAR
EXPOSE 80

# DEFINIR COMANDO PADRÃO
CMD ["nginx", "-g", "daemon off;"]

