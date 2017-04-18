import {Action} from "redux";

export class SwitchExpand implements Action {
    
    constructor(id: number, isEnabled: boolean){
        this.id = id;
        this.isEnabled = isEnabled;
    }

    public type: any = SwitchExpand.type;

    public static type = "TREE_SWITCHEXPAND";

    public id: number;

    public isEnabled: boolean;
}