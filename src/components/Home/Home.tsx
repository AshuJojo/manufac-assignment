import AvgCropTable from "../AvgCropTable/AvgCropTable";
import MaxMinCropTable from "../MaxMinCropTable/MaxMinCropTable";
import { CropData } from "../../types/CropData";
import { useEffect, useState } from "react";
import { Container, Tabs } from "@mantine/core";
import styles from "./Home.module.css";

const Home = () => {
  const [cropData, setCropData] = useState<CropData[]>([]);

  useEffect(() => {
    import("../../data/data.json").then((data) => {
      setCropData(data?.default);
    });
  }, []);

  return (
    <Container size="xl" my={10}>
      <Tabs
        className={styles.tabs}
        variant="unstyled"
        defaultValue="maxMinCrop"
      >
        <Tabs.List className={styles.tabsList} grow>
          <Tabs.Tab value="maxMinCrop">Max & Min Crop Production</Tabs.Tab>
          <Tabs.Tab value="avgCrop">Average Crop</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="maxMinCrop" my={10}>
          <MaxMinCropTable cropData={cropData} />
        </Tabs.Panel>

        <Tabs.Panel value="avgCrop" my={10}>
          <AvgCropTable cropData={cropData} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default Home;
