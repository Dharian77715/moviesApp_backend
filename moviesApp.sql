CREATE SCHEMA IF NOT EXISTS `movies_app` DEFAULT CHARACTER SET utf8mb3 ;
USE `movies_app` ;


- - Table `movies_app`.`sex`

CREATE TABLE IF NOT EXISTS `movies_app`.`sex` (
`id` INT NOT NULL AUTO_INCREMENT,
`sex_name` VARCHAR(45) NOT NULL,
PRIMARY KEY (`id`))
AUTO_INCREMENT = 3

- - Table `movies_app`.`actors`

CREATE TABLE IF NOT EXISTS `movies_app`.`actors` (
`id` INT NOT NULL AUTO_INCREMENT,
`sex_id` INT NOT NULL,
`name` VARCHAR(45) NOT NULL,
`date_of_birth` DATE NOT NULL,
`img` VARCHAR(255) NULL DEFAULT NULL,
`spouse` VARCHAR(45) NULL DEFAULT NULL,
`children` VARCHAR(245) NULL DEFAULT NULL,
`country` VARCHAR(45) NULL DEFAULT NULL,
`movies` VARCHAR(245) NULL DEFAULT NULL,
PRIMARY KEY (`id`, `sex_id`),
INDEX `fk_actors_sex_idx` (`sex_id` ASC) VISIBLE,
CONSTRAINT `fk_actors_sex`
FOREIGN KEY (`sex_id`)
REFERENCES `movies_app`.`sex` (`id`)
ON UPDATE CASCADE)
AUTO_INCREMENT = 5

- - Table `movies_app`.`genres`

CREATE TABLE IF NOT EXISTS `movies_app`.`genres` (
`id` INT NOT NULL AUTO_INCREMENT,
`genre` VARCHAR(45) NOT NULL,
PRIMARY KEY (`id`))
AUTO_INCREMENT = 16

- - Table `movies_app`.`movies`

CREATE TABLE IF NOT EXISTS `movies_app`.`movies` (
`id` INT NOT NULL AUTO_INCREMENT,
`title` VARCHAR(45) NOT NULL,
`release_date` VARCHAR(45) NOT NULL,
`img` VARCHAR(255) NULL DEFAULT NULL,
`country` VARCHAR(255) NULL DEFAULT NULL,
`duration` VARCHAR(45) NULL DEFAULT NULL,
`director` VARCHAR(255) NULL DEFAULT NULL,
`cast` VARCHAR(255) NULL DEFAULT NULL,
PRIMARY KEY (`id`))
AUTO_INCREMENT = 11


- - Table `movies_app`.`movies_actors`

CREATE TABLE IF NOT EXISTS `movies_app`.`movies_actors` (
`actor_id` INT NOT NULL,
`movie_id` INT NOT NULL,
PRIMARY KEY (`actor_id`, `movie_id`),
INDEX `fk_movies_actors_actors1_idx` (`actor_id` ASC) VISIBLE,
INDEX `fk_movies_actors_movies1_idx` (`movie_id` ASC) VISIBLE,
CONSTRAINT `fk_movies_actors_actors1`
FOREIGN KEY (`actor_id`)
REFERENCES `movies_app`.`actors` (`id`)
ON UPDATE CASCADE,
CONSTRAINT `fk_movies_actors_movies1`
FOREIGN KEY (`movie_id`)
REFERENCES `movies_app`.`movies` (`id`)
ON UPDATE CASCADE)


- - Table `movies_app`.`movies_genres`

CREATE TABLE IF NOT EXISTS `movies_app`.`movies_genres` (
`movies_id` INT NOT NULL,
`genres_id` INT NOT NULL,
`active` INT NULL DEFAULT '1',
PRIMARY KEY (`movies_id`, `genres_id`),
INDEX `fk_movies_genres_genres1_idx` (`genres_id` ASC) VISIBLE,
CONSTRAINT `fk_movies_genres_genres1`
FOREIGN KEY (`genres_id`)
REFERENCES `movies_app`.`genres` (`id`)
ON UPDATE CASCADE,
CONSTRAINT `fk_movies_genres_movies1`
FOREIGN KEY (`movies_id`)
REFERENCES `movies_app`.`movies` (`id`)
ON UPDATE CASCADE)


