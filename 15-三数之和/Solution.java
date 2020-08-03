import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution {
  public static void main(String[] args) {
    int[] nums = new int[]{-1, 0, 1, 2, -1, -4, -1};
    Solution solution = new Solution();
    System.out.println(solution.threeSum(nums));
  }

  public List<List<Integer>> threeSum(int[] nums) {
    // first, sort the input array
    Arrays.sort(nums);

    List<List<Integer>> ans = new ArrayList<>();

    for (int i = 0; i < nums.length; i++) {
      if (nums[i] > 0) break;
      if (i > 0 && nums[i] == nums[i - 1]) continue;

      // two point, optimize the time complexity from n^2 to n
      int L = i + 1;
      int R = nums.length - 1;
      while(L < R) {
        int sum = nums[i] + nums[L] + nums[R];
        if (sum == 0) {
          ans.add(Arrays.asList(nums[i], nums[L], nums[R]));

          while(L < R && nums[L] == nums[L + 1]) L++;
          while(L < R && nums[R] == nums[R - 1]) R--;
          L++;
          R--;
        } 
        // if sum > 0, minus the right point
        else if (sum > 0) R--;
        // if sum < 0, add the left point
        else if (sum < 0) L++;
      }
    }
    return ans;
  }
}
