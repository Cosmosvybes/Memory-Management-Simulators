const memorySize = 1024
let block_size = 16;
let blocks = memorySize / block_size;

let memory = new Array(blocks);

for (let i = 0; i < memory; i++) {
    memory[i] = 0;
};



let free_blocks = [];
for (var i = 0; i < blocks; i++) {
    free_blocks.push({
        start_address: 0,
        size: block_size
    });
};


let allocateBlock = (requestSize) => {
    free_blocks.sort((a, b) => a.size - b.size);
    for (let i = 0; i < free_blocks.length; i++) {
        if (free_blocks[i].size >= requestSize) {
            let unallocatedBlocks = free_blocks[i];
            unallocatedBlocks.size = requestSize;
            unallocatedBlocks.start_address =  block_size * i;
            memory[unallocatedBlocks.start_address / block_size] = requestSize;
            return {
                start_address: unallocatedBlocks.start_address,
                allocatedBlocks: unallocatedBlocks.size
            }
        }
    }
    return "Error: no sufficient memory "

}


const deallocate = (allocatedBlock) => {
    memory[allocatedBlock.start_address / block_size] = 0;
    free_blocks.push(allocatedBlock)
};
let allocate_block = allocateBlock(3)

console.log(allocate_block)
deallocate(allocate_block)