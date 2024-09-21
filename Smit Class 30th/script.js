// arr = ["Cat","Dog","Lion","Tiger","Camel"];
// console.log("Original Array : ",arr);

// arr.pop();
// console.log("Array after pop : ", arr);

// arr.push("Snakes");
// console.log("Array after push : ",arr);

// arr.shift();
// console.log("Array after shift : ",arr);

// arr.unshift("Monkey");
// console.log("Array after unshift : ",arr);

// arr.splice(4,1,"New Value");
// console.log("Array after Splice : ",arr);
// Problem:
// You have an array of numbers. You will ask the user to either slice or splice the array. Based on their choice:
// * Slice will create a new array from a range of the original array (without modifying the original array).
// * Splice will remove a part of the original array (modifying it) and optionally insert new elements.

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
alert("You have an array of Number : " + array);

var options = Number(prompt("Press : 1 : Slice" + "\n" + "Press : 2 : Splice"));

if (options === 1) {
    var a = Number(prompt("Enter Starting index : "));
    var b = Number(prompt("Enter Ending index : "));

    var newArray = array.slice(a, b);
    alert(newArray);
}
else if (options === 2) {
    var x = Number(prompt("Enter Starting Index : "));
    var y = Number(prompt("Enter How many Index to delete : "));
    var choice = Number(prompt("Enter How many Value you want to Insert (Only 3 Insertions are allowed): "));

    if (choice === 1) {
        var newElement = prompt("What do you want to Insert : ");
        array.splice(x, y, newElement);
        alert(array);
    }
    else if (choice === 2) {
        var newElement1 = prompt("What do you want to Insert : ");
        var newElement2 = prompt("What do you want to Insert : ");
        array.splice(x, y, newElement1, newElement2);
        alert(array);
    }
    else if (choice === 3) {
        var newElement1 = prompt("What do you want to Insert : ");
        var newElement2 = prompt("What do you want to Insert : ");
        var newElement3 = prompt("What do you want to Insert : ");
        array.splice(x, y, newElement1, newElement2, newElement3);
        alert(array);
    }
    else{
        prompt("Invalid Option!!!");
    }
}
else {
    alert("Invalid option!!!");
}



// var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// alert("You have an array of numbers: " + array.join(", "));

// var options = Number(prompt("Press: 1 for Slice" + "\n" + "Press: 2 for Splice"));

// if (options === 1) {
//     var startIndex = Number(prompt("Enter the starting index:"));
//     var endIndex = Number(prompt("Enter the ending index:"));

//     var newArray = array.slice(startIndex, endIndex);
//     alert("Sliced array: " + newArray.join(", "));
// } else if (options === 2) {
//     var startIndex = Number(prompt("Enter the starting index:"));
//     var deleteCount = Number(prompt("Enter how many indices to delete:"));
//     var insertCount = Number(prompt("Enter how many values you want to insert (up to 3 insertions allowed):"));

//     if (insertCount === 1) {
//         var newElement = prompt("What do you want to insert?");
//         array.splice(startIndex, deleteCount, newElement);
//         alert("Updated array: " + array.join(", "));
//     } else if (insertCount === 2) {
//         var newElement1 = prompt("What do you want to insert?");
//         var newElement2 = prompt("What do you want to insert?");
//         array.splice(startIndex, deleteCount, newElement1, newElement2);
//         alert("Updated array: " + array.join(", "));
//     } else if (insertCount === 3) {
//         var newElement1 = prompt("What do you want to insert?");
//         var newElement2 = prompt("What do you want to insert?");
//         var newElement3 = prompt("What do you want to insert?");
//         array.splice(startIndex, deleteCount, newElement1, newElement2, newElement3);
//         alert("Updated array: " + array.join(", "));
//     } else {
//         alert("Invalid option! Please choose between 1 to 3 insertions.");
//     }
// } else {
//     alert("Invalid option! Please select either 1 or 2.");
// }
// var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// alert("You have an array of Numbers: " + array);

// var options = Number(prompt("Press: 1: Slice" + "\n" + "Press: 2: Splice"));

// function handleSlice() {
//     var a = Number(prompt("Enter Starting index: "));
//     var b = Number(prompt("Enter Ending index: "));
//     var newArray = array.slice(a, b);
//     alert("Sliced Array: " + newArray);
// }

// function handleSplice() {
//     var x = Number(prompt("Enter Starting Index: "));
//     var y = Number(prompt("Enter How many Index to delete: "));
//     var choice = Number(prompt("Enter How many Values you want to Insert (Only 3 Insertions are allowed): "));

//     var newElements = [];
//     for (let i = 0; i < choice; i++) {
//         newElements.push(prompt(`What do you want to Insert (${i + 1}/${choice}): `));
//     }

//     array.splice(x, y, ...newElements);
//     alert("Updated Array: " + array);
// }

// if (options === 1) {
//     handleSlice();
// } else if (options === 2) {
//     handleSplice();
// } else {
//     alert("Invalid option!!!");
// }



// class ArrayManipulator {
//     constructor(array) {
//         this.array = array;
//     }

//     displayArray() {
//         alert("Current array: " + this.array);
//     }

//     sliceArray(start, end) {
//         if (this.validateIndices(start, end)) {
//             const slicedArray = this.array.slice(start, end);
//             alert("Sliced Array: " + slicedArray);
//         } else {
//             alert("Invalid indices for slicing!");
//         }
//     }

//     spliceArray(start, deleteCount, elements) {
//         if (this.validateIndex(start) && deleteCount >= 0) {
//             this.array.splice(start, deleteCount, ...elements);
//             alert("Updated Array: " + this.array);
//         } else {
//             alert("Invalid indices for splicing!");
//         }
//     }

//     validateIndex(index) {
//         return Number.isInteger(index) && index >= 0 && index < this.array.length;
//     }

//     validateIndices(start, end) {
//         return this.validateIndex(start) && this.validateIndex(end) && start < end;
//     }
// }

// const arrayManipulator = new ArrayManipulator([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
// arrayManipulator.displayArray();

// const options = Number(prompt("Press: 1: Slice" + "\n" + "Press: 2: Splice"));

// if (options === 1) {
//     const start = Number(prompt("Enter Starting index: "));
//     const end = Number(prompt("Enter Ending index: "));
//     arrayManipulator.sliceArray(start, end);
// } else if (options === 2) {
//     const start = Number(prompt("Enter Starting Index: "));
//     const deleteCount = Number(prompt("Enter How many Index to delete: "));
    
//     const choice = Number(prompt("Enter How many Values you want to Insert (1-3): "));
//     const newElements = [];

//     for (let i = 0; i < choice; i++) {
//         newElements.push(prompt(`What do you want to Insert (${i + 1}/${choice}): `));
//     }

//     arrayManipulator.spliceArray(start, deleteCount, newElements);
// } else {
//     alert("Invalid option!!!");
// }
