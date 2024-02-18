<script setup lang="ts">
import { data as contents } from './load-notams.data.ts'

import { useData } from 'vitepress'
import { ref, computed } from 'vue'

import NotamCard from './NotamCard.vue'
import { VPBadge, VPButton } from 'vitepress/theme'

const siteData = useData()

const props = defineProps<{
  lang?: string
}>()

const tagsFilter = ref([] as string[])
const categoriesFilter = ref([] as string[])

const data = contents[props.lang !== undefined ? props.lang : siteData.lang.value]
const notams = computed(() => {
  return data.notams
    .filter(notam =>
      (tagsFilter.value.length === 0 && categoriesFilter.value.length === 0) ||
      (
        (tagsFilter.value.length === 0 || tagsFilter.value.includes(notam.frontmatter.tag)) &&
        (categoriesFilter.value.length === 0 || categoriesFilter.value.includes(notam.frontmatter.category))
      )
    )
})

function addOrRemoveFromArray<T>(sourceArray: Array<T>, value: T) {
  if (!sourceArray.includes(value)) {
    sourceArray.push(value)
  } else {
    sourceArray.splice(sourceArray.indexOf(value), 1)
  }
}

function resetFilter() {
  categoriesFilter.value = []
  tagsFilter.value = []
}
</script>

<template>
  <div class="notams-page">
    <div class="notams-page-header">
      <h1>NOTAMs</h1>
      <p>反正这是一个类似于博客的东西。</p>
    </div>
    <hr />
    <h1 class="header">顶置 NOTAMs</h1>
    <div class="notams-grid">
      <NotamCard v-for="content in data.notams.filter(notam => notam.frontmatter.pin)" :url="content.url"
        :title="content.frontmatter.title" :description="content.frontmatter.description"
        :category="content.frontmatter.category" :pin="content.frontmatter.pin" :tag="content.frontmatter.tag" />
    </div>
    <hr />
    <div class="filter-options">
      <div class="filter-options-left">
        <div class="filter-item">
          <span class="filter-item-label">按标签筛选</span>
          <VPBadge v-for="tag in data.tags" :text="tag" :type="tagsFilter.includes(tag) ? 'tip' : 'info'"
            @click="addOrRemoveFromArray(tagsFilter, tag)" />
        </div>
        <div class="filter-item">
          <span class="filter-item-label">按类型筛选</span>
          <VPBadge v-for="category in data.categories" :text="category"
            :type="categoriesFilter.includes(category) ? 'tip' : 'info'"
            @click="addOrRemoveFromArray(categoriesFilter, category)" />
        </div>
      </div>
      <div class="filter-options-right">
        <VPButton @click="resetFilter" text="重置筛选器" theme="alt" />
      </div>
    </div>
    <div class="notams-grid">
      <NotamCard v-for="content in notams" :url="content.url" :title="content.frontmatter.title"
        :description="content.frontmatter.description" :category="content.frontmatter.category"
        :pin="content.frontmatter.pin" :tag="content.frontmatter.tag" />
    </div>
  </div>
</template>

<style scoped>
.filter-options {
  margin-bottom: 1rem;
  display: flex;

  .filter-options-left {
    flex: 1 0;

    .filter-item {
      margin: 0.2rem 0;

      .VPBadge {
        margin-right: 0.2rem;
        cursor: pointer;
      }

      .filter-item-label {
        font-size: 14px;
        color: var(--vp-c-text-2);
        margin-right: 0.5rem;
      }
    }
  }

  .filter-options-right {
    flex: auto 0;
  }
}

.notams-page {
  margin: 0 auto;
  padding: 32px 24px 96px;

  max-width: 1024px;
}

.notams-page-header {
  h1 {
    margin: 0.2rem 0;
  }

  p {

    margin: 16px 0;
  }
}

.notams-grid {
  columns: 4;
  break-inside: avoid;
  gap: 1rem;
}

.header {
  margin: 1.2rem 0;
}

h1 {
  letter-spacing: -0.02em;
  line-height: 40px;
  font-size: 2rem;
  font-weight: 600;
}

hr {
  border: 0 solid var(--vp-c-divider);
  border-width: 0 0 1px 0;
  margin: 24px 0;
}
</style>