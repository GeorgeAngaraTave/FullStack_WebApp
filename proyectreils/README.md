# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# IMPLEMTACIÓN

desppues de clonar el proyecto:
* bundle install
* rails db:create db:migrate (Verificar las credenciales que tienen par conexión de la base de datos 'config/database.yml)
* Ejecutar : rals s ó rals server

# COMANDOS DE FUNCIONALIDAD

* Para crear un modelo en la BD: rails g migration  add_name_to_user name:string
* Para ver todas la ruta:  rails routes
* Para crear controladores: rails g controller home index
* Generamos views (Login completo) rails g devise:views
* Creamos modelo por medio de devise: rails g devise user