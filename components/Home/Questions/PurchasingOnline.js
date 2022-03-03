import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  margin: '10px 0',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white' }} />
    }
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

export default function PurchasingOnline() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: '#1e1f26',
          color: 'white',
          boxShadow: '0 20px 40px 0 rgb(4 73 89 / 10%)',
        }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            Is WooCommerce shop and Elementor builder available in Rogan?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, WooCommerce is integrated and fully functional in SaasLand. You
            can build your own store using SaasLand.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: '#1e1f26',
          color: 'white',
          boxShadow: '0 20px 40px 0 rgb(4 73 89 / 10%)',
        }}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            Is Rogan WordPress 5.0 compatible and GDPR ready?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, SaasLand is compatible with WordPress 5.0 and higher versions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: '#1e1f26',
          color: 'white',
          boxShadow: '0 20px 40px 0 rgb(4 73 89 / 10%)',
        }}
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            What page builder is integrated into Rogan WordPress Theme?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Rogan WordPress theme comes with “Elementor” which is a very
            advanced, drag-n-drop page builder.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ backgroundColor: '#1e1f26', color: 'white' }}
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            How many websites can I use Rogan in with a regular license?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            According to Envato’s licensing, you can use SaasLand or any other
            theme on only one website. If you want to use it on multiple
            websites, you must buy multiple licenses.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: '#1e1f26',
          color: 'white',
          boxShadow: '0 20px 40px 0 rgb(4 73 89 / 10%)',
        }}
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>
            Is there a warranty on my item or a guaranty on my item?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Volutpat? Magni labore dapibus minus unde fermentum illo nunc,
            vestibulum earum eveniet, ipsam urna, excepturi! Autem, proin quam
            tempora! Suscipit cupidatat vitae, vitae
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          backgroundColor: '#1e1f26',
          color: 'white',
          boxShadow: '0 20px 40px 0 rgb(4 73 89 / 10%)',
        }}
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>
            Where can I find instructions on how to use my watch?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wisi nam ridiculus sociosqu nascetur at cillum! Dolore adipiscing?
            Mattis ut repudiandae, alias sit felis urna aut non, est posuere,
            molestias esse montes vel, posuere asperiores? Magna nihil eligendi
            exercitationem aptent.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
