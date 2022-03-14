import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuestion } from '../../Redux/Slices/questionSlice'

const Question = () => {
  const question = useSelector((state) => state?.reducers?.questions?.question)
  console.log(question)
  // DISPATCH REDUX HOOK HERE
  //   const dispatch = useDispatch()

  // calling the redux thunk blogs api for data
  //   useEffect(() => {
  //     dispatch(fetchQuestion())
  //   }, [dispatch])
  return (
    <div>
      This is question detail page.
      <h1>{question?.title}</h1>
    </div>
  )
}

export default Question
