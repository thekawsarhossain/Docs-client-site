import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Id = () => {
  // next js hooks for dynamic routuing
  const router = useRouter()
  const id = router.query.id

  // getting blogger info here
  const blogger = useSelector((state) => state?.reducers?.blogs?.bloggerDetails)

  return (
    <div>
      {id}
      {blogger.displayName}
    </div>
  )
}

export default Id
