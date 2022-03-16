import QDHeroSection from './QDHeroSection'
import QDMainDetails from './QDMainDetails'

const QuestionDetails = (props) => {
  return (
    <div>
      <QDHeroSection question={props.question}></QDHeroSection>
      <QDMainDetails question={props.question}></QDMainDetails>
    </div>
  )
}

export default QuestionDetails
