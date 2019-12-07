import axios from "axios";

export const fetchTemp = async (req, res, next) => {
  const response = await axios.get(
    "https://gyokuro.chao.tokyo/api/temperature"
  );
  req.temp = response.data.data;
  next();
};
