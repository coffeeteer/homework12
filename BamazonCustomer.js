//NPM LIBRARIES
var mysql = require('mysql');
var inquirer = require('inquirer');
var path = require('path');
var itemNum;
var itemId;
var newAmount;
var buyInfo;
var newNum = 0;
var requestdItemId = 0;
var updateAmount;

//Syncs to MySQL
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root', //Username
	password: '', //password
	database: 'bamazon',
	//method: 'GET'
});

//Creates connection with Server and makes table
connection.connect(function(err) {
	if(err) {
		console.error('error with connection: ' + err.stack);
	}
	makeTable();
});

//Function that grabs the products table from database and prints results
var makeTable = function() {
	//Selects all of the data from the MySQL products table - SELECT COMMAND:
	connection.query('SELECT * FROM products', function(err, res) {
		if(err) throw err;
		//prints the table to the consoe with minimal styling.
		var tab = "\t";
		console.log('ItemID\tProduct Name\tDepartment Name\tPrice\t# In Stock');
		console.log('--------------------------------------------------------');
		//FOR LOOP goes throguht the MySQL table and prints each individual row on a new line
		for(var i = 0; i < res.length; i++) {
			console.log(res[i].ItemID + tab + res[i].ProductName + tab + res[i].DepartmentName + tab + res[i].Price + tab + res[i].StockQuantity);
		}
		console.log('---------------------------------------------------------');
		//runs the customers prompts after creating the table. Sends res so the promptCustomer function is able to search through the data
		promptCustomer(res);
	});
}; 

//needs fixing
updateAmount = function(){
    console.log("update Function running");

// sumafterupdate variable


    connection.query('UPDATE products SET StockQuantity = ' + sumAfterUpdate + ' WHERE ItemID = ' + requestdItemId + '', function(err, res){
    });
    makeTable(); 
}

//function containing all customer prompts
var promptCustomer = function(res) {
	//prompts user for what they want to purchase
	inquirer.prompt([{
		type: 'input',
		name: 'choice',
		message: 'What is the Item ID of the product they would like to buy?'
	}]).then(function(val) {

		//console.log("THIS RUNS");

		//console.log(val);
		//set the VAR corrct to FALSE so as to amek sure the user inputs a valid product name
		var correct = false;

		//console.log(res[2].ItemID);
	
		//console.log(val.choice);

		//loops through the MySQL table to check that the product they wanted exists
		for(i = 0; i < res.length; i++) {

			//console.log(res[i].ItemID);
			//console.log(val.choice);

			if(val.choice == res[i].ItemID || res[i].ProductName){
				var correct = true;

				//console.log("you chose item " + val.choice);
			
			}


			//1. ToDo: if the product exists, set correct = true and ask the USER to see to many of the product they would like to buy
			if(val.choice == res[i].ItemID) {
				correct = true;
				console.log(res[i].StockQuantity);
				itemNum = res[i].StockQuantity;
				itemId = res[i].ItemID;
				requestdItemId = res[i].ItemID;
				console.log("THIS IS ITTTTTTTTTTTTT: " + requestdItemId);


				inquirer.prompt([{
					type: 'input',
					name: 'inventory',
					message: 'How many would you like to buy?'
				}]).then(function (val2) {
					if(val2.inventory <= itemNum) {
						console.log('Great we have ' + itemNum);
						sumAfterUpdate = itemNum - val2.inventory;  
      					



						updateAmount();
						//2. ToDo: Check to see if the amount requested is less than the amount that is available
						//buyInfo = itemNum - val2.choice2;
                        }else{ 
                            console.log('This item is not in stock.');
                            //makeTable();
					}
				});

			}
			

			

			//3. ToDo: Update the MySQL to reduce the StockQuantity by the amount requested - UPDATE command
			//updateAmount();
			//4. ToDo: Show the TABLE again by calling the function that makes the table
			//makeTable();
		}
		//If the product requested does not exist, restarts PROMPT
		if(i == res.length && correct == false){
			promptCustomer(res);
		}
	});	
};