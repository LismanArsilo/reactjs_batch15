import axios from "axios";
import config from "../config/config";

const listEmployee = async () => {
  try {
    const result = await axios.get(`${config.domain}/employee/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const image = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/employee/file/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const createEmployee = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/employee/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const deletedEmployee = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/employee/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/employee/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const editEmployee = async (payload) => {
  const employee_id = parseInt(payload.get("employee_id"));
  try {
    const result = await axios.put(
      `${config.domain}/employee/${employee_id}`,
      payload
    );
    return result;
  } catch (error) {
    return await error.message;
  }
};

export default {
  listEmployee,
  deletedEmployee,
  createEmployee,
  findOne,
  editEmployee,
  image,
};
