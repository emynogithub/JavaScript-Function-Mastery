# Splice

## splice can do three magic tricks:

- Cut things out 🪓

- Put things in 🎁

- Do both at the same time 🪄


```javascript
array.splice(start, deleteCount);
```
- **start** → where the scissors ✂️ begin (the index).

- **deleteCount** — How many items to remove

    * This is the number of items to remove starting from the start index.

    * It counts items like 1, 2, 3… (not indexes).

1. **Cut things out (remove)**

```javascript
const fruits = ["Carrot", "Banana", "Watermelon", "Orange"];

fruits.splice(0, 3);
```

👉 Start at index 0 (banana).
👉 Remove 3 items.
NB: Remove Carrot, Banana, and watermelon

2. **Put things in (add)**

```javascript
fruits.splice(1, 0, "Gova", "Avacado pear")

console.log(fruits)
```

👉 Start at index 1.
👉 Remove 0 items (nothing cut).
👉 Add "Gova" and "Avacado" there.

3. **Do both (replace)**

```javascript
fruits.splice(0, 1, "Cherry", "Grape");

console.log(fruits)
```
👉 Start at index 0 (banana).
👉 Remove 1 item (banana).
👉 Put "grape" and "Cherry" there.

4. **add after**

```javascript
fruits.splice(6, 0, "Lemon", "Mango")

console.log(fruits)
```
👉 Start from after the last item, 6
👉 Delete nothing
👉 Add Lemon and Mango after

5. **Take everything from somewhere**

```javascript
fruits.splice(7)

console.log(fruits)
```

👉 Start at index 7.
👉 Remove everything after that.