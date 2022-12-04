type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc["length"]]>;
type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
export type ColorCode = Range<0, 255>;
export type RgbColor = {
    r: ColorCode;
    g: ColorCode;
    b: ColorCode;
};
export {};
