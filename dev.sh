#!/bin/sh

up() {
    docker-compose -f _docker/docker-compose.yml up -d mysql nginx workspace phpmyadmin "$@"
}

down() {
    docker-compose -f _docker/docker-compose.yml down "$@"
}

workspace() {
    docker-compose -f _docker/docker-compose.yml exec workspace bash
}

"$@"
