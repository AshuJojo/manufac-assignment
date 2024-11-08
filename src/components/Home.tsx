import { CropData } from "../types/CropData";
import { useEffect, useState } from "react";
import MaxMinCropTable from "./MaxMinCropTable/MaxMinCropTable";
import AvgCropTable from "./AvgCropTable/AvgCropTable";

const Home = () => {
  const [cropData, setCropData] = useState<CropData[]>([]);

  useEffect(() => {
    import("../data/data.json").then((data) => {
      setCropData(data?.default);
    });
  }, []);

  return (
    <div>
      {/* <MaxMinCropTable cropData={cropData} /> */}
      <AvgCropTable cropData={cropData} />
    </div>
  );
};

export default Home;
