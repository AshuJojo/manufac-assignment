import { Table, TableData } from "@mantine/core";

interface CustomTableProps {
  tableData: TableData;
}

const CustomTable = ({ tableData }: CustomTableProps) => {
  return <Table data={tableData} />;
};

export default CustomTable;
