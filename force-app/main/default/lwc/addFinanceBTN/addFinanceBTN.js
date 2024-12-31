import { LightningElement, api } from "lwc";
import CreateIncome from "c/createIncome";
import CreateExpenses from "c/createExpenses";

const MODAL_CONFIG = {
    size: "large",
    description: "Used to provide income or expenses"
}

export default class AddFinanceBTN extends LightningElement {
    @api type;
    btnText;
    brand;
    icon;

    connectedCallback() {
        this.buttonAttributes();
    }

    handleClick() {
        if (this.type.toLowerCase() === "income") {
            this.createIncome();
        } else if (this.type.toLowerCase() === "expenses") {
            this.createExpenses();
        }
    }

    buttonAttributes() {
        if (this.type) {
            if (this.type === "Income") {
                this.btnText = "Add Income";
                this.brand = "success";
                this.icon = "custom:custom17"; // Money Bag
            } else {
                this.btnText = "Add Expense";
                this.brand = "destructive";
                this.icon = "custom:custom40"; // Credit Card
            }
        }
    }
    
    async createIncome() {
        const result = await CreateIncome.open(MODAL_CONFIG);
        // if modal closed with X button, promise returns result = 'undefined'
        // if modal closed with OK button, promise returns result = 'okay'
        console.log(result);
    }
    
    async createExpenses() {
        const result = await CreateExpenses.open(MODAL_CONFIG);
        // if modal closed with X button, promise returns result = 'undefined'
        // if modal closed with OK button, promise returns result = 'okay'
        console.log(result);
    }


}