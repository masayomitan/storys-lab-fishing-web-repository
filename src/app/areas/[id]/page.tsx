'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

import Layout from '../../../components/parts/Layout/layout'
import AreaDetail from '../../../components/pages/Area/detail'

const FishingSpotPage = () => {
  const [areaId, setAreaId] = useState<string | null>(null)
  const params = useParams()

  useEffect(() => {
    if (params && params.id) {
      const fishingSpotId = params.id
      setAreaId(fishingSpotId as string)
    } 
  }, [params])

  return (
    <Layout>
      <AreaDetail
        areaId={areaId}
      />
    </Layout>
  )
}

export default FishingSpotPage
