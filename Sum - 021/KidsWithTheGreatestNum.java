class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int n = candies.length;
        int maxValue = candies[0];
        List<Boolean> results = new ArrayList<>();
        for(int i = 0; i < n; i++){
            if (candies[i] > maxValue){
                maxValue = candies[i];
            }
        }
        for(int i = 0; i < n; i++){
            if(candies[i] + extraCandies >= maxValue){
                results.add(true);
            } else {
                results.add(false);
            }
        }
        return results;
    }
}

