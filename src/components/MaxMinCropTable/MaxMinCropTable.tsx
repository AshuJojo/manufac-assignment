import { Table, TableData } from "@mantine/core";
import { ReactElement, useEffect, useState } from "react";
import { CropData } from "../../types/CropData";
import { getYearlyMaxMinProduction } from "../../utils/cropDataProcessing";

interface MaxMinCropTableProps {
  cropData: CropData[];
}

const MaxMinCropTable = ({ cropData }: MaxMinCropTableProps): ReactElement => {
  const [tableData, setTableData] = useState<TableData>({
    head: [
      "Year",
      "Crop with Maximum Production in that Year",
      "Crop with Minimum Production in that Year",
    ],
    body: [],
  });

  useEffect(() => {
    if (cropData && cropData.length > 0) {
      const maxMinCrop: (number | string)[][] =
        getYearlyMaxMinProduction(cropData);

      if (maxMinCrop.length > 0) {
        const newTableData: TableData = { ...tableData, body: maxMinCrop };
        setTableData(newTableData);
      }
    }
  }, [cropData]);

  if (!cropData || cropData.length === 0) return <></>;

  return <Table data={tableData} />;
};

export default MaxMinCropTable;
