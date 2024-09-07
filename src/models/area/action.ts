import axiosInstance from '../../libs/api_clients/base';
import { AREA } from '../../constants/url';

export const getAreaById = async (id: number) => {
  try {
    const res = await axiosInstance.get(AREA + id);
    return res.data;
  } catch (error) {
    console.error('Error fetching fishes:', error);
    throw error;
  }
}
