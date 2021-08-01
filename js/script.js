//  Business logic And user interface
function yourPizza(sizes, crust, toppings,numpizza) {
    this.sizes = sizes;
    this.crust =crust;
    this.toppings = toppings;
    this.number=numpizza;
    this.fullprice=[];
  }

$(document).ready(function(){
$("#checkout").click(function () {
    var size= $("#size").val();
    var crust= $("#crust").val();
    var topping= $("#topping").val();
    var number= $("#number").val();
    console.log(size);


  let order = ( size, crust, topping, number, total) => {
    return {size, crust, topping, number, total};
};


let price, totalPrice;
switch (size) {
    case size = "small":
        totalPrice = 500;
        break;
      case size = "medium":
        totalPrice = 800;
        break;
      case size = "large":
        totalPrice = 1000 ;
        break;
        
}
switch (topping) {
  
    case topping = "potato":
        totalPrice = totalPrice + 200;
        break;
    case topping = "pepperoni":
        totalPrice = totalPrice + 150;
        break;
    case topping = "cheese":
        totalPrice = totalPrice + 180;
        break;
    case topping = "chicken":
        totalPrice = totalPrice + 200;
        break;

}

switch (crust) {
  case crust = "thin":
      totalPrice = totalPrice + 180;
      break;
  case crust = "flatbread":
      totalPrice = totalPrice + 170;
      break;
  case crust = "thick":
      totalPrice = totalPrice + 200;
      break;
}

let cost = (totalPrice * number)

let newOrder =  order( size, crust, topping, number, cost);

    if (size== '' || crust == '' ||topping == ''||number == '' ) {
        alert("Please check the missing field(s)");
    } else {
        
      $('#list').text(" ");
      $("#list").append("<br>" + "Size :   "
          + newOrder.size + "<br>" + "Crust :     "
          + newOrder.crust + "<br>" + "Toppings :     "
          + newOrder.topping + "<br>" + " Number of pizzas :    "
          + newOrder.number + "<br>" + "Total Price :  "
          + newOrder.total );
    }
    $("#pick").click(function () {
        alert("Pick your pizza with this amount" + "" + newOrder.total);
    });


        $("#size").val("");
        $("#crust").val("");
        $("#topping").val("");
        $("#number").val("");
});
$("#forhide").hide();
$("#fill").click(function(){
    $("#forhide").show();
});


});


