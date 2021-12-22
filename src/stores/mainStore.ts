import { makeAutoObservable, toJS } from "mobx";

export default class MainStore {
    _isClicked: boolean;

    constructor() {
        this._isClicked = false;

        makeAutoObservable(this);
    };

    get isClicked() {
        return toJS(this._isClicked);
    };

    set isClicked(bool: boolean) {
        this._isClicked = bool;
    };

    isClickedHandler(bool: boolean) {
        this.isClicked = bool;
    };
}