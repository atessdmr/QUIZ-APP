function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function (cevap) {
    return cevap === this.dogruCevap;
};


const soruListesi = [
    new Soru("1- Hangisi Javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Nuget", d: "Npm" }, "d"),
    new Soru("2- Hangisi frontend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "javascript", d: "sql" }, "d"),
    new Soru("3- Hangisi backend kapsamında değerlendirilir?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Soru("4- Hangisi javascript programlama dilini kullanmaz", { a: "react", b: "angular", c: "javascvuejsript", d: "asp.net" }, "d")
];