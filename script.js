function threeSum(arr, target) {
// write your code here
	let n=arr.length;
	let sum=arr[0]+arr[1]+arr[n-1];
	arr.sort(function(a,b){
	  return a-b;
  })
	for(let i=1;i<n;i++)
		{
			let j=i+1;
			let k=n-1;
			while(j<k)
				{
					let sum=arr[i]+arr[j]+arr[k];
					if(sum<target)
					{
						j++;
					}
					else
					{
						k--;
					}
					if(Math.abs(sum-target)<Math.abs(ans-target))
					{
						ans=sum;
					}
				}
		}
	console.log(ans);
}

module.exports = threeSum;
