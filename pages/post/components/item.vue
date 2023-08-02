<script setup lang="ts">
import {a} from "unplugin-vue-router/dist/options-56006a88";
import { useRouter } from 'vue-router'

const props = defineProps({
  list: {
    type: Object,
  },
})
const state = reactive({
  data: {},
})

const router = useRouter()

function getData() {
  state.data = props.list
}

onBeforeMount(async () => {
  await getData()
})

onMounted(() => {

})

function jump(articleId: any) {
  router.push(`/post/${articleId}`)
}
</script>

<template>
  <a @click="jump(state.data.articleId)">
    <div class="list-item">
      <div v-if="state.data.img" class="list-item-left">
        <img :src="state.data.img" alt="">
      </div>
      <div class="list-item-right">
        <div>
          <span>{{ state.data.title }}</span>
          <p>{{ state.data.articleCategory.description }}</p>
        </div>
        <label>发布时间：{{ state.data.updateTime }}</label>
      </div>
    </div>
  </a>
</template>

<style scoped>
@media screen and (min-width: 500px) {
  .list-item {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    padding: 25px;
    border: 1px solid #ddd;
    justify-content: space-between;
  }

  .list-item:hover {
    translate: 0.5s;
    box-shadow: 0 0 8px #e3e4e6;
  }

  .list-item-left {
    margin-right: 20px;
  }

  .list-item-right {
    display: flex;
    height: 140px;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 5;
  }

  .list-item-left img {
    display: block;
    width: 230px;
    height: 140px;
  }

  .list-item-right span {
    font-size: 18px;
    color: #000;
  }

  .list-item-right p {
    width: 100%;
    height: 40px;
    margin: 20px 0 0;
    font-size: 14px;
    line-height: 20px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .list-item-right label {
    font-size: 12px;
    color: #999;
  }
}

@media screen and (min-width: 300px) and (max-width: 500px) {
  .list-item {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    justify-content: space-between;
  }

  .list-item:hover {
    translate: 0.5s;
    box-shadow: 0 0 8px #e3e4e6;
  }

  .list-item-left {
    margin-right: 20px;
  }

  .list-item-right {
    display: flex;
    height: 140px;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 5;
  }

  .list-item-left img {
    display: block;
    width: 220px;
  }

  .list-item-right span {
    font-size: 16px;
    color: #000;
  }

  .list-item-right p {
    width: 100%;
    margin: 10px 0 0;
    font-size: 14px;
    line-height: 20px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .list-item-right label {
    font-size: 12px;
    color: #999;
  }
}

a {
  display: inline-block;
  width: 100%;
}
</style>
