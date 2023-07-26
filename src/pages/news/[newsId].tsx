import { useRouter } from "next/router"

export default function NewsDetails(){
  const router = useRouter()
  return(
    <div>
      <h1>News Details {router.query.newsId}</h1>
    </div>
  )
}