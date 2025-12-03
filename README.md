# Деплой приложения на сервер с использованием pm2

IP адрес 158.160.204.232

Frontend https://mike395.nomorepartiessbs.ru

Backend https://api.mike395.nomorepartiessbs.ru



git add .
git commit
git push --force https://github.com/mihailcoc/nodejs-pm2-deploy


git pull https://github.com/mihailcoc/nodejs-pm2-deploy

Показать ssh ключ.
cat ~/.ssh/id_rsa.pub

ssh  rozamund395@158.160.204.232

nginx
sudo nano /etc/nginx/sites-available/default


cd nodejs-pm2-deploy

npm install dotenv

Запустить проект
pm2 start app.js
cd backend
pm2 start ecosystem.config.js
cd frontend
pm2 start ecosystem.config.js

scp [путь к файлу] [путь к файлу] [имя пользователя]@[ip-адрес]:[путь к файлу]
scp test.txt user@192.168.1.29:/home/user/
scp .env rozamund395@158.160.204.232 /nodejs-pm2-deploy/backend/

Дождемся окончания установки, а после добавим программу в автозагрузку:
sudo systemctl enable nginx

Статус nginx
sudo service nginx status


pm2 restart backend

На сервере
cd backend
npm run build

Вместо /home/praktikum/mesto-frontend укажите путь до фронтенда на вашем сервере. Эту команду нужно выполнить только один раз.
Если этого не сделать, у nginx не будет необходимых прав для чтения содержимого папки и при открытии сайта вы получите ошибку со статус-кодом 500. 

chmod +x /home/nodejs-pm2-deploy/frontend
chmod +x frontend


