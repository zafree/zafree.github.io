import { work } from './work'
import getWorks from './works.json'

export function allWorks() {
  return getWorks
}

// export function getWorksSlug(slug: string) {
//   return getWorks.find((x: work) => x.slug === slug)
// }
