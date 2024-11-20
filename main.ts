import inquirer from "inquirer";

let currency: any = {
    USD: 1, // Base Currency
    EUR: 0.91, // Euro
    GBP: 0.76, // British Pound
    INR: 83, // Indian Rupee
    PKR: 278, // Pakistani Rupee
    AUD: 1.56, // Australian Dollar
    CAD: 1.35, // Canadian Dollar
    JPY: 149.5, // Japanese Yen
    CNY: 7.3, // Chinese Yuan
    AED: 3.67, // UAE Dirham
    SAR: 3.75, // Saudi Riyal
    CHF: 0.89, // Swiss Franc
    NZD: 1.7, // New Zealand Dollar
};


let user_answer = await inquirer.prompt(
    [
        {
            name: 'from',
            message: "Enter From Currency",
            type: "list",
            choices: Object.keys(currency), // Dynamically fetch currency codes
        },
        {
            name: 'to',
            message: "Enter TO Currency",
            type: "list",
            choices: Object.keys(currency), 
        },
        {
            name: 'amount',
            message: "Enter Your Amount",
            type: "number",
        }
    ]
);


let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let userAmount = user_answer.amount;

let baseAmount = userAmount / fromAmount; //USD base currency

let convertedAmount = baseAmount * toAmount;

if(userAmount <= 0 || isNaN(userAmount)){
    console.log("Please enter a valid amount greater than 0.");
}

console.log(`You entered: ${userAmount} ${user_answer.from}`);
console.log(`Converted Amount ${userAmount} ${user_answer.from} = ${convertedAmount.toFixed(2)} ${user_answer.to}`);




