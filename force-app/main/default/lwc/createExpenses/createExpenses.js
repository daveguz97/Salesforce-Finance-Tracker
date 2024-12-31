import {api} from 'lwc'
import LightningModal from 'lightning/modal';

export default class CreateExpenses extends LightningModal {
	handleClick() {
        this.close('okay');
    }
}