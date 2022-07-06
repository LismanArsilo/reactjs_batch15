import axios from "axios";
import config from "../config/config";

const listLocation = async () => {
  try {
    const result = await axios.get(`${config.domain}/location/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

export default { listLocation };
