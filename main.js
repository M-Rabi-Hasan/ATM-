import inquirer from "inquirer";
async function main() {
    let myAccountBalance = 10000;
    let mypin = 1234;
    // Prompting for PIN
    let atm = await inquirer.prompt({
        name: "pin",
        type: "number",
        message: "Enter Pin Code",
    });
    if (atm.pin === mypin) {
        console.log("Your Pin is Correct");
        // Prompting for action
        let check = await inquirer.prompt({
            name: "action",
            type: "list",
            message: "What do you want to do? ",
            choices: ["Withdraw", "Check balance", "Deposit", "Logout"],
        });
        if (check.action === "Deposit") {
            // Prompting for deposit amount
            let depositeAmount = await inquirer.prompt({
                name: "deposite",
                type: "number",
                message: "Enter Amount",
            });
            console.log("Deposited Amount: ", depositeAmount.deposite);
            myAccountBalance += depositeAmount.deposite; // Update account balance
            console.log('Deposit successful. New balance: ', myAccountBalance);
        }
        if (check.action === "Check balance") {
            console.log("Your current balance is: ", myAccountBalance);
        }
        if (check.action === "Withdraw") {
            // Prompting for withdrawal amount
            let check2 = await inquirer.prompt({
                name: "withdrawAmount",
                type: "list",
                message: "Enter amount",
                choices: [
                    "1000",
                    "2000",
                    "3000",
                    "4000",
                    "5000",
                    "6000",
                    "7000",
                    "8000",
                    "9000",
                    "10000",
                    "11000",
                ],
            });
            let withdrawalAmount = parseInt(check2.withdrawAmount);
            if (withdrawalAmount > myAccountBalance) {
                console.log("Insufficient funds!");
            }
            else {
                myAccountBalance -= withdrawalAmount;
                console.log("Your remaining balance is: ", myAccountBalance);
            }
        }
    }
    else {
        console.log("Incorrect Pin!", "\n", "Please try again");
    }
}
// Calling the main function
main();
