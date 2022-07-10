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

const createDependent = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/dependent/`, payload);
    return result;
  } catch (error) {
    return await error.result;
  }
};

const deletedDependent = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/dependent/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};
export default { listDependent, createDependent, deletedDependent };
