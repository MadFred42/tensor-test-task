export interface Color {
    color: string,
    description: string,
    title: string
};

export interface Sections {
    description: string;
    colors: Array<Color>;
    label: string;
    title: string;
};