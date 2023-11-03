pub fn mergesort(list: &mut Vec<i32>) {
    if list.len() <= 1 {
        return;
    }
    let middle_index = list.len() / 2;
    let left_arr = &mut list[..middle_index].to_vec();
    let right_arr = &mut list[middle_index..].to_vec();

    mergesort(left_arr);
    mergesort(right_arr);

    list.clear();
    list.extend(merge(left_arr, right_arr));
}

fn merge(left: &mut Vec<i32>, right: &mut Vec<i32>) -> Vec<i32> {
    let mut arr: Vec<i32> = Vec::with_capacity(left.len() + right.len());
    let (mut i, mut j) = (0, 0);

    while i < left.len() && j < right.len() {
        if left[i] < right[j] {
            arr.push(left[i]);
            i += 1;
        } else {
            arr.push(right[j]);
            j += 1;
        }
    }

    arr.extend(&left[i..]);
    arr.extend(&right[j..]);

    arr
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn mergesort_works() {
        let mut list: Vec<i32> = vec![2, 4, 6, 1, 5, 8, 3, 9, 10];
        mergesort(&mut list);
        let expected: Vec<i32> = vec![1, 2, 3, 4, 5, 6, 8, 9, 10];
        assert_eq!(list, expected);
    }
}
