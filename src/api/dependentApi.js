import axios from "axios";
import config from "../config/config";

const listDependent = async () => {
  try {
    const result = await axios.get(`${config.domain}/dependent/`);
    return result.data;
  } catch (error) {
    return await error.massage;
  }
};

export default { listDependent };
