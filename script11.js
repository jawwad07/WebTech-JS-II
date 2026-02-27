const buffer = new ArrayBuffer(16);
const view = new Uint8Array(buffer);

for (let i = 0; i < view.length; i++) {
    view[i] = 65 + i;
}

console.log("Uint8Array contents:", view);

const decoder = new TextDecoder('utf-8');
const decodedString = decoder.decode(buffer);

console.log("Decoded String:", decodedString);