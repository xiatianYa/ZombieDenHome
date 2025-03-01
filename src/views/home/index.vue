<script setup lang="ts">
const goHref = (url: string) => {
  window.open(url, '_blank');
};
</script>

<template>
  <div class="home-container">
    <div class="home-video">
      <video src="@/assets/video/bgVideo.mp4" autoplay muted loop></video>
    </div>
    <div class="home-navigation">
      <div class="home-navigation-logo">
        <img src="@/assets/imgs/logo.png" alt="logo" />
      </div>
      <div class="home-navigation-button">
        <NButton
          ghost
          color="#fea443"
          size="large"
          class="ml-5px mr-5px mt-5"
          @click="goHref('https://s.zombieden.cn/')"
        >
          <template #icon>
            <SvgIcon icon="solar:server-square-line-duotone" />
          </template>
          服务器列表
        </NButton>
        <NButton
          ghost
          color="#fea443"
          size="large"
          class="ml-5px mr-5px mt-5"
          @click="goHref('https://bbs.zombieden.cn/thread-80146-1-1.html')"
        >
          <template #icon>
            <SvgIcon icon="carbon:game-console" />
          </template>
          登录器
        </NButton>
        <NButton
          ghost
          color="#fea443"
          size="large"
          class="ml-5px mr-5px mt-5"
          @click="goHref('https://bbs.zombieden.cn/')"
        >
          <template #icon>
            <SvgIcon icon="fluent:game-chat-20-regular" />
          </template>
          社区论坛
        </NButton>
      </div>

      <div class="home-navigation-copyright" @click="goHref('https://beian.miit.gov.cn/')">
        Copyright © 2001 - 2025 僵尸乐园 All rights reserved. 鄂ICP备18027986号-1
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  user-select: none;

  .home-video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .home-navigation {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 60%;
    min-width: 360px;
    min-height: 520px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 20px;

    .home-navigation-logo {
      width: 100%;
      height: 320px;
      display: flex;
      justify-content: center;

      img {
        width: 320px;
        height: 100%;
        object-fit: cover;
      }
    }

    .home-navigation-button {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .home-navigation-copyright {
      display: flex;
      justify-content: center;
      width: 100%;
      color: #fff;
      cursor: pointer;
      margin: 0px 20px;
    }
  }
}
</style>
