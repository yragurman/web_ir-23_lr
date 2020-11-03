import {
    addItemToPage,
    clearInputs,
    renderItemsList,
    getInputValues,
} from "./dom.js";

const submitButton = document.getElementById("Button__Submit");
const findButton = document.getElementById("find_button");
const findInput = document.getElementById("find_input");
const cancelFindButton = document.getElementById("Clear_button");

let films = [];

const addItem = ({ title, description, time, reviews }) => {
    const generatedID = uuid.v1();
    const newItem = {
        id: generatedID,
        title,
        description,
        time,
        reviews,
    };
    films.push(newItem);
    addItemToPage(newItem);
};


submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const { title, description, time, reviews } = getInputValues();
    clearInputs();
    addItem({
        title,
        description,
        time,
        reviews: reviews,
    });
});


findButton.addEventListener("click", () => {
    const foundFilms = films.filter(film => film.title.search(findInput.value) !== -1);
    renderItemsList(foundFilms);
});

cancelFindButton.addEventListener("click", () => {
    renderItemsList(films);
    findInput.value = "";
});