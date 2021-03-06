import axios from "axios";
import config from "../config/config";

const listCountry = async () => {
  try {
    const result = await axios.get(`${config.domain}/country/`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const createCountry = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/country/`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const deletedCountry = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/country/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const findOne = async (id) => {
  try {
    const result = await axios.get(`${config.domain}/country/${id}`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const editCountry = async (data) => {
  try {
    const result = await axios.put(
      `${config.domain}/country/${data.country_id}`,
      data
    );
    return result;
  } catch (error) {
    return await error.message;
  }
};

export default {
  listCountry,
  createCountry,
  deletedCountry,
  findOne,
  editCountry,
};
