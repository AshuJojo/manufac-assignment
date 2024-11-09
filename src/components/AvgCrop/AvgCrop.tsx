import { TableData } from "@mantine/core";
import { ReactElement, useEffect, useState } from "react";
import { CropData } from "../../types/CropData";
import { getCropAverageData } from "../../utils/cropDataProcessing";
import CustomTable from "../ui/CustomTable";

interface AvgCropProps {
  cropData: CropData[];
}

const AvgCrop = ({ cropData }: AvgCropProps): ReactElement => {
  const [tableData, setTableData] = useState<TableData>({
    head: [
      "Year",
      "Average Yield of the Crop between 1950-2020",
      "Average Cultivation Area of the Crop between 1950-2020",
    ],
    body: [],
  });

  useEffect(() => {
    if (cropData && cropData.length > 0) {
      const avgCropData: (number | string)[][] = getCropAverageData(cropData);

      if (avgCropData.length > 0) {
        const newTableData: TableData = { ...tableData, body: avgCropData };
        setTableData(newTableData);
      }
    }
  }, [cropData]);

  if (!cropData || cropData.length === 0) return <></>;

  return <CustomTable tableData={tableData} />;
};

export default AvgCrop;
