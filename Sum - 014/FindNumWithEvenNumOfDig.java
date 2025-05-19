class Solution {
    public int findNumbers(int[] nums) {
        int digits = 0;
        for(int i = 0; i < nums.length; i++){
            int eachValue = String.valueOf(nums[i]).length();
            if(eachValue % 2 == 0){
                digits++;
            }
        }
        return digits;
    }
}
