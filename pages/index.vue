<template>
  <div class="container">
    <table>
      <thead>

      </thead>
      <tbody>
        <tr v-for="(card, index) in cardList" :key="index">
          <td>{{card.card_id}}</td>
          <td>{{card.card_type}}</td>
          <td>{{card.card_name.tchinese}}</td>
          <td><div v-html="card.card_text.tchinese"></div></td>
          <td><img :src="card.mini_image.default"></td>
          <td><img :src="card.large_image.tchinese"></td>
          <td><img :src="card.ingame_image.default"></td>
          <!-- <td>{{illustrator}}</td> -->
          <!-- <td>{{sub_type}}</td> -->
          <!-- <td>{{gold_cost}}</td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  async asyncData ({ app }) {
    const cardSet = await app.$axios.$get('/api/cards');
    return { cardList: cardSet.card_list };
  }
}
</script>

<style>

</style>
