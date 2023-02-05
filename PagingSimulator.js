const memorySize = 1024;
const pageSize = 32;
const numPages = (memorySize / pageSize);

const memory = Array(numPages);
for (let i = 0; i < memory.length; i++) {
    memory[i] = 0;
}

var table = []

for (let i = 0; i < numPages; i++) {
    table.push({
        pageNum: i,
        validBit: 0,
        frameNum: null

    })

}


const allocatePage = (requiredSize) => {
    var pagesAllocated = 0;

    for (let i = 0; i < memory.length; i++) {
        if (memory[i] === 0) {
            memory[i] = 1;
            table[i].validBit = 1;
            table[i].pageNum = i;
            pagesAllocated++;
            if (pagesAllocated === requiredSize) {
                return {
                    pageNum: table[i].pageNum,
                    memory: memory[i],
                    requiredPage: requiredSize
                }

            }
        }
    }
    return false;
}

function deallocate(pageNum) {
    memory[pageNum] = 0;
    table[pageNum].frameNum = null;
    table[pageNum].validBit = 0;
    table[pageNum].pageNum = 0;


}
console.log(allocatePage(1));
console.log(allocatePage(3));
console.log(allocatePage(2));
console.log(allocatePage(1));
console.log(allocatePage(2));
console.log(allocatePage(4));
console.log(allocatePage(4));
console.log(allocatePage(7));
console.log(allocatePage(6));
