export interface Coloring {
    error?: string;
    info?: string;
    debug?: string;
    success?: string;
}

export interface Overwrite {
    symbols?: [string, string];
    title?: string;
    color?: string;
}