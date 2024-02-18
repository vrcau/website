import { defineLoader, type ContentData } from "vitepress"
import { createContentLoader } from "vitepress"

export default defineLoader({
  watch: ["../notams/*.md", "../en/notams/*.md"],
  async load() {
    const notamsFromOtherLanguage = await createContentLoader(
      "/*/notams/*.md"
    ).load()

    const notams = await createContentLoader("/notams/*.md").load()

    const allNotams = {
      "zh-cmn-Hans-CN": getNotamData(notams),
      en: getNotamData(notamsFromOtherLanguage, "en"),
    } as Record<string, Data>

    return allNotams
  },
})

function getNotamData(sourceData: ContentData[], language?: string) {
  const tagsTemp = sourceData
    .map((notam) => notam.frontmatter.tag as string | undefined)
    .filter((tag) => tag !== undefined)

  const categoriesTemp = sourceData
    .map((notam) => notam.frontmatter.category as string | undefined)
    .filter((category) => category !== undefined)

  return {
    notams: sourceData.filter(
      (notam) => !notam.url.endsWith(`/${language ? language : ""}`)
    ),
    tags: tagsTemp.filter((tag, index) => tagsTemp.indexOf(tag) === index),
    categories: categoriesTemp.filter(
      (category, index) => categoriesTemp.indexOf(category) === index
    ),
  } as Data
}

declare const data: Record<string, Data>

export interface Data {
  notams: ContentData[]
  tags: string[]
  categories: string[]
}

export { data }
