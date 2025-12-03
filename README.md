# Деплой приложения на сервер с использованием pm2

IP адрес 158.160.204.232

Frontend https://mike395.nomorepartiessbs.ru

Backend https://api.mike395.nomorepartiessbs.ru



git add .
git commit
git push --force https://github.com/mihailcoc/nodejs-pm2-deploy

Показать ssh ключ.
cat ~/.ssh/id_rsa.pub

ssh -l rozamund395 158.160.204.232

nginx
sudo nano /etc/nginx/sites-available/default

Запустить проект
pm2 start app.js

Дождемся окончания установки, а после добавим программу в автозагрузку:
sudo systemctl enable nginx

Статус nginx
sudo service nginx status