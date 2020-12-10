function binarySearch(arr, target, mid=0){
    if(arr[mid + 1] === target)return true
    if(arr[mid - 1] === target)return true
    if(arr[mid] === target)return true
    if(target < arr[mid] && target > arr[mid - 1] || target > arr[mid] && target < arr[mid + 1]) return 
    if(target < arr[0] || target > arr[arr.length-1])return false
    
    
    if(arr[mid] < target){
        mid = (mid + arr.length-1) / 2 | 0
    }else if(arr[mid] > target){
        mid = (mid + 0) / 2 | 0
    }

    return binarySearch(arr, target, mid)
}

 

// [2,4,6,8,10,12,14,16,18,20]