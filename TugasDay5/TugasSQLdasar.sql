CREATE TABLE tbl_user (  
    id INT PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password_ VARCHAR(255),
    address_ TEXT
);
INSERT INTO tbl_user(id, username, email, password_, address_) VALUES (1, 'rivai','rivai@gmail.com','1234', 'indramayu');
INSERT INTO tbl_user(id, username, email, password_, address_) VALUES (2, 'adam','adam@gmail.com','12345', 'jakarta');
UPDATE tbl_user
set username = 'moh rivai ' WHERE id = 1; 
DELETE FROM tbl_user WHERE id = 2;
SELECT * FROM tbl_user;