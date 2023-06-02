import { Wastes } from "./waste";


export function getWasteIcon(waste: string) {
  return {
    [Wastes.PLASTIC_AND_METALS]: "fa-solid fa-bottle-water",
    [Wastes.PAPER_AND_CARDBOARD]: "fa-solid fa-newspaper",
    [Wastes.ORGANIC]: "fa-solid fa-fish",
    [Wastes.GREEN]: "fa-solid fa-leaf",
    [Wastes.GLASS]: "fa-solid fa-glasses",
    [Wastes.DRY_RESIDUE]: "fa-solid fa-biohazard",
  }[waste];
}
