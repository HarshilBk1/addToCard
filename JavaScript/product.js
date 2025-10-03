function display(){
    
    
    
    let cart = JSON.parse(localStorage.getItem("Cartitem"));
    let cartItems = document.getElementById('cartItems');
    let productDetails = document.querySelector('.productPrice');
    
    let str ="";
    let str2 =" ";
    let subquty =0 ;
    let sum =0;
    
cart.forEach((element, index) => {
    str += `
    
        <table class="proTable">
        <tr class="text-center">
            <td></td>
            <td>Product Details</td>
            <td>Total Amount</td>
            <td>Delete Product</td>
        </tr>
        <tr class="text">
            <td class="pt-3 pb-3">
                <img src =" ${element.thumbnail}"
            </td>
            <td class="text-white">
                <ul>
                    <li><h5>${element.title}</h5></li>

                    <li class = " text-success ">$  ${element.price}</li>
                   <li>Quantity : 
                        <button class="incree border-0" onclick="Decrice(${index})"> - </button> 
                        <span>${element.quantity}</span> 
                        <button class="dicree border-0" onclick="incrice(${index})"> + </button> 
                    </li>

                </ul>
            </td>
            <td class="text-center">$  ${element.price*element.quantity}</td>
            <td><button class="deleteBtn rounded" onclick = "deleteBtn(${index})">Delete</button></td>
        </tr>
       

    </table>
    
    
    `;   
    
    cartItems.innerHTML = str;
    subquty += element.quantity;
    sum += Math.round(element.price * element.quantity);

    str2 = `
     <table style="margin: 0px auto; border: 1px solid white;width : 700px">
        <tr>
            <td colspan="2">
                <h1 class="text-center mt-5">Your Order</h1>

            </td>
        </tr>
        <tr class = "text-center">
            <td>Total Products : <span>${subquty} </span></td>
            <td>Total Price : <span> ${sum} </span></td>
        </tr>
         <tr>
            <td colspan="2"><button class="buybtn text-white rounded d-block mt-4 mb-4"  style="margin: 0px auto;">Buy  Now</button></td>
            
        </tr>    
    </table>
    `;
    productDetails.innerHTML =str2; 
});


}
display();

function incrice(index) {
    let cart = JSON.parse(localStorage.getItem('Cartitem')) || [];
    cart[index].quantity  +=1;
    // cart[index].quantity = (cart[index].quantity || 0) + 1;

    localStorage.setItem("Cartitem",JSON.stringify(cart));
    display();
}

function  Decrice(index){
      let cart = JSON.parse(localStorage.getItem('Cartitem')) || [];
      if(cart[index].quantity >1){
        cart[index].quantity -=1;
      }
      localStorage.setItem('Cartitem',JSON.stringify(cart));
      display();

}
 

function deleteBtn(index){
      let cart = JSON.parse(localStorage.getItem('Cartitem')) || [];
      cart.splice(index,1);
    localStorage.setItem('Cartitem',JSON.stringify(cart));
    display();        
}








