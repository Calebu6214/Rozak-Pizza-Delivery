$(document).ready(function(event){
    event.preventDefault()
$("#checkout").click(function () {
    var size = $("#size").val();
    var crust= $("#crust").val();
    var topping= $("#topping").val();
    var number= $("#number").val();
    if (size== '' || crust == '' ||topping == ''||number == '' ) {
        alert("Please check the missing field(s)");
    } else {
        $("#list").append()
    }

    function resetFields() {
        $("#size").val("");
        $("#crust").val("");
        $("#topping").val("");
        $("#number").val("");
    }
    resetFields();
})
});
