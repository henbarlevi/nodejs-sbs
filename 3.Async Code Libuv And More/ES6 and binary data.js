//new way dealing with binary data (v8 features):
var buffer = new ArrayBuffer(8); // 8 - size in Bytes - 64 bits
var view = new Int32Array(buffer); //int32 means we need a 32bits for each number
//so we can onlu store 2 numbers - bufferSize - 64 bits:
view[0] = 213;
view[1] = 13324;
console.log(view);