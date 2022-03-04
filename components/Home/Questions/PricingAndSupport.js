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

export default function PricingAndSupport() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        // sx={{
        //   backgroundColor: '#1e1f26',
        //   color: 'white',
        //   boxShadow: '0 20px 40px 0 rgb(4 73 89 / 10%)',
        // }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className="bg-slate-200 text-Docy-Dark dark:bg-Docy-Dark dark:text-slate-100"
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
            Is the theme supported WPML ad MailChimp Subscribe form?
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
    </div>
  )
}
