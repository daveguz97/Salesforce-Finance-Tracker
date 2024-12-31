import { LightningElement, api } from "lwc";
import CreateIncome from "c/createIncome";
import CreateExpenses from "c/createExpenses";
import CreateBudget from "c/createBudget";

const MODAL_CONFIG = {
    size: "large",
    description: "Used to provide income or expenses"
};

const BUTTON_CONFIG = {
    income: {
        text: "Add Income",
        brand: "success",
        icon: "custom:custom41"
    },
    expenses: {
        text: "Add Expense",
        brand: "destructive",
        icon: "custom:custom40"
    },
    budget: {
        text: "Create a Budget",
        brand: "brand",
        icon: "custom:custom17"
    }
};

export default class AddFinanceBTN extends LightningElement {
    @api type;
    btnText;
    brand;
    icon;

    connectedCallback() {
        this.buttonAttributes();
    }

    handleClick() {
        switch (this.type.toLowerCase()) {
            case "income":
                this.createIncome();
                break;
            case "expenses":
                this.createExpenses();
                break;
            case "budget":
                this.createBudget();
                break;
        }
    }

    buttonAttributes() {
        const config = BUTTON_CONFIG[this.type.toLowerCase()];
        if (config) {
            this.btnText = config.text;
            this.brand = config.brand;
            this.icon = config.icon;
        }
    }

    async createIncome() {
        await CreateIncome.open(MODAL_CONFIG);
    }

    async createExpenses() {
        await CreateExpenses.open(MODAL_CONFIG);
    }

    async createBudget() {
        await CreateBudget.open(MODAL_CONFIG);
    }
}
