class ContactRequest {
    constructor({ name, email, topic, message, consent }) {
        this.name = name;
        this.email = email;
        this.topic = topic;
        this.message = message;
        this.consent = consent;
        this.createdAt = new Date();
    }

    print() {
        console.log("НОВАЯ ЗАЯВКА С САЙТА КОФЕЙНИ «АРОМАТ»");
        console.log(`Имя:       ${this.name}`);
        console.log(`E-mail:    ${this.email}`);
        console.log(`Тема:      ${this.topic}`);
        console.log(`Сообщение: ${this.message}`);
        console.log(`Согласие:  ${this.consent ? "да" : "нет"}`);
        console.log(`Дата:      ${this.createdAt.toLocaleString("ru-RU")}`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const data = new FormData(form);

        const request = new ContactRequest({
            name: data.get("name").trim(),
            email: data.get("email").trim(),
            topic: data.get("topic"),
            message: data.get("message").trim(),
            consent: data.get("consent") === "on"
        });

        request.print();
        form.reset();
    });
});