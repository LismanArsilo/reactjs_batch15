import axios from "axios";
import config from "../config/config";

const listCountry = async () => {
  try {
    const result = await axios.get(`${config.domain}/country/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

export default { listCountry };
