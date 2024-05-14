// mengambil id html display dan menjadikannya ke variable display
let display = document.getElementById('display');
// mendeklarasikan variabel nomerSelanjutnya menetapkan nilai string kosong
let nomerSelanjutnya = '';
// mendeklarasikan variabel nomerSebelmunya menetapkan nilai string kosong
let nomerSebelumnya = '';
// mendeklarasikan variabel operation menetapkan nilai ke null
let operation = null;


//  Ini mendefinisikan fungsi appendNumber yang akan 
//  menambahkan angka yang dikirim sebagai argumen ke currentNumber dan mengupdate nilai elemen display
function appendNumber(number) {
  nomerSelanjutnya += number;
  display.value = nomerSelanjutnya;
}

// Ini mendefinisikan fungsi clearDisplay yang akan 
// menetapkan nilai kosong ke currentNumber, previousNumber, operation, dan display.
function clearDisplay() {
  nomerSelanjutnya = '';
  nomerSebelumnya = '';
  operation = null;
  display.value = '';
}

// function performOperation(op) { Ini mendefinisikan fungsi performOperation yang akan 
// menyimpan operasi yang dikirim sebagai argumen ke variabel operation, 
// mengupdate previousNumber dengan currentNumber, dan menetapkan nilai kosong ke currentNumber.
function performOperation(op) {
  if (nomerSelanjutnya === '') return;
  if (nomerSebelumnya !== '') calculateResult();
  operation = op;
  nomerSebelumnya = nomerSelanjutnya;
  nomerSelanjutnya = '';
}

// function calculateResult() { Ini mendefinisikan fungsi calculateResult yang akan 
// menghitung hasil dari previousNumber dan currentNumber dengan operasi yang disimpan di variabel operation, 
// mengupdate nilai elemen display dengan hasil, dan menetapkan nilai kosong ke currentNumber dan previousNumber.
function calculateResult() {
  let result = eval(nomerSebelumnya + operation + nomerSelanjutnya);
  display.value = result;
  nomerSelanjutnya = result.toString();
  nomerSebelumnya = '';
  operation = null;
}

