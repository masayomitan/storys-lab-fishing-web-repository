'use client'

import React, { useState, useEffect } from 'react'

import Layout from '../../../components/parts/Layout/layout'
import ArticleDetail from '../../../components/pages/Article/detail'
import { useParams } from "next/navigation"

const ArticleDetailPage = () => {
  const [articleId, setArticleId] = useState<string | null>(null)

  const params = useParams()

  useEffect(() => {
    if (params && params.id) {
      const id = params.id
      setArticleId(id as string)
    }
  }, [params])

  return (
    <Layout>
      <ArticleDetail 
        articleId={articleId}
      />
    </Layout>
  );
}

export default ArticleDetailPage
