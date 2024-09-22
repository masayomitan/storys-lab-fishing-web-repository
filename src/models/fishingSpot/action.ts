import axiosInstance from '../../libs/api_clients/base';

export const getFishingSpotById = async (id: number) => {
  try {
    const res = await axiosInstance.get('/fishing-spots/' + id);
    return res.data;
  } catch (error) {
    console.error('Error fetching fishes:', error);
    throw error;
  }
}

export const getFishingSpotByAreaId = async (id: number) => {
  try {
    const res = await axiosInstance.get('/fishing-spots/area/' + id);
    return res.data;
  } catch (error) {
    console.error('Error fetching fishes:', error);
    throw error;
  }
}
