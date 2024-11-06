/**
 * 1. Tổng các số dương trong mảng
 */
const tinhTong = () =>{
    const arrayTong = document.querySelector("#arrayInput").value;
    const numbers = arrayTong.split(',').map(num => parseFloat(num.trim()));
    let arrayNumber = [];
    for (let num of numbers) {
        if (num > 0) {
            arrayNumber.push(num);
        }
    }
    const sum = arrayNumber.reduce((a, b) => a + b, 0);
    document.getElementById("ketQuaTinhTong").innerHTML = "Tổng các số dương: " + sum;
}
/**
 * 2. Đếm có bao nhiêu số dương trong mảng
 */
const demSo = () =>{
    const arrayDemSo = document.querySelector("#arrayInputDemSo").value;
    const numberDemSo = arrayDemSo.split(',').map(num1 => parseFloat(num1.trim()));
    const arraySoDuong = numberDemSo.filter(num1 => num1 > 0);
    const count = arraySoDuong.length;
    document.querySelector("#ketQuaDemSo").innerHTML = "Vâỵ có tất cả là: " + count + " số dương trong mảng trên";
}
/**
 * 3. Tìm số nhỏ nhất trong mảng
 */

const timSoNhoNhat = () => {
        const arraySoNhoNhat = document.querySelector("#arraySoNhoNhat").value;
        const numbers = arraySoNhoNhat.split(',').map(num => parseFloat(num.trim()));
        const min = Math.min(...numbers);
        document.querySelector("#ketQuaSoNhoNhat").innerHTML = "Số nhỏ nhất trong mảng: " + min;
}
/**
 * 4. Tìm số dương nhỏ nhất trong mảng.
 */
const timSoDuongNhoNhat = () => {
    const arraySDNN = document.querySelector("#arraySoDuongNhoNhat").value;
    const numberSoDNN = arraySDNN.split(',').map(num => parseFloat(num.trim()));
    const soDNN = numberSoDNN.filter(num => num > 0);
    const minSoDNN = Math.min(...soDNN);
    document.querySelector("#ketQuaTimSoDuongNhoNhat").innerHTML = "Vậy số dương nhỏ nhất trong mảng đã cho là: " + minSoDNN;
}
/**
 * 5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1
 */
const timSoChan = () => {
    const soChan = document.querySelector("#arraySoChan").value;
    const numbersoChan = soChan.split(',').map(num => parseFloat(num.trim()));

    let lastEven = -1;
    for (let i = 0; i < numbersoChan.length; i++) {
        if (numbersoChan[i] % 2 === 0) {  
            lastEven = numbersoChan[i];  
        }
    }

    document.querySelector("#ketQuaTimSoChan").textContent = lastEven === -1 ? "Không có số chẵn trong mảng." : "Số chẵn cuối cùng trong mảng: " + lastEven;
}
/**
 * 6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
 */
const doiCho = () => {
    const mangSo = document.querySelector("#mangSo").value; 
    const viTri1 = parseInt(document.querySelector("#viTri1").value); 
    const viTri2 = parseInt(document.querySelector("#viTri2").value); 
    let number = mangSo.split(',').map(num => parseFloat(num.trim())); 

    if (viTri1 < 0 || viTri2 < 0 || viTri1 >= number.length || viTri2 >= number.length) {
        document.getElementById("ketQuaDoiCho").innerHTML = "Vị trí nhập không hợp lệ!";
        return;
    }
    let temp = number[viTri1];
    number[viTri1] = number[viTri2];
    number[viTri2] = temp;

    document.querySelector("#ketQuaDoiCho").innerHTML = "Mảng sau khi đổi chỗ: " + number.join(", ");
}
/**
 * 7. Sắp xếp mảng theo thứ tự tăng dần
 */
const sapXep = () =>{
    const mangSXep = document.querySelector("#sapXepMang").value;
    const numberSapXep = mangSXep.split(',').map(num => parseFloat(num.trim()));
    numberSapXep.sort((a, b) => a - b);
    document.querySelector("#ketQuaSapXep").innerHTML = "Mảng sau khi sắp xếp: " + numberSapXep.join(", ");
}
/**
 * 8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
 */
const timSoNguyenTo= () => {
    const timSoNT = document.querySelector("#arraySoNT").value;
    const numbers = timSoNT.split(',').map(num => Number(num.trim()));
    let firstPrime = -1;

    // Tìm số nguyên tố đầu tiên
    for (let num of numbers) {
        let isPrime = true;
        // Kiểm tra điều kiện số nguyên tố
        if (num < 2) 
            continue;  
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {  
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            firstPrime = num;
            break;
        }
    }
    document.querySelector("#ketQuaTimSoNguyenTo").innerHTML = 
        firstPrime !== -1 
        ? "Số nguyên tố đầu tiên trong mảng là: " + firstPrime 
        : "Mảng không có số nguyên tố, trả về -1";
}
/**
 * 9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
 */
const kTraSoNguyen = ()=> {
    const soNguyen = document.querySelector("#kiemTraSoNguyen").value;
    const numbers = soNguyen.split(',').map(num => parseFloat(num.trim()));

    const soNguyenCount = numbers.filter(num => Number.isInteger(num)).length;
    document.querySelector("#ketQuaKiemTra").innerHTML = 
        "Số lượng số nguyên trong mảng là: " + soNguyenCount;
}
/**
 * 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
 */
const soSanh = () => {
    const input = document.querySelector("#soSanh").value.trim();
    const numbers = input.split(',').map(num => parseFloat(num.trim()));

    const soLuongDuong = numbers.filter(num => num > 0).length;
    const soLuongAm = numbers.filter(num => num < 0).length;

    let ketQua;
    if (soLuongDuong > soLuongAm) {
        ketQua = "Số lượng số dương nhiều hơn số lượng số âm.";
    } else if (soLuongDuong < soLuongAm) {
        ketQua = "Số lượng số âm nhiều hơn số lượng số dương.";
    } else {
        ketQua = "Số lượng số dương và số lượng số âm bằng nhau.";
    }

    document.querySelector("#ketQuaSoSanh").innerHTML = ketQua;
}