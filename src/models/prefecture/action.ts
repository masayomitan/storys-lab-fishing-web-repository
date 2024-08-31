import axiosInstance from '../../libs/api_clients/base';
import { PREFECTURE, PREFECTURES } from '../../constants/url';

export const getPrefectureById = async (id: number) => {
  try {
    const res = await axiosInstance.get(PREFECTURE + id);
    return res.data;
  } catch (error) {
    console.error('Error fetching prefectures:', error);
    throw error;
  }
}
