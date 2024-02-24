<script setup lang="ts">
import { data as contents } from './load-notams.data.ts'

import { useData } from 'vitepress'
import { computed } from 'vue'

import NotamCard from './NotamCard.vue'

const siteData = useData()

const notams = computed(() => {
    return contents[siteData.lang.value].notams.sort((notam) => notam.frontmatter.pin === true ? -1 : 1)
})
</script>

<template>
    <div class="first-screen">
        <div class="first-screen-background">
            <video autoplay muted loop src="/videos/background.mp4"></video>
        </div>
        <div class="first-screen-container">
            <div class="first-screen-content">
                <div class="first-screen-title">
                    <h2>这是新的航大官网</h2>
                    <h1>它还没有为服务广大人民<br />做好准备</h1>
                    <h2>主要是因为我没什么想法</h2>
                </div>
            </div>
        </div>
    </div>
    <div class="notams-section">
        <div class="notams-section-content">
            <h2>NOTAMs</h2>
            <p>了解我们的最新消息</p>
            <hr />
            <div class="notams">
                <NotamCard v-for="content in notams" :url="content.url" :title="content.frontmatter.title"
                    :description="content.frontmatter.description" :category="content.frontmatter.category"
                    :pin="content.frontmatter.pin" :tag="content.frontmatter.tag" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
hr {
    border: 0 solid var(--vp-c-divider);
    border-width: 0 0 1px 0;
    margin: 24px 0;
}

.notams-section {
    background-color: var(--vp-c-bg-alt);

    .notams-section-content {
        max-width: 80rem;
        margin: 0 auto;
        padding: 3rem 0;

        .notams {
            display: flex;

            .notam-card {
                width: 230px;
                margin-right: 1rem;
            }
        }

        h2 {
            font-size: 3rem;
            line-height: normal;
        }

        p {
            margin: 0.2rem 0 1.5rem 0;
        }
    }
}


.first-screen {
    height: 100vh;
    overflow: hidden;
    display: flex;

    .first-screen-background {
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100%;
        overflow: hidden;
    }

    .first-screen-container {
        // background-color: var(--vp-c-text-3);
        z-index: 10;
        width: 100%;
        height: 100%;

        .first-screen-content {
            padding-top: var(--vp-nav-height);

            height: 100%;

            display: flex;
            flex-direction: column;

            align-items: center;
            justify-content: center;

            max-width: 80rem;

            margin: 0 auto;

            .first-screen-title {
                h1 {
                    font-size: 6rem;
                    font-weight: bold;
                    line-height: normal;
                }

                h2 {
                    font-size: 2rem;
                    line-height: normal;
                }
            }
        }
    }
}
</style>