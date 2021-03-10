//CallBack

function mandi(){
    console.log("Mandi");
}

function sarapan(callback){
    setTimeout(() => {
        console.log("Sarapan Tertunda 3 detik");
        callback();
    },3000);
 }

function berangkatSekolah(){
    console.log("Berangkat Sekolah");
}

mandi();
sarapan(berangkatSekolah);

//Promise
//let helloWorld = new Promise(resolve) => {
//
//}