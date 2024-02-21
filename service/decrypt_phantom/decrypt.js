import { pbkdf2 } from 'crypto';
import pkg from 'tweetnacl';
import bs58 from 'bs58';

const { secretbox } = pkg

async function deriveEncryptionKey(password, salt, iterations, digest) {
  return new Promise((resolve, reject) =>
    pbkdf2(
      password,
      salt,
      iterations,
      secretbox.keyLength,
      digest,
      (err, key) => (err ? reject(err) : resolve(key)),
    ),
  );
}

const encrypted_str = "Px511tWgLvJSi9DYHojab5TUdFmQcWDWj7tKnaiQXxGKa4U671YzSvZWyE9SvTvDF"
const digest_str = "sha256"
const iterations_val = 10000
const nonce_str = "45oW6kkmyasj5dFVMXx2zkXngZR6vQb16"
const salt_str = "Vok8AxYdh1SdtYGkxz2yme"
const password = "Pablo!2#4"

const encrypted = bs58.decode(encrypted_str)
const salt =  bs58.decode(salt_str)
const nonce = bs58.decode(nonce_str)
const iterations = iterations_val
const key = await deriveEncryptionKey(password, salt, iterations, digest_str)
const plaintext = secretbox.open(encrypted, nonce, key);

if (!plaintext) {
throw new Error('Incorrect password');
}
console.log(plaintext)
const decodedPlaintext = Buffer.from(plaintext).toString();
console.log("Seed Phrase Below")
console.log(decodedPlaintext)
// const { mnemonic, seed, derivationPath } = JSON.parse(decodedPlaintext);
// console.log(mnemonic, seed, derivationPath)