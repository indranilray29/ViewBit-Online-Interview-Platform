import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
  { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
  { id: "completed", title: "Completed", variant: "secondary" },
  { id: "succeeded", title: "Succeeded", variant: "default" },
  { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

export const QUICK_ACTIONS = [
  {
    icon: Code2,
    title: "New Call",
    description: "Start an instant call",
    color: "primary",
    gradient: "from-primary/10 via-primary/5 to-transparent",
  },
  {
    icon: Users,
    title: "Join Interview",
    description: "Enter via invitation link",
    color: "purple-500",
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Plan upcoming interviews",
    color: "blue-500",
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
  },
  {
    icon: Clock,
    title: "Recordings",
    description: "Access past interviews",
    color: "orange-500",
    gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
  },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
  {
    id: "fibonacci-sequence",
    title: "Fibonacci Sequence",
    description:
      "Given an integer `n`, return the `n`th Fibonacci number.\n\nThe Fibonacci sequence is defined as:\n\nF(0) = 0, F(1) = 1\nF(n) = F(n - 1) + F(n - 2) for n > 1",
    examples: [
      {
        input: "n = 2",
        output: "1",
        explanation: "F(2) = F(1) + F(0) = 1 + 0 = 1",
      },
      {
        input: "n = 5",
        output: "5",
        explanation: "F(5) = 5",
      },
    ],
    starterCode: {
      javascript: `function fibonacci(n) {
  // Write your solution here
  
}`,
      python: `def fibonacci(n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public int fibonacci(int n) {
        // Write your solution here
        
    }
}`,
      cpp: `class Solution {
public:
    int fibonacci(int n) {
        // Write your solution here
        
    }
};`,
    },
    constraints: [
      "0 ≤ n ≤ 30",
    ],
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    description:
      "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.",
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "([)]"',
        output: "false",
      },
    ],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  
}`,
      python: `def is_valid(s):
    # Write your solution here
    pass`,
      java: `class Solution {
    public boolean isValid(String s) {
        // Write your solution here
        
    }
}`,
      cpp: `class Solution {
public:
    bool isValid(string s) {
        // Write your solution here
        
    }
};`,
    },
    constraints: [
      "1 ≤ s.length ≤ 104",
      "s consists of parentheses only '()[]{}'.",
    ],
  },
  {
    id: "merge-sorted-arrays",
    title: "Merge Two Sorted Arrays",
    description:
      "You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.\n\nMerge `nums2` into `nums1` as one sorted array. The final sorted array should not be returned by the function but instead stored inside the array `nums1`.",
    examples: [
      {
        input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        output: "[1,2,2,3,5,6]",
      },
      {
        input: "nums1 = [1], m = 1, nums2 = [], n = 0",
        output: "[1]",
      },
    ],
    starterCode: {
      javascript: `function merge(nums1, m, nums2, n) {
  // Write your solution here
  
}`,
      python: `def merge(nums1, m, nums2, n):
    # Write your solution here
    pass`,
      java: `class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here
        
    }
}`,
      cpp: `class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        // Write your solution here
        
    }
};`,
    },
    constraints: [
      "nums1.length == m + n",
      "nums2.length == n",
      "-10^9 ≤ nums1[i], nums2[i] ≤ 10^9",
    ],
  },
];


export const LANGUAGES = [
  { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
  { id: "python", name: "Python", icon: "/python.png" },
  { id: "java", name: "Java", icon: "/java.png" },
  { id: "cpp", name: "C++", icon: "/cpp.png" },
] as const;

export interface CodeQuestion {
  id: string;
  title: string;
  description: string;
  examples: Array<{
    input: string;
    output: string;
    explanation?: string;
  }>;
  starterCode: {
    javascript: string;
    python: string;
    java: string;
    cpp: string; };
  constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];