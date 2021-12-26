import { makeAutoObservable, toJS } from "mobx";
import ConfigService from "../services/configService";
import { Sections, Color } from "../types/types";

export default class ColorEdditorStore {
    _isChosenSections: boolean;
    _isClicked: boolean;
    _isNewConfig: boolean;
    _chosenSection: Sections | any;
    _edditedSectionsColors: Color | any;
    _sections: Array<Sections>;

    constructor() {
        this._isChosenSections = false;
        this._isClicked = false;
        this._isNewConfig = false;
        this._chosenSection = {};
        this._edditedSectionsColors = {};
        this._sections = [];

        makeAutoObservable(this);
    };

    get isClicked() {
        return toJS(this._isClicked);
    };

    get isChosenSection() {
        return toJS(this._isChosenSections);
    };

    get isNewConfig() {
        return toJS(this._isNewConfig);
    };

    get chosenSection() {
        return toJS(this._chosenSection);
    };

    get edditedSectionsColors() {
        return toJS(this._edditedSectionsColors);
    };

    get sections() {
        return toJS(this._sections);
    };

    set isClicked(bool: boolean) {
        this._isClicked = bool;
    };

    set isChosenSection(bool: boolean) {
        this._isChosenSections = bool;
    };

    set isNewConfig(bool: boolean) {
        this._isNewConfig = bool;
    };

    set chosenSection(section: Sections) {
        this._chosenSection = section;
    };

    set edditedSectionsColors(changedColor: Color | any) {
        this._edditedSectionsColors[changedColor.title] = changedColor;
    };

    set sections(sections: Array<Sections>) {
        this._sections = sections;
    };

    isClickedHandler(bool: boolean) {
        const initialConfig = ConfigService.getConfig();
        
        if (!this.isClicked) {
            this._edditedSectionsColors = {};
        }

        this.isClicked = bool;

        if (this.isNewConfig) {
            return;
        }

        this.sections = initialConfig;
    };

    backTagClickHandler(bool: boolean) {
        this.isChosenSection = bool;
    };

    chosenSectionHandler(sectionLabel: string) {
        const result: any = this.sections.find((section: Sections) => section.label === sectionLabel);
        
        this.chosenSection = result;
        this.isChosenSectionHandler(true);
    };

    isChosenSectionHandler(bool: boolean) {
        this.isChosenSection = bool;
    };

    chosenSectionChangeColor(title: string, newColor: string) {
        const sectionColorToChange: Color | any = this.chosenSection.colors.find((color: Color) => color.title === title && color.color !== newColor);
        
        if (sectionColorToChange) {
            sectionColorToChange.color = newColor;
            this.edditedSectionsColors = sectionColorToChange;
        }  
    };

    saveNewConfig() {
        const result = this.sections.map((section: Sections) => {
            if (section.title === this.chosenSection.title) {
                return this.chosenSection;
            }

            return section;
        });

        this.sections = result;
    };

    applyNewConfig() {
        this.isClicked = false;
        this._isNewConfig = true;
    };
};