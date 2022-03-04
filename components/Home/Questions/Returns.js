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

export default function Returns() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        // sx={{ backgroundColor: '#1e1f26', color: 'white',boxShadow:'0 20px 40px 0 rgb(4 73 89 / 10%)' }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className="bg-slate-200 text-Docy-Dark dark:bg-Docy-Dark dark:text-slate-100"
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
        // sx={{
        //   backgroundColor: '#1e1f26',
        //   color: 'white',
        //   boxShadow: '0 20px 40px 0 rgb(4 73 89 / 10%)',
        // }}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        className="bg-slate-200 text-Docy-Dark dark:bg-Docy-Dark dark:text-slate-100"
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            What will happen if my support is expired after purchasing my item?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            After the 6-month period is over you can buy extended support. You
            can buy extended support in the beginning, too. I that case you get
            a 1-year support in total.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        // sx={{
        //   backgroundColor: '#1e1f26',
        //   color: 'white',
        //   boxShadow: '0 20px 40px 0 rgb(4 73 89 / 10%)',
        // }}
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        className="bg-slate-200 text-Docy-Dark dark:bg-Docy-Dark dark:text-slate-100"
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            Is the price of the theme one-time or recurring(monthly/yearly)?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The payment is one-time. After you pay the one-time price of the
            theme, you will never be charged for it. But you can buy extended
            support after your support expires after 6 months.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        // sx={{
        //   backgroundColor: '#1e1f26',
        //   color: 'white',
        //   boxShadow: '0 20px 40px 0 rgb(4 73 89 / 10%)',
        // }}
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        className="bg-slate-200 text-Docy-Dark dark:bg-Docy-Dark dark:text-slate-100"
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
      <Accordion
        // sx={{
        //   backgroundColor: '#1e1f26',
        //   color: 'white',
        //   boxShadow: '0 20px 40px 0 rgb(4 73 89 / 10%)',
        // }}
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
        className="bg-slate-200 text-Docy-Dark dark:bg-Docy-Dark dark:text-slate-100"
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>How do I repair an item on envato market?</Typography>
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
