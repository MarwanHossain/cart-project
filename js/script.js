handleProductChange = (product,isIncrease)=>{
    const productInput= document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value)
    let newProductCount= productCount;
     if(isIncrease){
        newProductCount++
     }
     else if (productCount>1){
        newProductCount--;
     }
     productInput.value=newProductCount;
    //  console.log(productCount);

    // Update price
    let productTotal;
    if(product=="laptop"){
        productTotal=newProductCount*1599;
    }
    else{
         productTotal=newProductCount*999;
    }

    document.getElementById(product + "-total").innerHTML=productTotal;

    //Grand Total
    handleCheckout();
}
  handleCheckout=()=>{
        const laptopCount = parseInt(document.getElementById("laptop-count").value);
        const phoneCount = parseInt(document.getElementById("phone-count").value);

        const totalPrice = (laptopCount* 1599)+(phoneCount*999);
        document.getElementById("sub-total").innerHTML=totalPrice;

        const tax = Math.round(totalPrice*0.0635);
        document.getElementById("tax-amount").innerHTML=tax;

        const grandTotal = totalPrice +tax;
         document.getElementById("grand-total").innerHTML=grandTotal;

    }