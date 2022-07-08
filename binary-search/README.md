# Binary Search

## Analogy

A more efficient search engine is similar to the one used to find a word in the dictionary.

Imagine that we are looking for a word with the letter **L**. The dictionary opens in half. If the word is not on the open page, you know which direction to look for: further or further back in the dictionary.

The process of estimating the new search page is repeated until the page with the desired word is found.

## Paradigm

This analogy well exemplifies the Divide and Conquer paradigm.

This technique consists of dividing a problem into smaller problems. In our example, we halved the search space with each iteration.

## Binary Search

The Binary search is an efficient algorithm for finding an element in a sorted list.

What makes it powerful is the fact that it uses the Divide and Conquer paradigm.

In conventional search, known as linear search, in the worst case, we would evaluate the entire list to find the desired element.

## Solution

- We take the index from the middle of the list every iteration
- If the middle position element is the desired one, we return the index
- If the desired element is greater, we should only look at the items on the right. So our start becomes **half + 1**
- If smaller, we should only look at the items on the left. So our end becomes **half - 1**
- We return **-1** when the desired element is not in the list.