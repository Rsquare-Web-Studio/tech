---
sidebar_position: 3
---

# Deploy MERN application on Ubuntu VPS

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

### MongoDB

:::tip
Install libssl1 (only applicable to Ubuntu 22.02)

```bash
wget http://http.us.debian.org/debian/pool/main/o/openssl/libssl1.1_1.1.1o-1_amd64.deb
sudo dpkg -i libssl1.1_1.1.1o-1_amd64.deb
```
:::

```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl enable mongod
sudo systemctl start mongod
sudo systemctl status mongod
```

### NGINX
```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
sudo systemctl status nginx
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