const {
    uuid,
    v4
} = require('uuidv4');

class Expense {
    constructor(title, category, description, amount, expenseDate) {
        this.id = uuid();
        this.title = title;
        this.category = category;
        this.description = description;
        this.amount = amount;
        this.expenseDate = expenseDate;

    }
}

module.exports = Expense;