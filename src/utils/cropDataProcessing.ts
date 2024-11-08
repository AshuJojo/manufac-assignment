import { CROP_DATA_TYPES_KEYS } from "../constants/Constants";
import { CropData } from "../types/CropData";

export const getYearlyMaxMinProduction = (
  data: CropData[]
): (number | string)[][] => {
  const result: (number | string)[][] = [];

  const years: number[] = Array.from(
    new Set(data.map((item) => Number(item.Year.split(",")[1])))
  );

  years.sort((a, b) => a - b);

  years.forEach((year) => {
    const cropsInYear: CropData[] = data.filter(
      (item) => Number(item.Year.split(",")[1]) === year
    );

    let maxCrop: string = "";
    let minCrop: string = "";
    let maxProduction: number = -Infinity;
    let minProduction: number = Infinity;

    cropsInYear.forEach((crop) => {
      const production =
        Number(crop[CROP_DATA_TYPES_KEYS.CROP_PRODUCTION]) || 0;
      if (production > maxProduction) {
        maxProduction = production;
        maxCrop = crop[CROP_DATA_TYPES_KEYS.CROP_NAME];
      }
      if (production < minProduction && production > 0) {
        minProduction = production;
        minCrop = crop[CROP_DATA_TYPES_KEYS.CROP_NAME];
      }
    });

    result.push([year, maxCrop, minCrop]);
  });

  return result;
};
