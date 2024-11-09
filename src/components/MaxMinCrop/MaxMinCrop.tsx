import { TableData } from "@mantine/core";
import { ReactElement, useEffect, useState } from "react";
import { CropData } from "../../types/CropData";
import { getYearlyMaxMinProduction } from "../../utils/cropDataProcessing";
import CustomTable from "../ui/CustomTable";

/**
 * 
 * @interface MaxMinCropProps
 * @cropData {CropData[]} - Raw Crop Data.
 * 
 */
interface MaxMinCropProps {
  cropData: CropData[];
}

const MaxMinCrop = ({ cropData }: MaxMinCropProps): ReactElement => {

  // TableData state for passing in Table component
  // organised to pass directly into Mantine's tableData structure.
  const [tableData, setTableData] = useState<TableData>({
    head: [
      "Year",
      "Crop with Maximum Production in that Year",
      "Crop with Minimum Production in that Year",
    ],
    body: [],
  });

  // Perform side effect on every time the cropData changes
  useEffect(() => {
    if (cropData && cropData.length > 0) {
      const maxMinCrop: (number | string)[][] =
        getYearlyMaxMinProduction(cropData);

      if (maxMinCrop.length > 0) {
        // if maxMinCrop is not empty, create a new table data object,
        // & set new table data state.
        const newTableData: TableData = { ...tableData, body: maxMinCrop };
        setTableData(newTableData);
      }
    }
  }, [cropData]);

  // if cropData is empty, return empty ReactNode
  if (!cropData || cropData.length === 0) return <></>;

  return <CustomTable tableData={tableData} />;
};

export default MaxMinCrop;
