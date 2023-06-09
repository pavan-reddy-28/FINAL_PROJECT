import React from 'react'
import styled from 'styled-components'
import RecipeReviewCard from '../DashboardCards/ProductCards'

const MainNav = styled.div`
margin-left: 240px;
position: absolute;
`

function DashboardPage() {
  return (
<MainNav>
    <h1>
        Dashboard
    </h1>
    <div>
    <RecipeReviewCard/>
    </div>
</MainNav>
  )
}

export default DashboardPage