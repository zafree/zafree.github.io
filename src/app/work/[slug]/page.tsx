import { notFound } from 'next/navigation'
import Link from 'next/link'
import WorkDetails from '@/components/works/WorkDetails'
import { getWorks } from '@/api/works/getWorks'
import FluidTypography from '../posts/fluid-typography/page'

export async function generateStaticParams() {
  let allWork = getWorks()

  return allWork.map((work) => ({
    slug: work.slug,
  }))
}

export default function Post({ params }: { params: { slug: string } }) {
  let allWork = getWorks()
  let work = allWork.find((work) => work.slug === params.slug)
  if (!work) {
    notFound()
  }
  return (
    <>
      <div>
        <h1>{work.title} </h1>
        <h2>{work.desc}</h2>
        {/* <div>{children}</div> */}
        <FluidTypography />
      </div>
    </>
  )
}
