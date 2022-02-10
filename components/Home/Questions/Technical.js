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

export default function Technical() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        className="drop-shadow-[0_35px_35px_rgba(25,35,43,1)]"
        sx={{ backgroundColor: '#1e1f26', color: 'white' }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            What things and what area are covered in support?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In brief, we are responsible for the features that are advertised in
            the theme. So we will do the following: <br />– Solve bugs if there
            is any (bug means if any feature is not working as it should) <br />
            – If you have any question we will answer it <br /> – After your
            installation if you face any issues/bugs, we can look <br /> into
            your website or server, but we don’t guarantee any solution or
            custom works there.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="drop-shadow-[0_35px_35px_rgba(25,35,43,1)]"
        sx={{ backgroundColor: '#1e1f26', color: 'white' }}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
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
        className="drop-shadow-[0_35px_35px_rgba(25,35,43,1)]"
        sx={{ backgroundColor: '#1e1f26', color: 'white' }}
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
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
