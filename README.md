# Odin-HashMap


A clean and efficient **HashMap** data structure written in vanilla JavaScript (ES6 Modules). This project was built following The Odin Project curriculum to demonstrate object-oriented programming, manual memory management, and Automated Testing (TDD) using Jest.

---

##  How It Works

Unlike primitive JavaScript objects, this implementation manages data storage directly inside an array of buckets, handling growth and data organization manually.

1. **Hash Function:** Converts any text-based key into a numerical index using prime number multiplication and a modulo operation based on the table's capacity.
2. **Collision Resolution:** When two different keys generate the exact same index, the project uses **Separate Chaining**. Each bucket acts as a Linked List where overlapping nodes are chained sequentially.
3. **Dynamic Resizing:** The map monitors data density using a **Load Factor of 0.75**. If the number of stored keys exceeds 75% of the capacity, the map automatically doubles its size and re-hashes all existing records to ensure optimal lookups.

---

## Available Methods

| Method | Returns | Description |
| :--- | :--- | :--- |
| `set(key, value)` | `void` | Inserts a new pair. Triggers a resizing cycle if the load factor threshold is reached. |
| `get(key)` | `value` \| `null` | Searches the target bucket and returns the associated value, or `null` if not found. |
| `has(key)` | `boolean` | Verifies whether a key exists inside the map. |
| `remove(key)` | `boolean` | Locates a key and detaches its node from the chain. Returns `false` on failure. |
| `length()` | `number` | Iterates through all buckets and counts the total number of stored keys. |
| `clear()` | `void` | Resets the structure by clearing all current memory buckets. |
| `keys()` | `array` | Collects and returns all keys inside a flat array. |
| `values()` | `array` | Collects and returns all values inside a flat array. |
| `entries()` | `array` | Serializes the state into a multi-dimensional matrix: `[[key, value], ...]`. |

---

##  Testing

This repository uses **Jest** alongside **Babel** for automated unit testing. 

To install dependencies and execute the test suite locally, run:

```bash
npm install
npx jest
```

## Author
# Verne Sherdly
