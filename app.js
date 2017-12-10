// Budget Controller
var budgetController = (function() {

})()

// UI Controller
var UIController = (function() {

})()

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    var ctrilAddItem = function() {
        // some codes
        console.log('ENTER was pressed!')
    }
    document.querySelector('.add__btn').addEventListener('click', ctrilAddItem)

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrilAddItem()
        }
    })
})(budgetController, UIController)