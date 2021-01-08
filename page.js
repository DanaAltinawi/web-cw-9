let products = [
{name: "Brulee", price:1.5},
{name: "Dates", price:3.5},
{name: "Oreo", price:2.5}
];

let cart = [];

function addProduct(index)
{
    let product = products[index];
    let quantity = document.getElementById(index).value;
    product.quantity=quantity;

    cart.push(product);
    console.log(cart);
    document.getElementById("list").innerHTML="";
    let total = 0;

    for (let index=0; index<cart.length; index++){
        let element= cart[index];
        let price= element.price*element.quantity;
        total = total +price;
        //document.getElementById("total").value=total;

       //if (element.quantity)
        let list= document.getElementById("list");
        list.innerHTML+= `<li> ${element.quantity} ${element.name} for ${element.price} </li>`
        return element;
          }

          
    document.getElementById("total").innerText=  `Total = ${total} KD`

}