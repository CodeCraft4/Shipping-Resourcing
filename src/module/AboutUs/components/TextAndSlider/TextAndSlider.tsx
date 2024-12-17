import { Grid } from '@mui/material'
import AboutUsText from '../AboutUsText/AboutUsText'
import AboutSlider from '../AboutSlider/AboutSlider'

const TextAndSlider = () => {
  return (
    <>
    <Grid paddingY={'70px'} mx={'auto'}  container maxWidth={'1170px'}>
        <Grid item md={6} xs={12}>
<AboutUsText/>
        </Grid>
        <Grid item md={6} xs={12}>
<AboutSlider/>
</Grid> 

    </Grid>
      
    </>
  )
}

export default TextAndSlider
