# Cloud Computing Assignment 2 - WebApp on EC2

## Problem Statement
> [Problem Statement](https://uc.instructure.com/courses/1830328/assignments/23344360)
Breakdown: Webapp to store users info
    - Login/Sign up page
        - Username
        - Password
        - First name
        - Last name
        - Email
        - Address
    - Display page where we show the info of the user
        - Upload `.txt` file option. 
            - If exist in db linked to user: Download button + display word count 
        - Logout element
        - Note for self: Add interactive element. 

## Backend stack
FastAPI + SQLite3

## Frontend stack
Astro + Shadcn UI

## EC2 instance connect notes
Install [uv](https://docs.astral.sh/uv/) python package manager
```shell
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Install `node` and `npm`
```shell
sudo apt update && sudo apt upgrade -y

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
```

Install `sqlite3` if not found
```shell
sudo apt install sqlite3
```

Install `nginx`
```shell
sudo apt install nginx
```

Make sure python is installed
```shell
python3 --version
```

Git clone this repo
```shell
cd
git clone https://github.com/polskiTran/IntroCC-Proj2-UserStoreWebapp.git
```
