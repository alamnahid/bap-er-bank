document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value='';
    if(isNaN(newWithdrawAmount)){
        alert('Please enter some amount first');
        return;
    }


    // now get the current withdraw amount 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousWithdrawTotalString);



    
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal1 = parseFloat(previousBalanceTotalString);

   
    if(newWithdrawAmount > previousBalanceTotal1){
        alert('Baper bank e eto taka nai');
        return;
    }

    const currentWithdrawTotal = newWithdrawAmount + previousBalanceTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalance = previousBalanceTotal1 - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalance;

    
    
})