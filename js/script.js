// Business logic 
function yourPizza(sizes, crust, toppings,numpizza) {
    this.sizes = price1;
    this.crust = price2;
    this.toppings = price3;
  }
$(document).ready(function(){
$("#checkout").click(function () {
    var sizevalue = $("#size").val();
    var crustvalue= $("#crust").val();
    var toppingvalue= $("#topping").val();
    var numbervalue= $("#number").val();
    if (sizevalue== '' || crustvalue == '' ||toppingvalue == ''||numbervalue == '' ) {
        alert("Please check the missing field(s)");
    } else {
        alert("now checkout your order");
    }


        $("#size").val("");
        $("#crust").val("");
        $("#topping").val("");
        $("#number").val("");
    
});
});

// user interface logic

