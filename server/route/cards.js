const { Router } = require('express');
const router = Router();
const axios = require('axios');
const setList = ['00', '01'];

function getCardUrl(setId) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `https://playartifact.com/cardset/${setId}`
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(error => {
      reject(error);
    })
  });
}

function getCardSet(url) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: url
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(error => {
      reject(error);
    })
  });
}

router.get('/api/cards', async (req, res, next) => {
  const result = await getCardUrl('00');
  const url = `${result.cdn_root.slice(0, -1)}${result.url}`;
  console.log(url)
  const data = await getCardSet(url);
  res.json(data.card_set);
});

module.exports = router;