import { CropDataTypes } from "../types/CropDataType";
import { useEffect, useState } from "react";
import MaxMinCropTable from "./MaxMinCropTable/MaxMinCropTable";

const Home = () => {
  const [cropData, setCropData] = useState<CropDataTypes[]>([]);

  useEffect(() => {
    import("../data/data.json").then((data) => {
      setCropData(data?.default);
    });
  }, []);

  return (
    <div>
      <MaxMinCropTable cropData={cropData} />
    </div>
  );
};

export default Home;
