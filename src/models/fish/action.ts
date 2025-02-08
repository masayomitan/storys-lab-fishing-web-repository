import axiosInstance from '../../libs/api_clients/base'

export const getFishes = async () => {
  try {
    const res = await axiosInstance.get('/fishes')
    return res.data
  } catch (error) {
    console.error('Error fetching fishes:', error)
    throw error
  }
}

export const getFishById = async (id: number) => {
  try {
    const res = await axiosInstance.get('/fishes/' + id)
    return res.data
  } catch (error) {
    console.error('Error fetching fishes:', error)
    throw error
  }
}
