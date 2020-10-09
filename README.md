<img src="https://media.giphy.com/media/fAhOtxIzrTxyE/giphy.gif" width="100%" style="margin: 0 auto">

<h1> Shopping List </h1>
<p>A simple shopping list application with focus on user experience.<p>

## Installation
This application requires you to have [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/install/) installed.

1. Clone the repository
```bash
git clone git@github.com:erhuz/shopping-list.git
```

2. Set up environment variables.
```bash
cp .env.example .env && cp .env.docker _docker/.env
```

3. Enter shoppinglist.test into your hosts file.
On mac / linux, the hosts file is located at `/etc/hosts`.
```bash
127.0.0.1   shoppinglist.test
```

4. Make helper script executable.
(You might have to prefix this command with `sudo`)
```
chmod +x dev.sh
```

5. Start docker containers.
```bash
./dev.sh up
```
Or you can run `docker-compose -f _docker/docker-compose.yml up -d mysql nginx workspace phpmyadmin`

6. Visit the application in your browser at `http://shoppinglist.test/`

7. (Optional) Stop docker containers.
```bash
./dev.sh down
```
Or you can run `docker-compose -f _docker/docker-compose.yml down`

## Goal of this project
- Simple and nice interface, nothing should be in the way.
- Focus on easily adding goods and sharing it.


## To Do
- Setup github actions for tests.
- Setup github actions for deployment.
- to check a checkbox when you have taken an item type.

## License
The Shopping list app is open-sourced software licensed under the [Apache-2.0 License](https://opensource.org/licenses/Apache-2.0).
