// import { notFound } from 'next/navigation'
// import { getWorks } from '@/api/works/getWorks'
// import Hero from '@/components/hero/Hero'

// export async function generateStaticParams() {
//   let allWork = getWorks()

//   return allWork.map((work) => ({
//     slug: work.slug,
//   }))
// }

// export default function Post({ params }: { params: { slug: string } }) {
//   let allWork = getWorks()
//   let work = allWork.find((work) => work.slug === params.slug)
//   if (!work) {
//     notFound()
//   }
//   return (
//     <>
//       {/* <Hero title={work.title} subtitle={work.subtitle} /> */}
//       {/* <div>
//         <h1>Title: {work.title}</h1>
//         <h2>Desc: {work.desc}</h2>
//       </div> */}
//     </>
//   )
// }
