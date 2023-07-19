#!/bin/bash
if ! command -v <nvm> &> /dev/null
then
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    nvm install 18.16.1

    ## install codedeploy agent
    sudo apt install -y ruby-full wget &&
    cd /home/ubuntu &&
    wget https://aws-codedeploy-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/latest/install &&
    chmod +x ./install &&
    sudo ./install auto > /tmp/logfile &&
    sudo service codedeploy-agent start
fi

export NVM_DIR=$HOME/.nvm;
. $NVM_DIR/nvm.sh;

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

nvm use v18

npm install &&
npm run build

if ! command -v <pm2> &> /dev/null
then
    npm install -g pm2

    pm2 start npm --name destiyadian -- start &&
    pm2 save
else 
    pm2 restart destiyadian &&
    pm2 save
fi



