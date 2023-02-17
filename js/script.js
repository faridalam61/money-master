const income = document.getElementById('income');
const foodCost = document.getElementById('food-cost');
const rentCost = document.getElementById('rent');
const clothingCost = document.getElementById('clothing-cost');

const calculateBtn = document.getElementById('calculate');

const totalExpense = document.getElementById('total-expense');
const balance = document.getElementById('balance');

const discountPercent = document.getElementById('discount');
const discountBtn = document.getElementById('discount-btn');

const savingAmount = document.getElementById('saving-amount');
const remainingBalance = document.getElementById('remaining-balance');

calculateBtn.addEventListener('click', () => {
    const totalExp = parseFloat(foodCost.value) + parseFloat(rentCost.value) + parseFloat(clothingCost.value);
    if (!isNaN(totalExp) && totalExp >0) {
        if (parseFloat(income.value) >= totalExp) {
           const newBalance = parseFloat(income.value) - totalExp;
           totalExpense.innerText = totalExp;
           balance.innerText = newBalance;
        } else {
            alert("Expenses can't be greater than income")
       }
    } else {
        alert('Enter Valid numbers')
   }
    
    
})


discountBtn.addEventListener('click', () => {
    const discount = parseInt(discountPercent.value) / 100;
    const save = parseFloat(balance.innerText) * discount;
    savingAmount.innerText = save;

    const remaining = parseFloat(balance.innerText) - save;
    remainingBalance.innerText = remaining;

})