function caesarCipher(str, shift) {
  const codeA = 'A'.charCodeAt(0);
  const codeZ = 'Z'.charCodeAt(0);
  const codea = 'a'.charCodeAt(0);
  const codez = 'z'.charCodeAt(0);

  let result = '';

  for (let chr of str) {
    let code = chr.codePointAt(0);

    if (code >= codeA && code <= codeZ) {
      code -= codeA;
      code = mod(code + shift, 26);
      code += codeA;
    } else if (code >= codea && code <= codez) {
      code -= codea;
      code = mod(code + shift, 26);
      code += codea;
    }

    result += String.fromCodePoint(code);
  }

  return result;
}

function mod(n, p) {
  let r = n % p;

  if (r < 0) {
    r += p;
  }

  return r;
}

module.exports = caesarCipher;