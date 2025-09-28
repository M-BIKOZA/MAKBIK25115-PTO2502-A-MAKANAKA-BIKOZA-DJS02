import { GenreService } from "../utils/GenreService";   
import { DateUtils } from "../utils/DateUtils";

// Create the template for a podcast card
const template = document.createElement("template");
template.innerHTML = /*html*/ `
    <style>
        .card {
        background: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.2s; 
}

        .card:hover {
        transform: scale(1.02);
}
        .card img {
        width: 100%;
        border-radius: 6px;
}
       . card h3 {
        margin: 0.5rem 0;
}
        .card p {
        margin: 0;
        font-size: 0.8rem; 
        color: var (--grey-text)
}
        .tags {
        margin-top: 0.5rem;
}
        .tag {
        font-size: 0.7rem;
        background: var(--light-grey);
        margin-right: 0.3rem;
        margin-top: 0.3rem;
        border-radius: 4px;
        display: inline-block;
}