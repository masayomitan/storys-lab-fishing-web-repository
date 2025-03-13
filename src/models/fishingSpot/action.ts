import axiosInstance from '../../libs/api_clients/base'

export const getFishingSpotById = async (id: number) => {
  try {
    const res = await axiosInstance.get('/fishing-spots/' + id)
    return res.data
  } catch (error) {
    console.error('Error fetching fishes:', error)
    throw error
  }
}

export const getFishingSpotByAreaId = async (area_id: number) => {
  try {
    const res = await axiosInstance.get('/fishing-spots/area/' + area_id)
    return res.data
  } catch (error) {
    console.error('Error fetching fishes:', error)
    throw error
  }
}
