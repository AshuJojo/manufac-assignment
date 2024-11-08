import { CROP_DATA_TYPES_KEYS } from "../constants/Constants";

export interface CropDataTypes {
  Country: string;
  Year: string;
  [CROP_DATA_TYPES_KEYS.CROP_NAME]: string;
  [CROP_DATA_TYPES_KEYS.CROP_PRODUCTION]: number | string;
  [CROP_DATA_TYPES_KEYS.YIELD_OF_CROPS]: number | string;
  [CROP_DATA_TYPES_KEYS.AREA_UNDER_CULTIVATION]: number | string;
}