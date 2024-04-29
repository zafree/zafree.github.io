import { notFound } from 'next/navigation'
import { allWorks } from '@/api/works/getWorks'
import { work } from '@/api/works/work'
import Link from 'next/link'
import WorkDetails from '@/components/works/WorkDetails'


export async function generateStaticParams() {
  let posts = allWorks()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Post({ params }: { params: { slug: string } }) {
  let post = allWorks().find((post) => post.slug === params.slug)
  if (!post) {
    notFound()
  }
  return (
    <>
      <div>
        <h1>{post.title} </h1>
        <h2>{post.desc}</h2>
      </div>
    </>
  )
}
