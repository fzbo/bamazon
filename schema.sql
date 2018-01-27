
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE Products(
	Item_Id INT NOT NULL AUTO_INCREMENT,
	Product_Name VARCHAR(50) NULL,
	Department_Name VARCHAR(50) NULL,
	Price DECIMAL(10,2) NULL,
	Stock_Quantity INT NULL,
	PRIMARY KEY (Item_Id)
);


INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Cat Food", "Pet", 13, 20);

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Mouse", "Computer", 30, 5);

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Jeans", "Clothing", 13, 11);

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Batteries AA", "Household", 13, 57);

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Sports Watch", "Jewlry", 105, 2);

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Desk", "Furniture", 240, 9);

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Kitchen Aid Mixer", "Appliances", 113, 22);

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Ladder", "Home Improvement", 130, 3);

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Flatware", "Kitchen", 50, 4);

INSERT INTO Products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Color Pencils", "Crafts", 10, 11);

