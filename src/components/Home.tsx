import { CropDataTypes } from "../types/CropDataType";
import { useEffect, useState } from "react";

const Home = () => {
  const [cropData, setCropData] = useState<CropDataTypes[]>([]);

  console.log("cropData", cropData);

  useEffect(() => {
    import("../data/data.json").then((data) => {
      setCropData(data?.default);
    });
  }, []);

  return <div>Home</div>;
};

export default Home;
