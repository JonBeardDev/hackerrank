function timeConversion(s) {
  const hh = s.slice(0, 2);
  const mmss = s.slice(2, -2);
  const ampm = s.slice(-2);

  let military = "";
  if (ampm === "AM") {
    if (hh === "12") {
      military = "00" + mmss;
    } else {
      military = hh + mmss;
    }
  } else {
    if (hh === "12") {
      military = hh + mmss;
    } else {
      const hours = Number(hh) + 12;
      military = hours.toString() + mmss;
    }
  }
  return military;
}
