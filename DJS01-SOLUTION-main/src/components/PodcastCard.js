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