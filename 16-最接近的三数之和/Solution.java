import static java.lang.Math.*;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class Solution {
  public static void main(String[] args) {
    int[] nums = new int[]{0,2,1,-3};
    Solution solution = new Solution();
    System.out.println(solution.threeSumClosest(nums, 1));
  }

  public int threeSumClosest(int[] nums, int target) {
    Arrays.sort(nums);
    int closest = nums[0] + nums[1] + nums[2];
    int len = nums.length;

    for (int i : nums) {
      System.out.println("i: " + i);
    }

    for (int i = 0; i < len - 2; i++) {
      int left = i + 1;
      int right = len - 1;

      while(left < right) {
        int sum = nums[left] + nums[right] + nums[i];
        System.out.println("sum: " + sum);

        // 如果 closest 差值的绝对值 > sum 差值的绝对值，说明 sum 更接近目标
        if (Math.abs(closest - target) > Math.abs(sum - target)) {
          closest = sum;
        }

        // 如果 sum > target，则应该减小数值
        if (sum > target) {
          right--;
        } 
        // 如果 sum < target，则应该增大数值
        else if (sum < target) {
          left++;
        } else {
          return sum;
        }
      }
    }
    return closest;
  }
}