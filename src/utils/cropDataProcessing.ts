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

export const getCropAverageData = (data: CropData[]): (number | string)[][] => {
  const result: (number | string)[][] = [];
  const cropGroups: { [key: string]: CropData[] } = {};

  data.forEach((crop) => {
    if (!cropGroups[crop[CROP_DATA_TYPES_KEYS.CROP_NAME]]) {
      cropGroups[crop[CROP_DATA_TYPES_KEYS.CROP_NAME]] = [];
    }
    cropGroups[crop[CROP_DATA_TYPES_KEYS.CROP_NAME]].push(crop);
  });


  for (const [cropName, crops] of Object.entries(cropGroups)) {
    const totalYield: number = crops.reduce(
      (sum, crop) =>
        sum + (Number(crop[CROP_DATA_TYPES_KEYS.YIELD_OF_CROPS]) || 0),
      0
    );
    const totalArea: number = crops.reduce(
      (sum, crop) =>
        sum + (Number(crop[CROP_DATA_TYPES_KEYS.YIELD_OF_CROPS]) || 0),
      0
    );
    const count: number = crops.length;

    result.push([
      cropName,
      parseFloat((totalYield / count).toFixed(3)),
      parseFloat((totalArea / count).toFixed(3)),
    ]);
  }

  return result;
};
