import AvgCrop from "../AvgCrop/AvgCrop";
import MaxMinCrop from "../MaxMinCrop/MaxMinCrop";
import { CropData } from "../../types/CropData";
import { useEffect, useState } from "react";
import { Container, Tabs } from "@mantine/core";
import styles from "./Home.module.css";
import { useScrollIntoView } from "@mantine/hooks";

const Home = () => {
  const [cropData, setCropData] = useState<CropData[]>([]);

  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  const handleTabClick = () => {
    scrollIntoView();
  };

  useEffect(() => {
    import("../../data/data.json").then((data) => {
      setCropData(data?.default);
    });
  }, []);

  return (
    <Container size="xl" my={10}>
      <Tabs
        ref={targetRef}
        className={styles.tabs}
        variant="unstyled"
        defaultValue="maxMinCrop"
      >
        <Tabs.List className={styles.tabsList} grow>
          <Tabs.Tab value="maxMinCrop" onClick={handleTabClick}>
            Max & Min Crop Production
          </Tabs.Tab>
          <Tabs.Tab value="avgCrop" onClick={handleTabClick}>
            Average Crop
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="maxMinCrop" my={10}>
          <MaxMinCrop cropData={cropData} />
        </Tabs.Panel>

        <Tabs.Panel value="avgCrop" my={10}>
          <AvgCrop cropData={cropData} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};

export default Home;
