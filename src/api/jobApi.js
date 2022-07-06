import axios from "axios";
import config from "../config/config";

const listJob = async () => {
  try {
    const result = await axios.get(`${config.domain}/job/`);
    return result.data;
  } catch (error) {
    return await error.messagge;
  }
};

export default { listJob };
