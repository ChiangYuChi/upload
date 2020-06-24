<template>
  <div class="not-found">
    <div class="not-found-container">
      <p>
        我們正努力建構頁面內容中
        <br />
        {{timerCount}} 秒後即將跳轉回上一頁
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timerCount: 3
    };
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }
  },
  created() {
    setTimeout(() => this.$router.push({ path: "/" }), 5000); // path 為 "/" 既為根目錄，5000為毫秒
  }
};
</script>
<style lang="scss">
.not-found {
  background-image: url("./../assets/img/404.jpg");

  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;

  .not-found-container {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 500px;
    box-sizing: border-box;
    p {
      font-size: 40px;
      font-family: "Montserrat", sans-serif;
      text-align: center;
      color: white;
      font-weight: 900;
    }
  }
}
</style>