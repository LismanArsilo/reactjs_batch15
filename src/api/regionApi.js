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

const createRegion = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/region/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const deletedRegion = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/region/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

export default { listRegion, createRegion, deletedRegion };
