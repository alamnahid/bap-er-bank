document.getElementById('btn-deposit').addEventListener('click',function(){
    //now get the deposit amount to the input field
    const depositField = document.getElementById('deposit-amount');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value='';
    if(isNaN(newDepositAmount)){
        alert('Please enter some amount first');
        return;
    }

    
    // now get the current deposit total 
    const depositTotalElement = document.getElementById('deposit-total'); 
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    depositTotalElement.innerText = newDepositAmount+previousDepositTotal;


    //get balance current total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    //clear the deposit input field
    depositField.value='';
})