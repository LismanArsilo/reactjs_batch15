import axios from "axios";
import config from "../config/config";

const listDepartment = async () => {
  try {
    const result = await axios.get(`${config.domain}/department`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};

export default { listDepartment };
