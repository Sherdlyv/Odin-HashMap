export class HashMap {
    constructor(){
        this.load_factor = 0.75;
        this.capacity =16;
        this.bucket = new Array(this.capacity).fill(null);
        
    }
}