// Business logic 
function yourPizza(sizes, crust, toppings,numpizza) {
    this.sizes = price1;
    this.crust = price2;
    this.toppings = price3;
  }
$(document).ready(function(){
$("#checkout").click(function () {
    var size= $("#size").val();
    var crust= $("#crust").val();
    var topping= $("#topping").val();
    var number= $("#number").val();
    if (size== '' || crust == '' ||topping == ''||number == '' ) {
        alert("Please check the missing field(s)");
    } else {
        alert("now checkout your order");
    }
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

// user interface logic

