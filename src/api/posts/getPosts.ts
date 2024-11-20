import { IPost } from './IPost'
import getPostsData from './posts.json'

export function getPosts() {
  return getPostsData
}

export function getPostsSlug(slug: string) {
  return getPostsData.find((x: IPost) => x.slug === slug)
}
