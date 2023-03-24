import { bandsBooked } from './bands.js'
import { venuesBooked } from './venues.js'
import { bookingsHTML } from './bookings.js'



const mainContainer = document.querySelector("#container")

const siteHTML = `
<h1>Tour some Sugar on Me</h1>
<article class="sub-container">
<section class="details">
    <h2>Bookings</h2>
    ${bookingsHTML()}
</section>
    <section class="details">
        <h2>Venues</h2>
        ${venuesBooked()}
    </section>
    <section class="details">
        <h2>Bands</h2>
        ${bandsBooked()}
    </section>
</article>
`

mainContainer.innerHTML = siteHTML
