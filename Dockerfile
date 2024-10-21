# 1. Wybieramy oficjalny obraz Node.js jako bazę
FROM node:16 AS build

# 2. Ustawiamy katalog roboczy wewnątrz kontenera
WORKDIR /app

# 3. Kopiujemy plik package.json i package-lock.json (jeśli istnieje) do katalogu roboczego
COPY package*.json ./

# 4. Instalujemy zależności
RUN npm install

# 5. Kopiujemy resztę kodu aplikacji
COPY . .

# 6. Budujemy aplikację
RUN npm run build

# 7. Wybieramy nginx jako serwer
FROM nginx:alpine

# 8. Kopiujemy zbudowaną aplikację do folderu, z którego Nginx będzie serwował pliki
COPY --from=build /app/build /usr/share/nginx/html

# 9. Otwieramy port 80 dla HTTP
EXPOSE 80

# 10. Uruchamiamy Nginx (domyślnie Nginx uruchamia się automatycznie po uruchomieniu kontenera)
CMD ["nginx", "-g", "daemon off;"]
