SET NAMES utf8;
DROP DATABASE IF EXISTS nine;
CREATE DATABASE nine CHARSET=utf8;
USE nine;
CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(16),
    upwd VARCHAR(128),
    phone VARCHAR(11),
    email VARCHAR(256),
    userType INT
);

INSERT INTO user VALUES(0,'小里QWD','123456','17621305739','giraffe.aup@gmail.com',1);
