fn quicksort(arr: &Vec<i32>) -> Vec<i32> {
  if arr.len() <= 1 {
      return arr.to_vec()
  }

  let pivot = arr[0];
  let mut left_arr: Vec<i32> = Vec::new();
  let mut right_arr: Vec<i32> = Vec::new();

  for i in 1..arr.len() {
      if arr[i] > pivot {
          right_arr.push(arr[i])
      } else {
          left_arr.push(arr[i])
      }
  }

  let mut sorted_left = quicksort(&left_arr);
  let sorted_right = quicksort(&right_arr);

  sorted_left.push(pivot);
  sorted_left.extend(sorted_right);

  sorted_left
}
