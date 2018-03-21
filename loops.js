console.log("I'm working!");

// 0-99 ascending
for (var i = 0; i < 100; i++) {
  console.log(i);
}

//99-0 descending
for (var i = 99; i >=0; i--) {
  console.log(i);
}

//0-98 Even numbers
for (var i = 0; i < 99; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//98-0 descending
for (var i = 98; i >=0; i--) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//49 to 72 ascending
for (var i = 49; i <= 72; i++) {
  console.log(i);
}

//81 to 26 descending
for (var i = 81; i >= 26; i--) {
  console.log(i);
}

//3 to 90 that are multiples of 3
for (var i = 3; i <= 90; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}
