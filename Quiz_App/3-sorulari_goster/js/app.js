const soruListesi = [
    new Soru("1- Hangisi Javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Nuget", d: "Npm" }, "d"),
    new Soru("2- Hangisi frontend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "javascript", d: "sql" }, "d"),
    new Soru("3- Hangisi backend kapsamında değerlendirilir?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Soru("4- Hangisi javascript programlama dilini kullanmaz", { a: "react", b: "angular", c: "javascvuejsript", d: "asp.net" }, "d")
];

const quiz = new Quiz(soruListesi)
const ui = new UI();

// console.log(quiz.soruGetir());

ui.btnNext.addEventListener("click", function () {
    if (quiz.sorular.length != quiz.soruIndex) {
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        // console.log(quiz);
    } else {
        console.log("Quiz bitti.")
    }
});

function optionSelected(e) {

    let selectedElement = e.target;
    if (selectedElement.nodeName == "SPAN") {
        selectedElement = selectedElement.parentElement;
    }

    const cevap = e.target.textContent[0];
    const soru = quiz.soruGetir();

    if (soru.cevabiKontrolEt(cevap)) {
        selectedElement.classList.add("correct");
        selectedElement.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        selectedElement.classList.add("inCorrect");
        selectedElement.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
    }
    quiz.soruIndex += 1;

    ui.disableAllOption();
}