/*
    This module's responsibility is to represent a single donut in HTML
*/

export const Jokes = (jokesObject) => {
    return `
    <section class="joke">
    <ul>
            <li>id: ${jokesObject.id}</li>
            <li>question: ${jokesObject.question}</li>
            <li>answer: ${jokesObject.answer}</li>
        </ul>
    </section>
    `
}