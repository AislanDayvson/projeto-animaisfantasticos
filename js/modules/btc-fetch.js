export default function initBtcFetch() {
  async function fetchBitcoin() {
    try {
      const bitcoinResponse = fetch('https://blockchain.info/ticker');
      const btcJSON = await (await bitcoinResponse).json();
      const btcPreco = btcJSON.BRL.sell;
      const btcSpan = document.querySelector('.btc-preco');
      btcSpan.innerText = (100 / btcPreco).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchBitcoin();
}
