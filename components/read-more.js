import { useRouter } from 'next/router'

export default function ReadMore({ post }) {
  const router = useRouter()

  return (
    <>
    <span
      onClick={() => {
        router.push({
          pathname: '/post/[pid]',
          query: { pid: post.id },
        })
      }}
    >
      Click here to read more
    </span>
    <span 
      onClick={() => {
        console.log(router.route);
        console.log(router.pathname);
      }}>
    </span>
    </>
  )
}