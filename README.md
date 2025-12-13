# Деплой приложения на сервер с использованием pm2

IP адрес 158.160.216.234

Frontend https://mike395.nomorepartiessbs.ru

Backend https://api.mike395.nomorepartiessbs.ru



git add .
git commit
git push --force https://github.com/mihailcoc/nodejs-pm2-deploy

git clone https://github.com/mihailcoc/nodejs-pm2-deploy
git pull https://github.com/mihailcoc/nodejs-pm2-deploy

# Скачать по ssh
git clone  git@github.com:mihailcoc/nodejs-pm2-deploy.git


Показать ssh ключ.
cat ~/.ssh/id_rsa.pub

ssh  rozamund395@158.160.216.234

cd nodejs-pm2-deploy

npm install dotenv

# Запустить проект
cd nodejs-pm2-deploy

pm2 start app.js

cd backend
npm install
npm fund
npm run build
pm2 start ecosystem.config.js

cd frontend
npm install
npm fund
npm run build
pm2 start ecosystem.config.js


scp [путь к файлу] [путь к файлу] [имя пользователя]@[ip-адрес]:[путь к файлу]
scp test.txt user@192.168.1.29:/home/user/
scp .env rozamund395@158.160.216.234 /nodejs-pm2-deploy/backend/

# Дождемся окончания установки, а после добавим программу в автозагрузку:
sudo systemctl enable nginx

# Статус nginx
sudo service nginx status


pm2 restart backend

# На сервере
cd backend
npm run build

Вместо /home/praktikum/mesto-frontend укажите путь до фронтенда на вашем сервере. Эту команду нужно выполнить только один раз.
Если этого не сделать, у nginx не будет необходимых прав для чтения содержимого папки и при открытии сайта вы получите ошибку со статус-кодом 500. 

chmod +x /home/nodejs-pm2-deploy/frontend
chmod +x frontend



# Проблема с запуском.
я бы советовал заново взять от сюда код заменить две строчки, установить зависимости и запустить

    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",

"scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },


# nginx
sudo apt update # обновляем список пакетов (программ), доступных для установки
sudo apt install -y nginx # устанавливаем nginx 

sudo nano /etc/nginx/sites-available/default

sudo systemctl reload nginx
sudo service nginx start

# nginx
cd /etc/nginx/sites-available/

cd /etc/nginx/sites-enabled/
# Открыть файлы через терминал
sudo nano /etc/nginx/sites-available/default

sudo nano /etc/nginx/nginx.conf 
sudo nano /etc/nginx/sites-available/mike395.nomorepartiessbs.co           mike395.nomorepartiessbs.ru
sudo nano /etc/nginx/sites-available/api.mike395.nomorepartiessbs.co   api.mike395.nomorepartiessbs.ru

# Переназвать файлы через терминал
sudo mv "mike395.nomorepartiessbs.co" "mike395.nomorepartiessbs"
sudo mv "api.mike395.nomorepartiessbs.co" "api.mike395.nomorepartiessbs"

sudo touch /etc/nginx/sites-available/mike395.nomorepartiessbs.co            mike395.nomorepartiessbs.ru
sudo touch /etc/nginx/sites-available/api.mike395.nomorepartiessbs.co   api.mike395.nomorepartiessbs.ru

sudo nano /etc/nginx/sites-available/mike395.nomorepartiessbs.co            mike395.nomorepartiessbs.co
sudo nano /etc/nginx/sites-available/api.mike395.nomorepartiessbs.co    api.mike395.nomorepartiessbs.co

# Создаем символическую ссылку
sudo ln -s /etc/nginx/sites-available/<имя_домена> /etc/nginx/sites-enabled/<имя_домена>

sudo ln -s /etc/nginx/sites-available/mike395.nomorepartiessbs.co /etc/nginx/sites-enabled/mike395.nomorepartiessbs.co

sudo ln -s /etc/nginx/sites-available/api.mike395.nomorepartiessbs.co  /etc/nginx/sites-enabled/api.mike395.nomorepartiessbs.co


sudo nano /etc/nginx/sites-enabled/mike395.nomorepartiessbs.co
sudo nano /etc/nginx/sites-enabled/api.mike395.nomorepartiessbs.co   



# Проверить символическую ссылку.
ls -l
# Удалить  символическую ссылку.
sudo rm mike395.nomorepartiessbs
sudo rm mike395.nomorepartiessbs.co
sudo rm mike395.nomorepartiessbs.ru
sudo rm api.mike395.nomorepartiessbs

# Проверить его работу.
sudo nginx -t

# Если ошибок не появилось:
sudo systemctl restart nginx 

# Подключиться к серверу
ssh -l rozamund395@158.160.216.234

cd nodejs-pm2-deploy


npm run start
npm run dev 
npm run lint
npm run build

npm i --save mongoose

sudo systemctl status mongod
sudo systemctl start mongod
sudo systemctl enable mongod
sudo systemctl status mongod


cd nodejs-pm2-deploy

cd frontend
npm run build
npm run start

cd backend
npm run start


# Deploy pm2
cd mesto-source-deploy

# Копируем файл ecosystem.config.js
cp ../data/brothers.html ../html/

nodejs-pm2-deploy/backend/ecosystem.config.js

mesto-source-deploy/backend/






# Создание ключа ssh
cd ~/.ssh/
ssh-keygen -t rsa -b 4096 -C "mihailcoc@yandex.ru"
ls
cat id_rsa.pub

# Проверить подключение
ssh -T git@github.com
ssh -T mihailcoc@github.com

git add .
git commit
git push https://github.com/mihailcoc/nodejs-pm2-deploy
git push --force https://github.com/mihailcoc/nodejs-pm2-deploy

git clone https://github.com/mihailcoc/nodejs-pm2-deploy
git pull https://github.com/mihailcoc/nodejs-pm2-deploy

# Скачать по ssh
git pull git@github.com:mihailcoc/nodejs-pm2-deploy.git


# Скачать по pm2
npm ci

pm2 deploy production
pm2 deploy production set up

# Добавить на удаленный сервер последний коммит
pm2 deploy production revert 0


nodejs -v
npm -v
nvm list
nvm install 18.17.1
nvm install 22.17.1
nvm use 22.17.1
sudo apt install -y nodejs npm

npm i -g pm2

