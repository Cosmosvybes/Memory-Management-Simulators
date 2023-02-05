let memorySize = 4096 // define the memory size, in this case 1024 is equall to  1kb
let numSegment = 10; // define the number of desired segments
let memory = new Array(memorySize).fill(0);

let segments = []; //declaration of list to store the segments in this case we have 10 segments 

//implementation of the base_address and segments sizes;
for (var i = 0; i < numSegment; i++) {
    segments.push(
        {

            base_address: (i * memorySize / numSegment),
            size: (memorySize / numSegment),
            isFree: true
        }
    )
};


// implement memory allocating function;
const allocateMemory = (size) => {
    for (var i = 0; i < numSegment; i++) {
        let segment = segments[i];

        // calculating the number of memory required
        let block_required = Math.ceil(size / segment.size)
        if (segment.isFree && segment.size >= size) {
            segment.isFree = false;
            return {
                programIndex: i,
                base_address: segment.base_address,
                size: size,
                block_size: block_required
            }

        }

    }

    return "insufficient Memory"

}

const de_Allocating = (programIndex) => {
    segments[programIndex].isFree = true
}


let process_7 = allocateMemory(40);
let process_1 = allocateMemory(200);
let process_2 = allocateMemory(320);
let process_8 = allocateMemory(12);
let process_4 = allocateMemory(60);



console.log(process_1)
console.log(process_2)
console.log(process_4)
console.log(process_7)
console.log(process_8)


