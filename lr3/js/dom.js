const TitleInput = document.getElementById("Title");
const DescriptionInput = document.getElementById("Description");
const TimeInput = document.getElementById("Time");
const ReviewsInput = document.getElementById("Reviews")
const itemsContainer = document.getElementById("items_container");

// local functions
const getItemID = (id) => `item-${id}`;

const itemTemplate = ({ id, title, description, time, reviews }) => `
<li id="${getItemID(id)}" class="card mb-3 item-card">
                <img src="image/Films_Image.jpg" class="item-container__image" alt="card">
                <div class="items_container__card-body">
                    <h5 class="items_container__card-title">${title}</h5>
                    <p class="items_container__card-text">${description}</p>
                    <p class="items_container__time">Duration:${time}</p>
                    <p class="items_container__reviews">Reviews:${reviews}</p>
                    <button id="" type="button" class="btn btn-info">Edit</button>
                    <button class="Remove_button" type="button">Remove</button>
                </div>
            </li>`;

// exposed functions
export const clearInputs = () => {
    TitleInput.value = "";
    DescriptionInput.value = "";
    TimeInput.value = "";
    ReviewsInput.value = "";
};

export const addItemToPage = ({ id, title, description, time, reviews }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, title, description, time, reviews })
    );
};
export const renderItemsList = (items, onEditItem, onRemoveItem) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item, onEditItem, onRemoveItem);
    }
};
export const getInputValues = () => {
    return {
        title: TitleInput.value,
        description: DescriptionInput.value,
        time: TimeInput.value,
        reviews: ReviewsInput.value,
    };
};