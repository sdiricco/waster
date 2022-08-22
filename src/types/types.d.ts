export enum WasteEnum {
    MULTIMATERIAL = 'MULTIMATERIAL',
    PAPER = 'PAPER',
    GLASS = 'GLASS',
    UNDIFFERENTIATED = 'UNDIFFERENTIATED',
    ORGANIC = 'ORGANIC',
    DIAPERS = 'DIAPERS',
}

export interface Waste {
    0: WasteEnum;
    1: WasteEnum;
    2: WasteEnum;
    2: WasteEnum;
}
   