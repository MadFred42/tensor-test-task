interface Icolor {
    color: string
}

export interface Iinfo {
    label: string,
    description: string;
    colors: Array<Icolor>;
};

export interface IcolorBlocks {
    type: string;
    label: string;
    info: Array<Iinfo>;
};