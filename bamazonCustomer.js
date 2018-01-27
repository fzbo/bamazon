	//VAR MYSQL AND VAR INQUIRER WILL PULL PACKAGES TO BE USED IN APP
	var mysql = require("mysql");
	var inquirer = require("inquirer");
	//VAR CONNECTION HOLDS THE PARAMETERS THAT ENABLES CONNECTION TO DATABASE BAMAZON
	var connection = mysql.createConnection({
	  host     : "localhost",
	  port     : 3306,
	  user     : "root",//Your username.
	  password : "root",//Your password.
	  database : "bamazonDB"
	});

	//THIS SECTION WILL TRIGGER CONNECTION.
	connection.connect(function(err){
		if (err) throw err;
		console.log("connected as id" + connection.threadId);
	//RUN THE START FUNCTION AFTER CONNECTION HAS BEEN MADE
	start();

	});
//DISPLAY ALL ITEMS IN STOCK
function start() {
	connection.query("SELECT * FROM Products",
		function(err, results) {
			if (err) throw err;
			console.log("Welcome to Bamazon");
			console.log("Below is a list of items that are currently available.");
			console.log(" ");
			console.log("ITEM ID | PRODUCT NAME | PRICE PER UNIT | IN STOCK");
			

			for (var i = 0; i < results.length; i++) {
				console.log(results[i].Item_Id + " | " + results[i].Product_Name + " | " + results[i].Price + " | "  + results[i].Stock_Quantity);
			};
		})
		selectProduct();
	};

//USER PROMPTED TO CHOOSE PRODUCT BY ID
function selectProduct() {
	connection.query("SELECT * FROM Products",
		function(err, results) {
			if (err) throw err;
			inquirer
				.prompt([
				{
					name: "productID",
					type: "userInput",
					message: "What is the id number of the product you would like to purchase?",
					validate: function(value){
                    	if (!isNaN(value)){
                    		return true;
                    	}
                    	return false;
                    }
				},
				{
                    name: "amount",
                    type: "input",
                    message: "How many units of that product would you like to buy?",
                    validate: function(value){
                    	if (!isNaN(value)){
                    		return true;
                    	}
                    	return true;
                    }

                }
				]).then(function(answer) {
				
					var item = answer.productID;
					//console.log(item);

					var itemAmount = answer.amount;
					//console.log(itemAmount);
					console.log("You want to buy " + itemAmount + " of product number " + item +".");

					connection.query("SELECT * FROM Products WHERE ?", 
						[
						{Item_Id : item}
						], 
						function(err, res) {
						if (err) throw err;

						//console.log(res);

						var inStock = res[0].stock_quantity;
						var price = res[0].price;
						var remainingInStock = inStock - itemAmount;
						var grandTotal = price * itemAmount;
						console.log("Remaining in stock: " + remainingInStock);
						console.log("Your total is " + grandTotal);
						console.log("Thank you for shopping Bamazon.")

						
						endBamazon();
					})	
				})
		})
};

function endBamazon() {
	connection.end();
};
