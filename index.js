let totalPrice = 0;
function handleClick(target) {
    const itemName = target.childNodes[5].innerText;
    const itemPrice = target.childNodes[7].innerText.split(" ")[0];
    const itemEntry = document.getElementById('item-entry');
    const count = itemEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count + 1}. ${itemName}`;
    itemEntry.appendChild(p);
    totalPrice = parseFloat(totalPrice) + parseFloat(itemPrice);
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total').innerText = totalPrice;
    if(totalPrice >= 200){
        const apply= document.getElementById('apply');
        apply.removeAttribute('disabled');
    }
    if(totalPrice > 0){
        const purchase = document.getElementById('purchase');    
        purchase.removeAttribute('disabled');
    }
    
}


document.getElementById('apply').addEventListener('click', function(){
    const input = document.getElementById('input').value;
    const coupon = document.getElementById('coupon').innerText;
    let discount = document.getElementById('discount');
    if(input === coupon && totalPrice >= 200){
            discount = totalPrice * 0.2;
            
    }
    let totalDiscount = discount.toFixed(2);
    document.getElementById('discount').innerText = totalDiscount;
    let total = totalPrice - totalDiscount;
    document.getElementById('total').innerText = total;
    
})




document.getElementById('close').addEventListener('click', function(){
    window.location.href = 'index.html';
})


