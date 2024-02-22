const pbkdf2 = require("pbkdf2");
const aesjs = require("aes-js");
const scrypt = require("scrypt-js");
// const Web3 = require("web3");
// const web3 = new Web3();
// const { ethAddress } = require("@opentron/tron-eth-conversions");

// function pkToAddress(privateKey) {
//   const hexAddress = web3.eth.accounts.privateKeyToAccount(privateKey).address;
//   return ethAddress.toTron(hexAddress);
// }

function encryptKey(password, salt) {
  return pbkdf2.pbkdf2Sync(password, salt, 1, 256 / 8, "sha512");
}

function decryptString(password, salt, hexString) {
  const key = encryptKey(password, salt);
  console.log(key)
  console.log(Buffer.from("82ccf17f4e115c1dfcd1196b11b02b6cb5c45762983b89077ab29ebefc738f46", 'utf8'))
  const encryptedBytes = aesjs.utils.hex.toBytes("840e0dec3e104c66ae1259a063f8f3153ac74ccb9f070d28eba8de9cf2fee7b2");
  const aesCtr = new aesjs.ModeOfOperation.ctr(Buffer.from("82ccf17f4e115c1dfcd1196b11b02b6cb5c45762983b89077ab29ebefc738f46", 'utf8'), Buffer.from("5f98597a3993ca6a1baf71631231f5dd", "utf8"));
  const decryptedBytes = aesCtr.decrypt(encryptedBytes);

  return aesjs.utils.utf8.fromBytes(decryptedBytes);
}

function decryptKeyStore(password, keystore) {
  if (!password) {
    return false;
  }

  const { key, address, salt } = keystore;

  const privateKey = decryptString(password, salt, key);
  console.log(privateKey)
  // try {
  //   if (pkToAddress(privateKey) === address) {
  //     return {
  //       address,
  //       privateKey,
  //     };
  //   }
  // } catch (err) {}
  // return false;
}

const encryptedKeystore = {
  version: 1,
  key:
    "0e82eb7cc45d8062160edf3df38611fed2231b0e48f6f7f86dc66c89eb8952f76ea918666d4ff5b6739a7024a255ae8ed451fefd2ed90b304ac8051bf905699d",
  address: "TJPz2bD7Aa8FnUkomofwoCvgRNnAZWS4nb",
  salt: "4be90d83-1e14-4ca5-95f8-6cac2e4c04d8",
};
const pw = "some-passsword";

decryptKeyStore(pw, encryptedKeystore)