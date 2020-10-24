CREATE TABLE IF NOT EXISTS `courses` (
  `id`                  int(11)         NOT NULL AUTO_INCREMENT,
  `name`                varchar(200)    NOT NULL,
  `alt_name`            varchar(200)    DEFAULT NULL,
  `description`         text,
  `year`                int(11)         DEFAULT NULL,
  `length`              decimal(10,2)   DEFAULT NULL,
  `number_of_views`     int(11)         DEFAULT NULL,
  `rating`              varchar(200)    DEFAULT NULL,
  `path`                text,
  `is_watched`          tinyint(4)      DEFAULT NULL,
  `is_downloaded`       tinyint(4)      DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `labels` (
  `id`                  int(11)         NOT NULL AUTO_INCREMENT,
  `name`                varchar(100)    NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `levels` (
  `id`                  int(11)         NOT NULL AUTO_INCREMENT,
  `name`                varchar(100)    NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `sources` (
  `id`                  int(11)         NOT NULL AUTO_INCREMENT,
  `name`                varchar(100)    NOT NULL,
  `url`                 varchar(250)    DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `teachers` (
  `id`                  int(11)         NOT NULL AUTO_INCREMENT,
  `name`                varchar(150)    NOT NULL,
  `workplace`           varchar(150)    DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `M2M_course_label` (
  `course_id`           int(11)         NOT NULL,
  `label_id`            int(11)         NOT NULL,
  PRIMARY KEY (`course_id`,`label_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `M2M_course_level` (
  `course_id`           int(11)         NOT NULL,
  `level_id`            int(11)         NOT NULL,
  PRIMARY KEY (`course_id`,`level_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `M2M_course_source` (
  `course_id`           int(11)         NOT NULL,
  `source_id`           int(11)         NOT NULL,
  PRIMARY KEY (`course_id`,`source_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `M2M_course_teacher` (
  `course_id`           int(11)         NOT NULL,
  `teacher_id`          int(11)         NOT NULL,
  PRIMARY KEY (`course_id`,`teacher_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
