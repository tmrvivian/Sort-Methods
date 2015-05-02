function bubbleSort(array) {
	if(array.length > 1){
		var temp, x=array.length-1;
		while(x>0){
			for(var i = 0; i<x; i++){
				if(array[i]>array[i+1]){
					temp = array[i];
					array[i]=array[i+1];
					array[i+1]=temp;
				}
			}
			x--;
		}
			
	}
	return array;
}

function split(wholeArray) {
	var mid = Math.floor(wholeArray.length/2), 
		firstHalf, 
		secondHalf;
	firstHalf = wholeArray.slice(0,mid);
	secondHalf = wholeArray.slice(mid);
    return [firstHalf, secondHalf];
}

function merge(first, second) {
	var prev,
		mergeAry=[];
	while (first.length>0 && second.length >0){
		if(mergeAry.length===0){
			prev =0;
		}else {
			prev = mergeAry[mergeAry.length-1];
		}
		var firstdiff = first[0]-prev;
		var seconddiff = second[0]-prev;
		if(firstdiff>seconddiff){//push the smallest first
			mergeAry.push(second.shift());
		}else{
			mergeAry.push(first.shift());
		}
	}
	if(first.length>0){
		mergeAry = mergeAry.concat(first);
	}else if (second.length>0){
		mergeAry = mergeAry.concat(second);
	}
	return mergeAry;
}

function mergeSort(array){
	if(array.length<=1){
		return array;
	}else {
		var ary = split(array);
		return merge(mergeSort(ary[0]), mergeSort(ary[1]));
	}
}







