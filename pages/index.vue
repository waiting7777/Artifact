<template>
  <div class="container">
    <div class="card-contain" :class="{'bg-blue': card.is_blue }" v-for="(card, index) in cardList" :key="index">
      <div class="hero-img" v-if="card.card_type == 'Hero'">
        <img :src="card.mini_image.default" :tooltip="card.card_name.tchinese">
      </div>
      <div class="card-text" v-if="card.card_type == 'Hero'">
        <div v-html="card.card_text.tchinese"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData ({ app }) {
    const cardSet = await app.$axios.$get('/api/cards');
    return { cardHeroList: cardSet.card_list };
  }
}
</script>

<style>

  .card-contain {
    display: flex;
    width: 260px;
    border-radius: 2px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }

  .hero-img {
    width: 64px;
  }

  .hero-img img {
    width: 100%;
  }

  .bg-blue {
    background: linear-gradient(90deg, rgb(52, 89, 111), rgb(20, 59, 83));
  }
</style>
