import { makeAutoObservable, toJS } from "mobx";
import { Sections } from "../types/types";

export default class MainStore {
    _isClicked: boolean;
    _isChosenSections: boolean;
    _sections: Array<Sections>;
    _chosenSection: Sections | any;

    constructor() {
        this._isClicked = false;
        this._isChosenSections = false;
        this._sections = [
            {
                title: 'Цвета меню',
                label: 'Оформление меню',
                description: 'Настройте цвета меню',
                colors: [
                    {color: '#2B3D4F', title: 'Фон меню', description: 'Цвет заливки основного фона'},
                    {color: '#FFFFFF', title: 'Текст раздела', description: 'Цвет текста разделов главного меню'},
                    {color: '#5286CA', title: 'Маркер', description: 'Цвет выбранного раздела меню'},
                    {color: '#2B3D4F', title: 'Иконка раздела', description: 'Цвет иконки в главном меню'},
                ]
            },
            {
                title: 'Базовые элементы',
                label: 'Базовые элементы',
                description: 'Цвета крупных элементов интерфейса',
                colors: [
                    {color: '#333333', title: 'Заголовок и текст', description: 'Отличть заголовки от текста'},
                    {color: '#8A91A7', title: 'Метки', description: 'Подписи полей ввода и таблиц'},
                    {color: '#587AB0', title: 'Иконки', description: 'Цвета иконок'},
                    {color: '#FFFFFF', title: 'Рабочая область', description: 'Фон базовых элементов'},
                ]
            },
            {
                title: 'Цвета уведомлений',
                label: 'Уведомления',
                description: 'Цвета всплывающих подсказок',
                colors: [
                    {color: '#449637', title: 'Успех', description: 'При положительном результате'},
                    {color: '#C15652', title: 'Опасность', description: 'Ограничить возможности'},
                    {color: '#F6C75A', title: 'Предупреждение', description: 'Для предупредительных сообщений'},
                    {color: '#5659CE', title: 'Информационный', description: 'Донесет материал'},
                ]
            },
        ];
        this._chosenSection = {};

        makeAutoObservable(this);
    };

    get chosenSections() {
        return toJS(this._chosenSection);
    };

    get isClicked() {
        return toJS(this._isClicked);
    };

    get isChosenSection() {
        return toJS(this._isChosenSections);
    };

    get sections() {
        return toJS(this._sections);
    };

    set chosenSection(section: Sections) {
        this._chosenSection = section;
    };

    set isClicked(bool: boolean) {
        this._isClicked = bool;
    };

    set isChosenSection(bool: boolean) {
        this._isChosenSections = bool;
    }

    isClickedHandler(bool: boolean) {
        this.isClicked = bool;
    };

    backTagClickHandler(bool: boolean) {
        this.isChosenSection = bool;
    };

    chosenSectionHandler(sectionLabel: string) {
        const result: any = this.sections.find((section: Sections) => section.label === sectionLabel);
        this.chosenSection = result;
        this.isChosenSection = true;
    };

    isChosenSectionHandler(bool: boolean) {
        this.isChosenSection = bool;
    }
}