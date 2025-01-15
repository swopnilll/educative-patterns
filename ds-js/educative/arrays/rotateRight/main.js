const rotateRightByKBrute = (nums, k) => {
    if(nums.length === 0){
        return [];
    }

    // if k is larger then nums length
    k = k % nums.length;

    // Logic: To shift elements by array 1 position to right, we need to loop the entire array and move element to right. 

    // If we need to move k times, we need to run the above loop k times. 

        // Loop to move the element right 1 index at a time

        // [a,b,c,d,e]

        // arr[0] = arr[4]
        // arr[1] = arr[0]
        // arr[2] = arr[1]
        // arr[3] = arr[2]
        // arr[4] = arr[3]

        // Observe the pattern above. Beside, 0th index, for all it is a[i] = a[i-1]

        // Lets start with the condition. As 0th index is unusual, lets start with 1 

        // a[i] = a[i - 1] ; a[0] = a[-1] It fails. 

        // What if we start with i = 1 in the loop. 

        // a[1] = a[0]; a[2] = a[1]; OOps, a[1] info is lost. Might need a prev. 


        // firstElement = a[0];

        // prev = firstElement

        // i = 3

        // a,a,b,c

        // temp = a[i] // d
        // a[i] = prev; // c
        // prev = temp // d

        // a[0] = prev

        for(let i = 0; i < k; i++){
            prev = nums[0];
            
            for(let j = 1; j < nums.length; j++){
              temp = nums[j];
              nums[j] = prev;
              prev = temp;
            }
            
            nums[0] = prev;
          }
          
          
            // Replace this placeholder return statement with your code
    return nums;





    
}

// Another Brute Solution
const rotateRightByKBrute2 = (nums, k) => {
    if(nums.length === 0){
        return [];
    }
    
    k = k % nums.length;

    let lastElement;

    for(let i = 0; i < k; i++){
        lastElement = nums[nums.length - 1];

        for(let j = nums.length - 1; j > 0; j--){
            nums[j] = nums[j - 1];
        }

        nums[0] = lastElement;

    }

    return nums;
}