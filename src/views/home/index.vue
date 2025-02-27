<script setup lang="ts"></script>

<template>
  <div class="home-container">
    <div class="home-video">
      <video src="@/assets/video/bgVideo.mp4" autoplay muted loop></video>
    </div>
    <div class="home-navigation">
      <div class="logo-box">
        <img src="@/assets/imgs/logo.png" alt="logo" />
      </div>
      <NButton ghost color="#fea443" size="large" class="ml-5px mr-5px mt-5">
        <template #icon>
          <SvgIcon icon="solar:server-square-line-duotone" />
        </template>
        服务器列表
      </NButton>
      <NButton ghost color="#fea443" size="large" class="ml-5px mr-5px mt-5">
        <template #icon>
          <SvgIcon icon="carbon:game-console" />
        </template>
        登录器
      </NButton>
      <NButton ghost color="#fea443" size="large" class="ml-5px mr-5px mt-5">
        <template #icon>
          <SvgIcon icon="fluent:game-chat-20-regular" />
        </template>
        社区论坛
      </NButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-container {
  width: 100%;
  height: 100%;
  position: relative;

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
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35%;
    height: 40%;
    min-width: 380px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .logo-box {
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
  }
}
</style>
