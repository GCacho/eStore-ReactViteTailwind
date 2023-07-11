# Proyecto Tienda con React Vite y tailwindcss 
- Proyecto realizado con la ayuda del curso: https://platzi.com/clases/7396-react-vite-tailwindcss/62484-construye-una-tienda-online-con-react/
## Instalación de Dependencias - Ubuntu 22.04.2 LTS, WSL2
### NodeJs
~~~
- curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
~~~
### Vite, tailwindcss, react
~~~
- npm create vite@latest proyecto -- --template react
- cd proyecto/
- npm install -D tailwindcss postcss autoprefixer
- npm install react-router-dom
- npm run dev
~~~
### API
~~~
- https://api.escuelajs.co/api/v1/products
~~~