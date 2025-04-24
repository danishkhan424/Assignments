# L0 - Convert to Arrow Function with Default Parameters

## 📝 Problem Statement

You are provided with a simple function `multiply(a, b)` that multiplies two numbers. Your task is to:

- Rewrite this function using **arrow function syntax**.
- Add **default parameters** to the function.
  - If no arguments are provided, both `a` and `b` should default to `1`.

---

## 💡 Function Given

```javascript
function multiply(a, b) {
  return a * b;
}
```

---

## ✅ You Need To:

- Convert the function to an **arrow function**.
- Use **default values** for parameters `a` and `b`.

---

## 📥 Example Inputs and Outputs

### Example 1:
```javascript
multiply(3, 4); // Output: 12
```

### Example 2 (with defaults):
```javascript
multiply(); // Output: 1
```

---

## 🚀 Solution Approach

1. Use arrow function syntax:
   - Remove the `function` keyword.
   - Use `const` to store the function.
   - Use the `=>` arrow between parameters and function body.
2. Add default parameters:
   - `a = 1`, `b = 1` inside the parentheses.

---

## 📁 Submission Guidelines

- Push your solution to your Masai GitHub repository.
- Share the **Git directory link** as your submission.
