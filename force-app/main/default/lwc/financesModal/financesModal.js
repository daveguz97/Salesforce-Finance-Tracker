import LightningModal from "lightning/modal";

export default class FinancesModal extends LightningModal {
    handleAddExpense() {
        this.close("Okay");
    }
}
