import axios from "axios";
import config from "../config/config";

const listProject = async () => {
  try {
    const result = await axios.get(`${config.domain}/project/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

export default { listProject };
