import axiosInstance from '../../libs/api_clients/base'

export const getEvents = async () => {
  try {
    const res = await axiosInstance.get('/events')
    return res.data
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}

export const getEventById = async (id: number) => {
  try {
    const res = await axiosInstance.get('/events/' + id)
    return res.data
  } catch (error) {
    console.error('Error fetching fishes:', error)
    throw error
  }
}
