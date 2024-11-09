import { Container,   Table, TableData } from "@mantine/core";
import styles from "./CustomTable.module.css";

/**
 * 
 * 
 * @interface CustomTableProps
 * @tableData {TableData} - Table Data organised as Mantine UI tableData format.
 * 
 */
interface CustomTableProps {
  tableData: TableData;
}

const CustomTable = ({ tableData }: CustomTableProps) => {
  return (
    <Container size="xl" my={10}>
      <Table
        className={styles.table}
        data={tableData}
        highlightOnHover={true}
        withTableBorder={true}
        withColumnBorders={true}
        withRowBorders={true}
      />
    </Container>
  );
};

export default CustomTable;
