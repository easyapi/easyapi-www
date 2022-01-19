<template>
  <el-dialog
    :visible.sync="dialogVisible"
    width="50%">
    <div id="laybox">
      <div class="layer-alertdon">
        <dl class=" clearfix">
          <dd>
            <p><img src="https://static.easyapi.com/images/info/fanfanle.png"/></p>
            <span>微信扫一扫</span>
          </dd>
          <dd>
            <p><img src="https://static.easyapi.com/images/info/leida.png"/></p>
            <span>支付宝扫一扫</span>
          </dd>
        </dl>
        <p>注意：请通过上面支付宝，微信支付支持费用，可加微信好友，或者QQ149151419联系，需要您提供快递地址，我们会立即安排发货，
          一旦支付成功将无法取消支持，我们由衷感谢您的支持，将持续提供完善的产品服务。
        </p>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "Pay",
  data() {
    return {
      dialogVisible: false
    }
  }
}
</script>

<style scoped lang="scss">

.layer-alertdon {
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
