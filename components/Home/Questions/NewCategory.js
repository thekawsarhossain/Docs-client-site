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

export default function NewCategory() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        className="drop-shadow-[0_35px_35px_rgba(25,35,43,1)]"
        sx={{ backgroundColor: '#1e1f26', color: 'white',boxShadow:'0 20px 40px 0 rgb(4 73 89 / 10%)' }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            Is the theme supported WPML and MailChimp Subscribe form?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, SaasLand comes with ThemeForest’s standard 6 months support. We
            conduct the support via theme’s “Comments” section and also our
            support ticketing system.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       
        sx={{ backgroundColor: '#1e1f26', color: 'white',boxShadow:'0 20px 40px 0 rgb(4 73 89 / 10%)' }}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>How do I repair an Item on envato market?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Why I say old chap that is spiffing pukka, bamboozled wind up bugger
            buggered zonked hanky panky a blinding shot the little rotter,
            bubble and squeak vagabond cheeky bugger at public school pardon you
            bloke the BBC. Tickety-boo Elizabeth plastered matie.!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
