import axios from "axios";
import config from "../config/config";

const listRegion = async () => {
  try {
    const result = await axios.get(`${config.domain}/region/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

export default { listRegion };
