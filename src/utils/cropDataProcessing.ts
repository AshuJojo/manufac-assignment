import { CROP_DATA_TYPES_KEYS } from "../constants/Constants";
import { CropData } from "../types/CropData";

/**
 *
 * @param data {CropData[]} - Crop Data Array
 * @returns result[][] - {[year: {number}, maxCrop: {string}, minCrop: {string}]}
 *
 */
export const getYearlyMaxMinProduction = (
  data: CropData[]
): (number | string)[][] => {
  // initialize an empty result array
  const result: (number | string)[][] = [];

  // filter unique years from crop data
  const years: number[] = Array.from(
    new Set(data.map((item) => Number(item.Year.split(",")[1])))
  );

  // sort year in ascending order
  years.sort((a, b) => a - b);

  // loop through each year
  years.forEach((year) => {
    // filter each year crop data
    const cropsInYear: CropData[] = data.filter(
      (item) => Number(item.Year.split(",")[1]) === year
    );

    //  initialize empty maxCrop string
    let maxCrop: string = "";

    //  initialize empty minCrop string
    let minCrop: string = "";

    // initialize max & min Production with -Infinity & Infinity, respectively
    let maxProduction: number = -Infinity;
    let minProduction: number = Infinity;

    // loop through each year crop data
    cropsInYear.forEach((crop) => {
      // get the crop production from Crop Data,
      // if the crop production is empty , set it to 0
      const production =
        Number(crop[CROP_DATA_TYPES_KEYS.CROP_PRODUCTION]) || 0;

      // if production of current crop is greater than previous max production,
      // change max production & maxCrop data
      if (production > maxProduction) {
        maxProduction = production;
        maxCrop = crop[CROP_DATA_TYPES_KEYS.CROP_NAME];
      }
      // if current production is less than minProduction & greater than 0,
      // change min production & minCrop data
      if (production < minProduction && production > 0) {
        minProduction = production;
        minCrop = crop[CROP_DATA_TYPES_KEYS.CROP_NAME];
      }
    });

    // push the yearly result into result array
    result.push([year, maxCrop, minCrop]);
  });

  // return result array with organized data
  return result;
};

/**
 *
 * @param data {CropData[]} - Crop Data Array
 * @returns result[][] - {[cropName: {string}, AvgYield: {number}, AvgArea: {number}]}
 *
 */
export const getCropAverageData = (data: CropData[]): (number | string)[][] => {
  // initialize empty result array
  const result: (number | string)[][] = [];

  // initialize empty cropGroup object
  const cropGroups: { [key: string]: CropData[] } = {};

  // loop over the crop data & push unique crop names into cropGroups Object
  data.forEach((crop) => {
    if (!cropGroups[crop[CROP_DATA_TYPES_KEYS.CROP_NAME]]) {
      cropGroups[crop[CROP_DATA_TYPES_KEYS.CROP_NAME]] = [];
    }
    cropGroups[crop[CROP_DATA_TYPES_KEYS.CROP_NAME]].push(crop);
  });

  // loop over the each entry of cropGroup Object
  for (const [cropName, crops] of Object.entries(cropGroups)) {
    // Calculate total yield for each crop
    const totalYield: number = crops.reduce(
      (sum, crop) =>
        sum + (Number(crop[CROP_DATA_TYPES_KEYS.YIELD_OF_CROPS]) || 0),
      0
    );

    // Calculate total Area of each crop
    const totalArea: number = crops.reduce(
      (sum, crop) =>
        sum + (Number(crop[CROP_DATA_TYPES_KEYS.YIELD_OF_CROPS]) || 0),
      0
    );

    // calculate total length of each crop array
    const count: number = crops.length;

    // push the result with each crop name into result array,
    // totalYield & totalArea values are fixed to 3 decimal places
    result.push([
      cropName,
      parseFloat((totalYield / count).toFixed(3)),
      parseFloat((totalArea / count).toFixed(3)),
    ]);
  }

  // return organized result
  return result;
};
