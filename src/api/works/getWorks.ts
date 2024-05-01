import { IWork } from './IWork'
import getWorksData from './works.json'

export function getWorks() {
  return getWorksData
}

export function getWorksSlug(slug: string) {
  return getWorksData.find((x: IWork) => x.slug === slug)
}
