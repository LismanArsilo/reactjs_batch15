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

const createJob = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/job/`, payload);
    return result;
  } catch (error) {
    return await error.messagge;
  }
};

const deletedJob = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/job/${id}`);
    return result;
  } catch (error) {
    return await error.messagge;
  }
};

export default { listJob, createJob, deletedJob };
