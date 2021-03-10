//Class
class Orang  {
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    bekerja(){
        console.log(`${this.nama} sedang bekerja seperti biasa`);
    }
}
const Orang1 = new Orang("Jansy", 22);
const User1 = new Orang("Udin" , 22);

Orang1.bekerja();
User1.bekerja();


//Inheritance

class Orang  {
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    tidur(){
        console.log(`${this.nama} sedang tidur`);
    }
    makan(){
        console.log(`${this.nama} sedang makan`);
    }
}

class Pelajar extends Orang{
    constructor(nama, umur, namaSekolah){
        super(nama, umur );
        this.namaSekolah = namaSekolah;
    }
    belajar(){
        console.log(`${this.nama} belajar di ${this.namaSekolah}`);
    }
}

const tidur1 = new Orang("Budi", 17);
const makan1 = new Orang("Joko" , 17);
const pelajar1 = new Pelajar("John", 17, "Unklab");

tidur1.tidur();
makan1.makan();
pelajar1.belajar();