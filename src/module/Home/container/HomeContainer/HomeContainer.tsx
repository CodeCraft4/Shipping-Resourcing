import HomeCards from '../../components/HomeCards/HomeCards'
import LogisticsFields from '../../components/LogisticsFields/LogisticsFields'
import { Box } from '@mui/material'
import HomeSlider from '../../components/HomeSlider/HomeSlider'

const HomeContainer = () => {
  return (
    <Box component={'section'}>
    {<HomeSlider/>}
    {<HomeCards/>}
    {<LogisticsFields/>}
      
    </Box>
  )
}

export default HomeContainer
