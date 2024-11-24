import axiosInstance from '../../libs/api_clients/base'

export const getToolCategories = async () => {
  try {
    const res = await axiosInstance.get('/tool-categories')
    return res.data
  } catch (error) {
    console.error('Error fetching tool-categories:', error)
    throw error
  }
}
