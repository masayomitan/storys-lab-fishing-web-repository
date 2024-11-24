import axiosInstance from '../../libs/api_clients/base';

export const getTools = async () => {
  try {
    const res = await axiosInstance.get('tools')
    return res.data
  } catch (error) {
    console.error('Error fetching tools:', error)
    throw error
  }
}

export const getToolById = async (id: number) => {
  try {
    const res = await axiosInstance.get('/tools/' + id)
    return res.data
  } catch (error) {
    console.error('Error fetching tool:', error)
    throw error
  }
}
