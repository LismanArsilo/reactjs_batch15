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

const createLocation = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/location/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const deletedLocation = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/location/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

export default { listLocation, createLocation, deletedLocation };
