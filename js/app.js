function incomeFunction(incomee) {
    //get income number
    const income = document.getElementById('income-input');
    const incomeNum = parseFloat(income.value);
    //error handling
    if (incomeNum < 0 || isNaN(income.value)) {
        alert("Enter only positive number on Income section");

    }

    return incomeNum;
}
//add calculate event
document.getElementById('Calculate-Balance').addEventListener('click', function () {

    //call income function
    const incomee = incomeFunction();
    //get expenses number food
    const foodExpenses = document.getElementById('expence-food');
    const foodExpenceNum = parseFloat(foodExpenses.value);
    //error handling
    if (foodExpenceNum < 0 || isNaN(foodExpenses.value)) {
        alert("Enter only positive number on Food expenses section");
    }
    //clear input filed
    foodExpenses.value = '';

    //get expenses number rent
    const rentExpence = document.getElementById('expence-rent');
    const rentExpenceNum = parseFloat(rentExpence.value);
    //error handling
    if (rentExpence < 0 || isNaN(rentExpence.value)) {
        alert("Enter only positive number on Rent Expenses section");
    }

    //clear input filed
    rentExpence.value = '';


    //get expenses number cloth
    const clothExpence = document.getElementById('expence-clothes');
    const clothExpenceNum = parseFloat(clothExpence.value);
    //error handling
    if (clothExpence < 0 || isNaN(clothExpence.value)) {
        alert("Enter only positive number on Cloth expense section");
    }
    //clear input filed
    clothExpence.value = '';

    //total expensess addition
    const totalExpenceNumber = foodExpenceNum + rentExpenceNum + clothExpenceNum;
    //balance after expensess
    const balanceNumber = incomee - totalExpenceNumber;
    //error handling
    if (balanceNumber < 0) {
        alert("Your Expenses is higher than your income");
    }

    //update total expense
    const updateExpence = document.getElementById('total-expence');
    updateExpence.innerText = totalExpenceNumber;

    //update total balance
    const updateBalance = document.getElementById('total-balance');
    updateBalance.innerText = balanceNumber;
});


//add save event

document.getElementById('save-button').addEventListener('click', function () {
    //add update balance
    const updateBalance = document.getElementById('total-balance');
    balanceUpdate = updateBalance.innerText;

    //call income function
    incometot = incomeFunction();



    const saveAmount = document.getElementById('input-save');
    const saveAmountNum = parseFloat(saveAmount.value);
    //error handling
    if (saveAmount < 0 || isNaN(saveAmount.value)) {
        alert("Enter only positive number on Save amount section");
    }

    //clear input filed
    saveAmount.value = '';
    //calculation savings
    saveMoney = (incometot * saveAmountNum) / 100;

    //remaining balance calculation
    const remainingBalance = balanceUpdate - saveMoney;

    if (remainingBalance < 0) {
        alert('You have not ' + saveAmountNum + "% enough money for saving");
    }

    //update savings amount
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = saveMoney;
    //update remainging balance
    const RemainingbalanceNum = document.getElementById('Remain-balance');
    RemainingbalanceNum.innerText = remainingBalance;


});