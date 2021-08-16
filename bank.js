function getInput(inputId){
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    input.value = '';
    return inputValue;
}

function showTransaction(showAmount, current){
    const field = document.getElementById(showAmount);
    const prevAmount = parseFloat(field.innerText)
    field.innerText = prevAmount + current; 
}
function currentbalance(){
    const balance = document.getElementById('balance');
    const balanceValue = parseFloat(balance.innerText);
    return balanceValue;
}

function balanceUpdate(current, isAdd){
    const balance = document.getElementById('balance');
    const balanceValue = currentbalance()
    if(isAdd == true){
        balance.innerText = balanceValue + current
    } else{
        balance.innerText = balanceValue - current
    }
}
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositAmount = getInput('deposit-amount')
    if(depositAmount > 0){
        showTransaction('deposit-show', depositAmount)
        balanceUpdate(depositAmount, true)
    }
})
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInput('withdraw-amount');
    const current = currentbalance()
    console.log(current)
    if(withdrawAmount > 0 && withdrawAmount <= current){
        showTransaction('withdraw-show', withdrawAmount);
        balanceUpdate(withdrawAmount, false)
    }
})