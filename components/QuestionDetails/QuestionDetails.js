import QDHeroSection from './QDHeroSection'
import QDMainDetails from './QDMainDetails'

const QuestionDetails = (props) => {
  console.log(props.question)
  return (
    <div>
      <QDHeroSection question={props.question}></QDHeroSection>
      <QDMainDetails question={props.question}></QDMainDetails>
    </div>
  )
}

export default QuestionDetails
