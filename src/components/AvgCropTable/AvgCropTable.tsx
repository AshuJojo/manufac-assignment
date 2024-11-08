import { Table, TableData } from "@mantine/core";
import { ReactElement, useEffect, useState } from "react";
import { CropData } from "../../types/CropData";

interface AvgCropTableProps {
  cropData: CropData[];
}

const AvgCropTable = ({ cropData }: AvgCropTableProps): ReactElement => {
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
    //   const maxMinCrop: (number | string)[][] =
    //     getYearlyMaxMinProduction(cropData);

    //   if (maxMinCrop.length > 0) {
    //     const newTableData: TableData = { ...tableData, body: maxMinCrop };
    //     setTableData(newTableData);
    //   }
    }
  }, [cropData]);

  if (!cropData || cropData.length === 0) return <></>;

  return <Table data={tableData} />;
};

export default AvgCropTable;
