pub fn bubblesort(list: &mut Vec<i32>) -> &mut Vec<i32> {
    for pos in 0..list.len() {
        for j in 0..list.len() - 1 - pos {
            if list[j] > list[j + 1] {
                list.swap(j, j + 1);
            }
        }
    }
    list
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn bubblesort_works() {
        let mut list: Vec<i32> = vec![2, 4, 6, 1, 5, 8, 3, 9, 10];
        let result = bubblesort(&mut list);
        let expected: Vec<i32> = vec![1, 2, 3, 4, 5, 6, 8, 9, 10];
        assert_eq!(*result, expected);
    }
}
