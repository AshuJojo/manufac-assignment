import { CROP_DATA_TYPES_KEYS } from "../constants/Constants";
import { CropDataTypes } from "../types/CropDataType";

export const getYearlyMaxMinProduction = (data: CropDataTypes[]) => {
  const result: { year: number; maxCrop: string; minCrop: string }[] = [];

  const years = Array.from(
    new Set(data.map((item) => Number(item.Year.split(",")[1])))
  );

  years.sort((a, b) => a - b);

  years.forEach((year) => {
    const cropsInYear = data.filter(
      (item) => Number(item.Year.split(",")[1]) === year
    );

    let maxCrop = "";
    let minCrop = "";
    let maxProduction = -Infinity;
    let minProduction = Infinity;

    cropsInYear.forEach((crop) => {
      const production =
        Number(crop[CROP_DATA_TYPES_KEYS.CROP_PRODUCTION]) || 0;
      if (production > maxProduction) {
        maxProduction = production;
        maxCrop = crop["Crop Name"];
      }
      if (production < minProduction && production > 0) {
        minProduction = production;
        minCrop = crop["Crop Name"];
      }
    });

    result.push({ year, maxCrop, minCrop });
  });

  return result;
};
