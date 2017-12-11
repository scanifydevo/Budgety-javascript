// Budget Controller
var budgetController = (function() {
    var Expense = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value
    }

    var Income = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: function(type, des, val) {

        }
    }
})()

// UI Controller
var UIController = (function() {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        getDOMstrings: function() {
            return DOMstrings
        }
    }
})()

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings()
        // click the add item
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrilAddItem)
        // press the enter 
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrilAddItem()
            }
        })
    }
    var ctrilAddItem = function() {
        //Get the field input data
        var input = UICtrl.getInput()
        console.log(input)
    }

    return {
        init: function() {
            console.log('Application has started.')
            setupEventListeners()
        }
    }
})(budgetController, UIController)

controller.init()