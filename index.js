const { Xumm } = require('xumm');
const {
  percentToTransferRate,
  convertStringToHex,
  NFTokenMintFlags,
} = require('xrpl');

const xumm = new Xumm('apikey', 'apisecret');

const main = async () => {
  const transaction = {
    TransactionType: 'NFTokenMint',
    NFTokenTaxon: 0,
    Flags: NFTokenMintFlags.tfTransferable,
    TransferFee: 10 * 1000, // 10%
    URI: convertStringToHex('ipfs://***'),
  };
  const payload = await xumm.payload?.create(transaction);
  console.log(transaction);
};

main();
