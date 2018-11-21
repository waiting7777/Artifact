<template>
  <div class="container">
    <div class="card-table">
      <div class="card-contain">
        <div class="card" v-for="(hero, index) in cardHeroList.red" :key="index">
          {{hero.card_name.english}}
        </div>
      </div>
      <div class="card-contain">
        <div class="card" v-for="(hero, index) in cardHeroList.green" :key="index">
          {{hero.card_name.english}}
        </div>
      </div>
      <div class="card-contain">
        <div class="card" v-for="(hero, index) in cardHeroList.black" :key="index">
          {{hero.card_name.english}}
        </div>
      </div>
      <div class="card-contain">
        <div class="card" v-for="(hero, index) in cardHeroList.blue" :key="index">
          {{hero.card_name.english}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

function handleHeroData(cardList) {
  const heros = cardList.filter((card) => {
    return card.card_type == 'Hero';
  });

  const heroList = {
    blue: [],
    black: [],
    green: [],
    red: []
  }

  for (let i in heros) {
    if (heros[i].is_blue) {
      heroList.blue.push(heros[i]);
    }
    if (heros[i].is_black) {
      heroList.black.push(heros[i]);
    }
    if (heros[i].is_green) {
      heroList.green.push(heros[i]);
    }
    if (heros[i].is_red) {
      heroList.red.push(heros[i]);
    }
  }
  return heroList;
}

export default {
  async asyncData ({ app }) {
    const cardSet = await app.$axios.$get('/api/cards');
    const cardHeroList = handleHeroData(cardSet.card_list);
    console.log(cardHeroList)
    return { cardHeroList: cardHeroList };
  }
}
</script>

<style>

  .card-table {
    display: flex;
  }

  .card-contain {
    width: 260px;
  }

</style>
