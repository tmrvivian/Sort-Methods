//test bubble sort function
describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

	it('handels an array with a single element', function(){
		expect( bubbleSort([1]) ).toEqual(  [1]  );
	});

	it('sorts an array from smallest to largest', function(){
		expect( bubbleSort([3, 2,1]) ).toEqual(  [1,2,3]  );
		expect(bubbleSort([2,5,7,2,7])).toEqual([2,2,5,7,7]);
	});
});

//test merge sort function
describe('Merge array function', function(){
    it('is able to merge two sorted arrays', function(){
    	expect(merge([1],[3])).toEqual([1,3]);
    	expect(merge([1],[2,5])).toEqual([1,2,5]);
    	expect(merge([5,9],[8,13])).toEqual([5,8,9,13]);
        expect(merge([1,2,5],[5,8,9,13])).toEqual([1,2,5,5,8,9,13]);
    });
});

describe('Split array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([2,4,7,9])).toEqual([[2,4],[7,9]]);
    expect(split([2,4,7,9,3])).toEqual([[2,4],[7,9,3]]);
  });
});

describe('Merge Sort', function(){
    it('handles an empty array', function(){
        expect( mergeSort([]) ).toEqual( [] );
    });

    it('handles an array with a single element ', function(){
        expect( mergeSort([1]) ).toEqual( [1] );
    });

    it('Sorts an array ', function(){
        expect( mergeSort([1,5,2,8]) ).toEqual( [1,2,5,8] );
        expect( mergeSort([1,5,2,5,9,13,8]) ).toEqual([1,2,5,5,8,9,13] );
    });
});