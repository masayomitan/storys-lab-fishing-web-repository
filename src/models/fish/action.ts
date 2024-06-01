import axiosInstance from '../../libs/api_clients/base';
import { FISH, FISHES } from '../../constants/url';

export const getFishes = async () => {
  try {
    const res = await axiosInstance.get(FISHES);
    return res.data;
  } catch (error) {
    console.error('Error fetching fishes:', error);
    throw error;
  }
}

export const getFishById = async (id: number) => {
  try {
    const res = await axiosInstance.get(FISHES + "/" + id);
    return res.data;
  } catch (error) {
    console.error('Error fetching fishes:', error);
    throw error;
  }
}
