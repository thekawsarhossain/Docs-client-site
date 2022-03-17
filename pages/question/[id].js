import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import QuestionDetails from '../../components/QuestionDetails/QuestionDetails'
import { fetchQuestion } from '../../Redux/Slices/questionSlice'
import { useRouter } from 'next/router'

const Question = () => {
  // react redux hook here
  const dispatch = useDispatch()

  // next js hooks for dynamic routuing
  const router = useRouter()
  const id = router.query.id
  console.log(id)

  // calling specfic blog depend on id here using redux
  useEffect(() => {
    dispatch(fetchQuestion(id))
  }, [dispatch, id])

  const question = useSelector((state) => state?.reducers?.questions?.question)
  console.log(question)
  return (
    <div>
      <QuestionDetails question={question} />
    </div>
  )
}

export default Question
