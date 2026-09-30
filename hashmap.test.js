import { HashMap } from "./main.js"; 

const myHashMap = new HashMap();

test("Data Structure", () => { 
    expect(myHashMap.capacity).toBe(16);
    expect(myHashMap.load_factor).toBe(0.75);
    expect(myHashMap.buckets.length).toBe(16);
});


test('Generate an index for a key', () => {
    const index = myHashMap.hash('sara');
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(myHashMap.capacity);
});
