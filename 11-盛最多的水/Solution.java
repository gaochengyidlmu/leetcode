import static java.lang.Math.*;

class Solution {
  public static void main(String[] args) {
    int[] height = new int[]{1, 8, 6, 2, 5, 4, 8, 3, 7};
    Solution solution = new Solution();
    System.out.println(solution.maxArea(height));
  }

  public int maxArea(int[] height) {
    int i = 0;
    int j = height.length - 1;
    int tempArea = 0;

    while (i < j) {
      int area = min(height[i], height[j]) * (j - i);
      if ( area > tempArea) {
        tempArea = area;
      }
      if (height[i] <= height[j]) {
        i ++;
      } else {
        j--;
      }
    }
    return tempArea;
  }
}