const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmBtn.addEventListener('click', () => {
    const enterdReason = reasonInput.value;
    const enterdAmount = amountInput.value;

    if (enterdReason.trim().length <= 0 || enterdAmount <= 0 || enterdAmount.trim().length <= 0) {
        alertCtrl.create({
            message: 'Please enter valid reason and amount',
            header: 'Invalid inputs',
             buttons: ['Okay']
        }).then(alertEl => {
            alertEl.present();
        });
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enterdReason + ': ' + enterdAmount + ' $';

    expensesList.appendChild(newItem);

    totalExpenses += +enterdAmount;
    let rounded = totalExpenses.toFixed(2);
    totalExpensesOutput.textContent =  `${rounded} $`;
    clear();
});

cancelBtn.addEventListener('click', clear);
