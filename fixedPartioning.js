const memorySize = 1024;
let partitionSize = 64;
let memory = new Array(memorySize / partitionSize).fill(0);
let partitionList = [];

for (let i = 0; i < memory.length; i++) {
    partitionList.push({
        startAddress: 0,
        size: partitionSize,
        isFree: true,
        Fragmentation: 0
    })
};

let totalFragmentation = []

let allocateMemory = (size) => {
    for (let i = 0; i < partitionList.length; i++) {
        let partition = partitionList[i];
        if (partition.isFree && partition.size >= size) {
            partitionList[i].startAddress = (i * partitionSize + size);
            partitionList[i].size = size;
            partitionList[i].isFree = false;
            partitionList[i].Fragmentation = partitionSize - size;
            totalFragmentation.push(partitionList[i].Fragmentation)
            return partition;

        }

    }
    return "Error: partition not sufficient"
}




console.log(allocateMemory(1));
console.log(allocateMemory(2));
console.log(allocateMemory(3));
console.log(allocateMemory(4));
console.log(allocateMemory(5));
console.log(allocateMemory(6));
console.log(allocateMemory(7));
console.log(allocateMemory(8));
console.log(allocateMemory(9));
console.log(allocateMemory(68));
var sum = 0;
for (let i = 0; i < totalFragmentation.length; i++) {
    sum += totalFragmentation[i]
}
console.log("Total Fragmentation is:", sum)

