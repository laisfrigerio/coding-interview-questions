# Balanced Parentheses

Given an expression containing different open and close parentheses, your task is to find whether the expression has balanced parentheses or not. The expression can contain the following parentheses →’(’, ‘)’, ‘{‘, ‘}’, ‘[‘, ‘]’. The expression is said to be balanced if:

- The order of the opening and closing brackets is same.
- The opening bracket must be closed with the same type of closing bracket.

<p align="center">
  <a><img src="./images/examples-balanced-or-not.png" alt="4 exemplos de expressões: 2 balanceadas e 2 não balanceadas" title="4 exemplos de expressões: 2 balanceadas e 2 não balanceadas"></a>
</p>

## Solution

One of ways to solutions this problem is using Stack Data Structure.

In this solution, we will use a stack data structure to evaluate an expression. Stack is a **LIFO** (Last In, First Out) based data structure with only one entry and exit point. You can read about it here: Stack and its basic operations. When we will encounter an opening bracket we will push it into the stack and when we will encounter the closing bracket, we will compare the top element. If the top element is not a corresponding opening bracket, we will return False.

### Solution steps:

- If we get an opening bracket we will simply push it to stack.
- If we get a closing bracket we will compare the top element.
- If there is not a match of closing and opening brackets we can return False.
- At last if the stack is empty, we can conclude that the expression is balanced.

## 🚀 Referral links

- [Check if given expression is balanced or not](https://www.techiedelight.com/check-given-expression-balanced-expression-not/)
- [Stack Data Structure: Practice Problems and Interview Questions](https://medium.com/techie-delight/stack-data-structure-practice-problems-and-interview-questions-9f08a35a7f19)
