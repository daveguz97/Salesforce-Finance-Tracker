import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class CreateIncome extends LightningModal {

    handleOkay() {
        this.close('okay');
    }
}