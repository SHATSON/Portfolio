import { CLARITY_MOTION_ENTER_LEAVE_PROPERTY } from "@cds/core/internal";

export class ConfigService {
    private _api!: string;
    static _property: any;
    //static _property: any;
    //static _property: any;

    public static set(_property: string, value: string) {
        //this['_' + property] = value;
        this._property = value;
    }

    public static get(_property: string) {
        //return this['_' + property];
        return this._property;
    }
}
