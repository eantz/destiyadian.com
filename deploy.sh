#!/bin/bash
sudo apt-get update -y

sudo apt-get install nginx -y && 
sudo ufw allow 'Nginx Full'

if ! command -v nvm &> /dev/null
then
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
fi

export NVM_DIR=$HOME/.nvm;
. $NVM_DIR/nvm.sh;

nvm install 18


WORKSPACEDIR=/home/ubuntu/destiyadian.com
if [ -d "$WORKSPACEDIR" ]
then
    cd $WORKSPACEDIR
    git pull origin master
else
    cd /home/ubuntu
    git clone https://github.com/eantz/destiyadian.com.git
    cd destiyadian.com
fi

nvm use 18

npm install &&
npm run build

if ! command -v pm2 &> /dev/null
then
    npm install -g pm2

    pm2 start npm --name destiyadian -- start &&
    pm2 save

    cp -f nginx.default /etc/nginx/sites-available/default
    sudo systemctl restart nginx
    
else 
    pm2 restart destiyadian &&
    pm2 save
fi





