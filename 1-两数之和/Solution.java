import java.util.HashMap;

class Solution {
  public static void main(String[] args) {
    try {

      int[] nums = new int[]{2,3,7,14};
      int[] arr = twoSum(nums, 9);
      for(int i: arr) {
        System.out.println(i);
      }
    }catch(Exception e) {
      e.printStackTrace();
    }
  }

  public static int[] twoSum(int[] nums, int target) {
    HashMap map = new HashMap();
    for(int i = 0; i < nums.length; i++) {
      int num = nums[i];
      int rest = target - num;
      if (!map.containsKey(rest)) {
        map.put(num, i);
      } else {
        return new int[]{ (int) map.get(rest), i};
      }
    }
    return new int[]{};
  }
}
// nums = [2, 7, 11, 15], target = 9