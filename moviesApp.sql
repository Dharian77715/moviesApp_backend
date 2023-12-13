
CREATE SCHEMA IF NOT EXISTS `movies_app` DEFAULT CHARACTER SET utf8 ;
USE `movies_app` ;

CREATE TABLE IF NOT EXISTS `movies_app`.`actors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `date_of_birth` DATE NOT NULL,
  `sex` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`actor_id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `movies_app`.`movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `release_date` DATE NOT NULL,
  PRIMARY KEY (`movie_id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `movies_app`.`role_played` (
  `id` INT NOT NULL,
  `id` INT NOT NULL,
  PRIMARY KEY (`id`, `id`),
  INDEX `fk_role_played_actors_idx` (`id` ASC) VISIBLE,
  INDEX `fk_role_played_movies1_idx` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_role_played_actors`
    FOREIGN KEY (`actor_id`)
    REFERENCES `movies_app`.`actors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE,
  CONSTRAINT `fk_role_played_movies`
    FOREIGN KEY (`id`)
    REFERENCES `movies_app`.`movies` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE)
ENGINE = InnoDB;


