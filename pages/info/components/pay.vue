<script setup lang="ts">
import { reactive } from 'vue'
const props = defineProps(['dialogVisible'])

const data = reactive({
  dialogVisible: props.dialogVisible,
})

</script>

<template>
  <el-dialog v-model="data.dialogVisible" width="50%" append-to-body>
    <div class="pay-dialog">
      <dl class="clearfix">
        <dd>
          <p><img class="mx-auto" src="https://static.easyapi.com/images/info/fanfanle.png" alt="微信扫一扫"></p>
          <span>微信扫一扫</span>
        </dd>
        <dd>
          <p><img class="mx-auto" src="https://static.easyapi.com/images/info/leida.png" alt="支付宝扫一扫"></p>
          <span>支付宝扫一扫</span>
        </dd>
      </dl>
      <p>
        注意：请通过上面支付宝，微信支付支持费用，可加微信好友，或者QQ149151419联系，需要您提供快递地址，我们会立即安排发货，
        一旦支付成功将无法取消支持，我们由衷感谢您的支持，将持续提供完善的产品服务。
      </p>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.pay-dialog {
  padding: 30px;

  dl {
    dd {
      width: 50%;
      float: left;
      text-align: center;
      padding: 15px 0;

      img {
        width: 140px;
      }

      span {
        font-size: 15px;
        display: inline-block;
        padding: 5px;
      }
    }
  }

  p {
    font-size: 1.4rem;
    line-height: 1.7;
    color: gray;
  }
}
</style>
