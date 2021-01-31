export interface Coloring {
    fatal?: string;
    error?: string;
    info?: string;
    debug?: string;
    success?: string;
}

export interface Overwrite {
    symbols?: [string, string];
    title?: string;
    color?: string;
    titleUnderline?: boolean;
    underline?: boolean;
    date?: {
        show?: boolean;
        format?: string;
    }
}