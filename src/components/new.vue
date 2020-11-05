<template>
  <div class="new">
    <div class="icon">
      <span class="iconfont icon-webicon214" @click="goback"></span>
      <span>{{ title }}</span>
      <span class="iconfont icon-sousuo"></span>
    </div>
    <div class="title">
      JKL讨论AD现状：以前最强的是另外3人，现在是自己，却得不到尊重
    </div>
    <div class="author">
      <div class="avatar">
        <img src="../assets/timg.jpg" alt="">
      </div>
      <div class="author-info">
        <div class="author-name">王者解说</div>
        <div class="author-desc">
          <span>14小时前</span>
          <span>优质游戏解说</span>
        </div>
      </div>
    </div>
    <div class="content">
      <p>主要还是unlock和找镜像，网上不乏类似的博客，但大都年代比较久远，版本各种不兼容，导致根本不能复现，我也踩了很多坑，花费了大量心血时间才终于可了。</p>
      <img src="../assets/back.jpg" alt="">
      <p>主要还是unlock和找镜像，网上不乏类似的博客，但大都年代比较久远，版本各种不兼容，导致根本不能复现，我也踩了很多坑，花费了大量心血时间才终于可了。</p>
      <p>主要还是unlock和找镜像，网上不乏类似的博客，但大都年代比较久远，版本各种不兼容，导致根本不能复现，我也踩了很多坑，花费了大量心血时间才终于可了。</p>
      <p>主要还是unlock和找镜像，网上不乏类似的博客，但大都年代比较久远，版本各种不兼容，导致根本不能复现，我也踩了很多坑，花费了大量心血时间才终于可了。</p>
      <p>主要还是unlock和找镜像，网上不乏类似的博客，但大都年代比较久远，版本各种不兼容，导致根本不能复现，我也踩了很多坑，花费了大量心血时间才终于可了。</p>
      <p>主要还是unlock和找镜像，网上不乏类似的博客，但大都年代比较久远，版本各种不兼容，导致根本不能复现，我也踩了很多坑，花费了大量心血时间才终于可了。</p>
      <p>主要还是unlock和找镜像，网上不乏类似的博客，但大都年代比较久远，版本各种不兼容，导致根本不能复现，我也踩了很多坑，花费了大量心血时间才终于可了。</p>
      <p>主要还是unlock和找镜像，网上不乏类似的博客，但大都年代比较久远，版本各种不兼容，导致根本不能复现，我也踩了很多坑，花费了大量心血时间才终于可了。</p>
      <p>主要还是unlock和找镜像，网上不乏类似的博客，但大都年代比较久远，版本各种不兼容，导致根本不能复现，我也踩了很多坑，花费了大量心血时间才终于可了。</p>
      <p>主要还是unlock和找镜像，网上不乏类似的博客，但大都年代比较久远，版本各种不兼容，导致根本不能复现，我也踩了很多坑，花费了大量心血时间才终于可了。</p>
      <p>主要还是unlock和找镜像，网上不乏类似的博客，但大都年代比较久远，版本各种不兼容，导致根本不能复现，我也踩了很多坑，花费了大量心血时间才终于可了。</p>
      <p>主要还是unlock和找镜像，网上不乏类似的博客，但大都年代比较久远，版本各种不兼容，导致根本不能复现，我也踩了很多坑，花费了大量心血时间才终于可了。</p>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data () {
    return {
      title: '咨询详情'
    }
  },
  created () {
    console.log(this.$route.query)
    this.title  = this.$route.query.title
  },
  mounted () {
    window.document.title = this.title
  },
  methods: {
    goback () {
      triggerNative('goback', {}, function (response) { })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/style/font.scss';
.new {
  .icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
    border-bottom: 1px solid #ccc;
    .iconfont {
      font-size: 24px;
    }
  }
  .title {
    color: #000;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
  }
  .author {
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
    .avatar {
      margin-left: 10px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    .author-info {
      margin-left: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .author-name {
        font-weight: bold;
        font-size: 16px;
        color: #000;
      }
      .author-desc {
        font-size: 12px;
        color: #968e8e;
        span {
          margin-right: 6px;
        }
      }
    }
  }
  .content {
    font-size: 16px;
    color: #463b3b;
    text-indent: 2em;
    text-align: center;
    img {
      width: 96%;
      height: 200px;
      border-radius: 5px;
    }
    p {
      text-align: left;
    }
  }

}
</style>
