import { CROP_DATA_TYPES_KEYS } from "../constants/Constants";

/**
 *
 * @interface CropData
 *
 * @Country {string} - Country from Crop Data.
 * @Year {string} - Year of Crop Data.
 * @["Crop Name"] {string} - Crop Name from Crop Data.
 * @["Crop Production (UOM:t(Tonnes))"] {string} - Crop Production value in (UOM:t(tonnes)) from Crop Data.
 * @[Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))] {string} - Yield of Crops in (UOM: kg/Ha(KilogramperHectare)) from Crop Data.
 * @[Area Under Cultivation (UOM:Ha(Hectares))] {string} - Area Under Cultivation in (UOM: Ha(Hectares)) from Crop Data.
 *
 */
export interface CropData {
  Country: string;
  Year: string;
  [CROP_DATA_TYPES_KEYS.CROP_NAME]: string;
  [CROP_DATA_TYPES_KEYS.CROP_PRODUCTION]: number | string;
  [CROP_DATA_TYPES_KEYS.YIELD_OF_CROPS]: number | string;
  [CROP_DATA_TYPES_KEYS.AREA_UNDER_CULTIVATION]: number | string;
}
