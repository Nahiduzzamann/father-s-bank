document.getElementById('btn-deposit').addEventListener('click', function () {
    const UserDeposit = document.getElementById('in-deposit').value;
    if (parseInt(UserDeposit) > 0) {
        //deposit section
        let bankDepositField = document.getElementById('deposit').innerText;
        let bankDepositFieldCurrentamount = parseInt(bankDepositField);
        bankDepositFieldCurrentamount = bankDepositFieldCurrentamount + parseInt(UserDeposit);
        document.getElementById('deposit').innerText = bankDepositFieldCurrentamount;

        //balance section
        let bankBalanceField = document.getElementById('balance').innerText;
        let bankBalanceFieldCurrentamount = parseInt(bankBalanceField);
        bankBalanceFieldCurrentamount = bankBalanceFieldCurrentamount + parseInt(UserDeposit);
        document.getElementById('balance').innerText = bankBalanceFieldCurrentamount;

        document.getElementById('in-deposit').value = '';
    }
    else {
        alert('Please Enter Valid Amount!!!')
    }
})


document.getElementById('btn-withdraw').addEventListener('click', function () {
    const UserWithdraw = document.getElementById('in-withdraw').value;
    let bankBalanceField = document.getElementById('balance').innerText;
    let bankBalanceFieldCurrentamount = parseInt(bankBalanceField);


    if (bankBalanceFieldCurrentamount < parseInt(UserWithdraw)) {
        alert('Sorry!! Insufficient Balance.')
    }
    else if (parseInt(UserWithdraw) > 0) {
        //Withdraw section
        let bankWithdrawField = document.getElementById('withdraw').innerText;
        let bankWithdrawFieldCurrentamount = parseInt(bankWithdrawField);
        bankWithdrawFieldCurrentamount = bankWithdrawFieldCurrentamount + parseInt(UserWithdraw);
        document.getElementById('withdraw').innerText = bankWithdrawFieldCurrentamount;

        //balance section
        
        bankBalanceFieldCurrentamount = bankBalanceFieldCurrentamount - parseInt(UserWithdraw);
        document.getElementById('balance').innerText = bankBalanceFieldCurrentamount;

        document.getElementById('in-withdraw').value = '';

    }
    else {
        alert('Please Enter Valid Amount!!!')
    }
})