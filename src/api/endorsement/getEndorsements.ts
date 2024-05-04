import { IEndorsement } from './IEndorsement'
import getEndorsementsData from './endorsements.json'

export function getEndorsements() {
  return getEndorsementsData
}

export function getEndorsementsSlug(slug: string) {
  return getEndorsementsData.find((x: IEndorsement) => x.slug === slug)
}
