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

export default function License() {
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
            What is your refund policy and terms and conditions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We comply fully with Envato’s refund policy. We issue refunds for
            the reasons Envato permits us to give refund and we don’t issue
            refunds on the cases Envato does not guarantee refunds.
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
            How many shortcodes/blocks/elements are there in Rogan?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            There are over 200 shortcodes/blocks/elements in Rogan WordPress
            Theme. You can use any block/element into any page as you want.
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
          <Typography>
            Is Rogan Gutenberg comptible and latest WordPress supported?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes, SaasLand is compatible with Gutenberg.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="drop-shadow-[0_35px_35px_rgba(25,35,43,1)]"
        sx={{ backgroundColor: '#1e1f26', color: 'white' }}
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            How many websites can I use Rogan in with a reular license?
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
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            Is there a warranty on my item or a guaranty on my item?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Volutpat? Magni labore dapibus minus unde fermentum illo nunc,
            vestibulum earum eveniet, ipsam urna, excepturi! Autem, proin quam
            tempora! Suscipit cupidatat vitae, vitae.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
