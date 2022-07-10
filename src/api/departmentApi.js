import axios from "axios";
import config from "../config/config";

const listDepartment = async () => {
  try {
    const result = await axios.get(`${config.domain}/department/`);
    return result.data;
  } catch (error) {
    return error.message;
  }
};

const createDepartment = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/department/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const deletedDepartment = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/department/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

export default { listDepartment, createDepartment, deletedDepartment };
