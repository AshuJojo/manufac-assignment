import { ReactElement, useEffect } from "react";
import { CropDataTypes } from "../../types/CropDataType";
import { getYearlyMaxMinProduction } from "../../utils/cropDataProcessing";

interface MaxMinCropTableProps {
  cropData: CropDataTypes[];
}

const MaxMinCropTable = ({ cropData }: MaxMinCropTableProps): ReactElement => {
  useEffect(() => {
    console.log("MaxMinCropTable/data: ", cropData);

    const maxMinCrop = getYearlyMaxMinProduction(cropData);

    console.log("maxMinCrop: ", maxMinCrop);
  }, [cropData]);

  if (!cropData || cropData.length === 0) return <></>;

  return <div>MaxMinCropTable</div>;
};

export default MaxMinCropTable;
