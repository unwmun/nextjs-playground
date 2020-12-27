import { useRouter, userRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { pid } = router.query
  
    return <p>Post: 
        pathname: {router.pathname}
        route: {router.route}
    </p>
  }

export default Post