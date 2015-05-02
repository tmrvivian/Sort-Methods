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
	var mid = Math.floor(wholeArray.length/2);
    return [wholeArray.slice(0,mid), wholeArray.slice(mid)];
}

function merge(first, second) {
	var 
		mergeAry=[],
		firstdiff,
		seconddiff;
	while (first.length>0 && second.length >0){
		firstdiff = first[0];
		seconddiff = second[0];
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

function SortRunTime(time,func){
	var sum = 0, run=time, start, end, timeLapse;
	
	while(run>0){
	    var ary =[];
	    for(var i = 0; i<600; i++){
		ary.push(Math.floor(Math.random()*10000));
	}
		start = new Date();
		func(ary);
		timeLapse = new Date() - start;
		sum+= timeLapse;
		run--;
	}
	return sum/time;
}



console.log('BubbleSort Time: '+SortRunTime(1000,bubbleSort));
console.log('MergeSort Time: '+SortRunTime(1000,mergeSort));


