class Solution {
    public int diagonalSum(int[][] mat) {
        int num = mat.length;
        int primary = 0, secondary = 0, sum = 0;
        for (int i = 0; i < num; i++) {
            primary += mat[i][i];
            secondary += mat[i][num - 1 - i];
        }
        sum = primary + secondary;
        if (num % 2 == 1) {
            sum -= mat[num / 2][num / 2];
        }
        return sum;
    }
}
