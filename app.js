// Budget Controller
var budgetController = (function() {

})()

// UI Controller
var UIController = (function() {

})

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            console.log('ENTER was pressed!')
        }
    })
})(budgetController, UIController)