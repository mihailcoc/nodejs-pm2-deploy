# Деплой приложения на сервер с использованием pm2

IP адрес 158.160.204.232

Frontend https://mike395.nomorepartiessbs.ru

Backend https://api.mike395.nomorepartiessbs.ru



git add .
git commit
git push --force https://github.com/mihailcoc/nodejs-pm2-deploy

git clone https://github.com/mihailcoc/nodejs-pm2-deploy
git pull https://github.com/mihailcoc/nodejs-pm2-deploy

Показать ssh ключ.
cat ~/.ssh/id_rsa.pub

ssh  rozamund395@158.160.204.232

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
scp .env rozamund395@158.160.204.232 /nodejs-pm2-deploy/backend/

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

nginx
cd /etc/nginx/sites-available/

cd /etc/nginx/sites-enabled/
# Открыть файлы через терминал
sudo nano /etc/nginx/sites-available/default

sudo nano /etc/nginx/nginx.conf 
sudo nano /etc/nginx/sites-available/mike395.nomorepartiessbs.co          mike395.nomorepartiessbs.co
sudo nano /etc/nginx/sites-available/api.mike395.nomorepartiessbs.co   api.mike395.nomorepartiessbs.co

# Переназвать файлы через терминал
sudo mv "mike395.nomorepartiessbs.co" "mike395.nomorepartiessbs"
sudo mv "api.mike395.nomorepartiessbs.co" "api.mike395.nomorepartiessbs"

sudo touch /etc/nginx/sites-available/mike395.nomorepartiessbs.co            mike395.nomorepartiessbs.co
sudo touch /etc/nginx/sites-available/api.mike395.nomorepartiessbs.co   api.mike395.nomorepartiessbs.co

sudo nano /etc/nginx/sites-available/mike395.nomorepartiessbs.co            mike395.nomorepartiessbs.co
sudo nano /etc/nginx/sites-available/api.mike395.nomorepartiessbs.co    api.mike395.nomorepartiessbs.co

# Создаем символическую ссылку
sudo ln -s /etc/nginx/sites-available/<имя_домена> /etc/nginx/sites-enabled/<имя_домена>

sudo ln -s /etc/nginx/sites-available/mike395.nomorepartiessbs.co /etc/nginx/sites-enabled/mike395.nomorepartiessbs.co

sudo ln -s /etc/nginx/sites-available/api.mike395.nomorepartiessbs.co  /etc/nginx/sites-enabled/api.mike395.nomorepartiessbs.co

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


ssh  rozamund395@158.160.204.232

cd nodejs-pm2-deploy