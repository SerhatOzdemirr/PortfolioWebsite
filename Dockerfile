# Resmi Nginx imajını kullan
FROM nginx:alpine

# Çalışma dizinini belirle
WORKDIR /usr/share/nginx/html

# Tüm dosyaları konteyner içine kopyala
COPY . /usr/share/nginx/html

# Port 80’i aç
EXPOSE 80

# Nginx başlat
CMD ["nginx", "-g", "daemon off;"]
