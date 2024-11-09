import { TableData } from "@mantine/core";
import { ReactElement, useEffect, useState } from "react";
import { CropData } from "../../types/CropData";
import { getCropAverageData } from "../../utils/cropDataProcessing";
import CustomTable from "../ui/CustomTable";

/**
 * 
 * @interface AvgCropProps
 * @cropData {CropData[]} - Raw Crop Data.
 * 
 */
interface AvgCropProps {
  cropData: CropData[];
}

const AvgCrop = ({ cropData }: AvgCropProps): ReactElement => {
  
  // TableData state for passing in Table component
  // organised to pass directly into Mantine's tableData structure.
  const [tableData, setTableData] = useState<TableData>({
    head: [
      "Year",
      "Average Yield of the Crop between 1950-2020",
      "Average Cultivation Area of the Crop between 1950-2020",
    ],
    body: [],
  });

  // Perform side effect on every time the cropData changes
  useEffect(() => {
    if (cropData && cropData.length > 0) {
      const avgCropData: (number | string)[][] = getCropAverageData(cropData);

      if (avgCropData.length > 0) {
        // if avgCropData is not empty, create a new table data object,
        // & set new table data state.
        const newTableData: TableData = { ...tableData, body: avgCropData };
        setTableData(newTableData);
      }
    }
  }, [cropData]);

  // if cropData is empty, return empty ReactNode
  if (!cropData || cropData.length === 0) return <></>;

  return <CustomTable tableData={tableData} />;
};

export default AvgCrop;
