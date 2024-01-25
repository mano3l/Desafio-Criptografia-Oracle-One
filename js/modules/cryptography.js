export function encrypt(text) {
  const hashmap = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  return text.replace(/[aeiou]/g, (v) => hashmap[v]);
}

export function decrypt(text) {
  const hashmap = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  return text.replace(/ai|enter|imes|ober|ufat/g, (v) => hashmap[v]);
}
