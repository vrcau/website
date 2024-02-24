<script setup lang="ts">
import { VPBadge } from 'vitepress/theme'

defineProps<{
  url: string,
  title: string,
  description: string,
  category: string,
  pin?: boolean,
  tag?: string
}>()
</script>

<template>
  <a :href="url" class="notam-card">
    <div class="notam-card-banner">
      <img src="/images/banner.gif" />
    </div>
    <div class="notam-card-content">
      <div class="notam-card-badge">
        <VPBadge v-if="pin" text="顶置" />
        <VPBadge type="info" :text="category" />
        <VPBadge v-if="tag" type="info" :text="tag" />
      </div>
      <h2 :href="url">{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </a>
</template>

<style scoped lang="less">
.notam-card {
  display: block;

  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  break-inside: avoid;

  margin-bottom: 1rem;

  height: 400px;

  .notam-card-content {
    padding: 1rem;
    padding-top: 0.2rem;
    height: 100%;

    p {
      text-overflow: ellipsis;
    }

    h2 {
      letter-spacing: -0.02em;
      line-height: 32px;
      font-size: 24px;
      font-weight: 600;

      padding-bottom: 4px;
    }
  }
}

.notam-card:hover {
  background-color: var(--vp-c-default-soft);
  transition: background-color .25s, color .25s;
}

.notam-card-badge {
  margin-left: -0.5rem;

  .VPBadge {
    margin-right: 0.2rem;
  }
}

.notam-card-banner {
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  margin-bottom: 0.3rem;
}
</style>