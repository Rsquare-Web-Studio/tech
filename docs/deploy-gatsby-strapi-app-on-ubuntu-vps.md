---
sidebar_position: 2
---

# Deploy blog application using Strapi and Gatsby on Ubuntu VPS

## Updating the server
```bash
sudo apt update -y 
sudo apt upgrade -y 
```

## Installing 

### Dependencies
```bash
sudo apt install git wget curl build-essential dirmngr gnupg apt-transport-https ca-certificates software-properties-common clang -y 
```

### NVM
Node and NPM

```bash
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
source ~/.bashrc
```

### Node
```bash
nvm install node
```

### NGINX
```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx
```

### Postgres
```bash
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql.service
sudo systemctl enable postgresql.service
sudo su - postgres
psql
CREATE DATABASE naim;
CREATE USER constusername WITH PASSWORD 'simple-password';
GRANT ALL PRIVILEGES ON DATABASE naim to constusername;
\c db
GRANT USAGE, CREATE ON SCHEMA public TO constusername;
``` 

### PM2
```bash
npm i -g pm2
```

## Configuring the Firewall
```bash
sudo ufw enable
sudo ufw allow 'Nginx Full'
sudo ufw allow 'OpenSSH'
```

## Configuring NGINX

Create nginx conf 

```bash
sudo vim /etc/nginx/sites-available/server.conf
```

```
server{
    listen 80;
    server_name server;
    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Create a system-link to the new configuration

```bash
sudo rm /etc/nginx/sites-enabled/server.conf
sudo ln -s /etc/nginx/sites-available/server.conf /etc/nginx/sites-enabled/
sudo systemctl reload nginx
sudo systemctl restart nginx
sudo systemctl status nginx
```

## Generating PAT token

1. Log in to your GitHub account. The GitHub user must be an organization member or have admin access to a repository where Exalate is installed.
2. Navigate to Settings → Developer settings.
3. Select Personal access tokens.
4. Press Generate new token to generate a new access token.
5. Select the scopes or permissions you'd like to grant this token. To use your token to access repositories from the command line, select repo and workflow.
6. Now use the newly created token to clone the required repositories.

## Cloning the backend and frontend repo

```bash
git clone https://user:PAT@github.com/user/backend_repo.git server
git clone https://user:PAT@github.com/user/backend_repo.git client
```

## Configuring the project

Create a new bash script to automate this process

```bash
cd ~/client
npm i
rm -rf build
npm build
rm -rf ../server/public
mv build ../server/public
cd ../server
pm2 delete all
npm i
pm2 start server.js -i max
pm2 save
pm2 startup
```

```bash
bash build.sh
```