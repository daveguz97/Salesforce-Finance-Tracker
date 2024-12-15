import { LightningElement, api } from "lwc";

export default class AddFinanceBTN extends LightningElement {
    @api type;
    btnText;
	brand

    connectedCallback() {
		if(this.type) {
			if (this.type === "Income") {
				this.btnText = "Add Income";
				this.brand = "success";
			} else {
				this.btnText = "Add Expense";
				this.brand = "destructive";
			}
		}
    }
}
