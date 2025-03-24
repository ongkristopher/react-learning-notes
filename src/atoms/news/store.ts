import { atom } from "jotai"
import { PostData } from "./types"

export const postId = atom(1)
export const postData = atom(async (get) => {
  const id = get(postId)
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  )
  const data: PostData = await response.json()
  return data
})