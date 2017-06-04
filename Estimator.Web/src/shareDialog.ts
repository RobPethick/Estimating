import { DialogController } from 'aurelia-dialog';
import { autoinject } from "aurelia-framework";

@autoinject
export class ShareDialog{
    public estimateId: string;
    constructor(private dialogController: DialogController) {
        
    }

    activate(estimateId) {
        this.estimateId = estimateId;
    }

    get shareUrl(): string{
        return window.location.host + "/#estimate/" + this.estimateId;
    }
}