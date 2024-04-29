import fs from 'fs'
import path from 'path'

// console.log(fs)

export function getDirData() {
  const POST_FOLDER_NAME = './posts'
  const POSTS_DIRECTORY = path.join(process.cwd(), POST_FOLDER_NAME)

  console.log('dir: ', POST_FOLDER_NAME)

  // return fs.readdirSync(POSTS_DIRECTORY).length
}

export function getBlogPosts() {
  return getDirData()
}
