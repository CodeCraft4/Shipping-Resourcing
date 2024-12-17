import { Box } from '@mui/material'

const LocationMap = () => {
  return (
    <Box sx={{ maxWidth: '1100px',mx:'auto',paddingTop:'70px' }}>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.4730181676227!2d28.33373731064101!3d-26.148720177015328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e953d2d0e19f61b%3A0x204c1746a0a73da1!2sShipping%20%26%20Sourcing%20CC!5e0!3m2!1sen!2s!4v1734334848477!5m2!1sen!2s" 
      
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade" 
      style={{ height: '450px', width:'100%' }}
    ></iframe>
  </Box>
  
  )
}

export default LocationMap
