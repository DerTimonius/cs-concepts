fn insertion_sort(arr: &mut Vec<i32>) -> &mut Vec<i32> {
  for i in 1..arr.len() - 1 {
      let mut j = i - 1;
      let value = arr[i];
      while j > 0 {
          if arr[i] < arr[j] {
              arr.swap(i, j);
              j -= 1;
          } else {
              break
          }
      }
  }
  arr
}
