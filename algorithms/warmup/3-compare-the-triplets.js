const compare = (arr1, arr2) => {
  const res = [0, 0];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i]> arr2[i]) {
      res[0]++;
    } else if (arr1[i]< arr2[i]) {
      res[1]++;
    }
  }
  console.log('-- -- -- res', res);

  return res;
}

compare([1, 2, 3], [3, 2, 1]);
