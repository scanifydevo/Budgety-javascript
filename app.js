// Budget Controller
var budgetController = (function() {

})()

// UI Controller
var UIController = (function() {
    return {
        getInput: function() {
            return {
                type: document.querySelector('.add__type').value,
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            }
        }
    }
})()

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    var ctrilAddItem = function() {
        //Get the field input data
        var input = UICtrl.getInput()
        console.log(input)
    }
    document.querySelector('.add__btn').addEventListener('click', ctrilAddItem)

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrilAddItem()
        }
    })
})(budgetController, UIController)