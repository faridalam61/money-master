const calculateBtn = document.getElementById('calculate');
const totalExpense = document.getElementById('total-expense');
const balance = document.getElementById('balance');
const discountBtn = document.getElementById('discount-btn');


calculateBtn.addEventListener('click', () => {
    const income = parseFloat(document.getElementById('income').value);
    const foodCost = parseFloat(document.getElementById('food-cost').value);
    const rentCost = parseFloat(document.getElementById('rent').value);
    const clothingCost = parseFloat(document.getElementById('clothing-cost').value);

    const totalExp = foodCost + rentCost + clothingCost;

   
    if (!isNaN(income) && !isNaN(foodCost) && !isNaN(rentCost) && !isNaN(clothingCost)) {
            if (income >= 0 && foodCost >= 0 && rentCost >= 0 && clothingCost >= 0) {
                if (income > totalExp) {
                    const newBalance = income - totalExp;
                    totalExpense.innerText = totalExp;
                    balance.innerText = newBalance;
                } else {
                    alert("Expenses can't be greater than income")
                }
            } else {
                alert('Enter positive numbers')
            }
        } else {
            alert('Enter valid numbers')
        
        }
})


discountBtn.addEventListener('click', () => {
    const discountPercent = parseInt(document.getElementById('discount').value);
    const savingAmount = document.getElementById('saving-amount');
    const remainingBalance = document.getElementById('remaining-balance');

    if (parseFloat(balance.innerText) > 0) {
        if (discountPercent > 0) {
            const discount = discountPercent / 100;
            const save = parseFloat(balance.innerText) * discount;
            savingAmount.innerText = save;

            const remaining = parseFloat(balance.innerText) - save;
            remainingBalance.innerText = remaining; 
        } else {
            alert('Invalid discount percentage')
        }
    } else {
        alert('You have no money')
    }
})