<template>
  <ul class="cg-ul">
    <li>
      <div class="li-icon">
        <img src="../../assets/icon5.png" alt>
      </div>
      <div class="li-text">
        <P>聊天吹皮皮虾</P>
        <P>40人在线</P>
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cg-ul {
  width: 100%;
  margin-top: 0.625rem;
  li {
    padding: 0 0.9375rem;
    border-bottom: 0.0625rem solid #eee;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .li-icon {
      width: 3.75rem;
      height: 3.75rem;
      // height: 30%;
      border-radius: 50%;
      background-color: #ddd;
      img {
        width: 100%;
      }
    }
    .li-text {
      height: 5rem;
      width: 70%;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
