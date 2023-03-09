---
sidebar_position: 1
---

# Configuring Git and SSH

## Installing git

### Windows

Click [here](https://git-scm.com/download/win) intro to download the graphical installer for latest **64-bit** version of Git for Windows.

### Linux

* Debian Based ➡️ ``sudo apt install git-all``
* RPM Based ➡️ ``sudo dnf install git-all``
* Arch Based ➡️ ``sudo pacman -Sy git-all``

### Mac OS
```
brew install git
```

## Configuring git
```bash
git config --global user.name "username"
git config --global user.email "email@gmail.com"
```

## Configuring SSH

Generating a new SSH key.

```bash
ssh-keygen -t ed25519 -C "email@domain.com"
```

:::tip

Note: If you're using a legacy system that doesn't support the ED25519 algorithm, run:

```
ssh-keygen -t rsa -b 4096 -C "email@domain.com"
```

:::

Just press `Enter` to accept the default location and file name. If the .ssh directory doesn't exist, the system creates one for you.

## Copying the ssh key to a server

Once an SSH key has been created, the ssh-copy-id command can be used to install it as an authorized key on the server. Once the key has been authorized for SSH, it grants access to the server without a password.

```bash
ssh-copy-id -i ~/.ssh/ssh_key user@host
```

## Accessing the server

```bash
ssh user@host
```