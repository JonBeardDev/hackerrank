function encryption(s) {
  const spaceless = s.split(" ").join("");
  const columns = Math.ceil(Math.sqrt(spaceless.length));
  let encryption = "";

  for (let i = 0; i < columns; i++) {
    let pointer = 0;

    while (i + pointer < spaceless.length) {
      encryption += spaceless[i + pointer];
      pointer += columns;
    }
    encryption += " ";
  }
  return encryption;
}
