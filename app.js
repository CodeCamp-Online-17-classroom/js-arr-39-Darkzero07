// ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

const array = ["Elephant", "Ant", "Cat", "Eagle", "Zebra"];
const array2 = array.filter((arr) => {
  if (arr[0] === "E") {
    return arr;
  }
});
console.log(array2);
// ค่าที่ขึ้นต้นด้วยตัว E

const array = ["APPLE", "oRanGE", "PEACH", "PaPAYA"];
const array2 = array.filter((arr) => {
  if (arr === arr.toUpperCase()) {
    return arr;
  }
});
console.log(array2);
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด

const array = ["Krabi", "Chonburi", "Buriram", "Saraburi", "Phrae"];
const array2 = array.filter((arr) => {
  lowerText = arr.toLowerCase();
  if (lowerText.includes("buri")) {
    return arr;
  }
});
console.log(array2);
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
