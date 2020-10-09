#!/bin/sh

up() {
    cd _docker && docker-compose -f docker-compose.yml up -d mysql nginx workspace phpmyadmin "$@"
}

down() {
    cd _docker && docker-compose -f docker-compose.yml down "$@"
}

workspace() {
    cd _docker && docker-compose -f docker-compose.yml exec workspace bash
}

"$@"
