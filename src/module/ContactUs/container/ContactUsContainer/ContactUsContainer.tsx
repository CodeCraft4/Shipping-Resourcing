import ContactBanner from '../../components/ContactBanner/ContactBanner'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import { Box } from '@mui/material'
import LocationMap from '../../components/LocationMap/LocationMap'


const ContactUsContainer = () => {
  return (
    <Box component={'section'} >
    <ContactBanner/>
    <LocationMap/>
   <ContactInfo/>
      
    </Box>
  )
}

export default ContactUsContainer
