import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class CreateBudget extends LightningModal {

    handleOkay() {
        this.close('okay');
    }
}