import axiosInstance from '../../libs/api_clients/base';

export const getArticles = async () => {
  try {
    const res = await axiosInstance.get('/articles')
    return res.data
  } catch (error) {
    console.error('Error fetching articles:', error)
    throw error
  }
}

export const getArticleById = async (id: number) => {
  try {
    const res = await axiosInstance.get('/articles/' + id)
    return res.data
  } catch (error) {
    console.error('Error fetching fishes:', error)
    throw error
  }
}


export const getArticleByArticleCategoryId = async (id: number) => {
    try {
      const res = await axiosInstance.get('/article-categories/' + id)
      return res.data
    } catch (error) {
      console.error('Error fetching fishes:', error)
      throw error
    }
  }
  