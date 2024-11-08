import { useEffect, useState } from "react";
import { CropDataTypes } from "../types/CropDataType";
import { YearlyProductionDataType } from "../types/YearlyProductionDataType";
import { getYearlyMaxMinProduction } from "../utils/cropDataProcessing";

const useCropData = (cropData: CropDataTypes[]): YearlyProductionDataType[] => {
  const [yearlyProductionData, setYearlyProductionData] = useState<
    YearlyProductionDataType[]
  >([]);

  useEffect(() => {
    if (cropData && cropData.length > 0)
      setYearlyProductionData(getYearlyMaxMinProduction(cropData));
  }, [cropData]);

  return yearlyProductionData;
};

export default useCropData;
