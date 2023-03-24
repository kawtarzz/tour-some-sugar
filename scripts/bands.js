import { getBands, getBookings, getVenues } from './database.js'

const bands = getBands()
const venues = getVenues()
const gigs = getBookings()

export const assignedVenues = (band) => {
    // declaring variable for html string
    let venueNames = ""
    // iterate through bookings
    for (const gig of gigs) {
        // if band.id matches gig.bandid
        if (gig.bandId === band.id) {
            // iterate the venues array to match the venue id to the gig venue id
            for (const venue of venues){
                // if venue id matches gig's venue id, add to the string
                if (venue.id === gig.venueId) {
                    venueNames += `${venue.name}`
                }
            }
            
        }
    }
    return venueNames
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("band")) {
            const [, bandId] = itemClicked.id.split("--")
            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
                    let venue = assignedVenues(band)
                    window.alert(`This band is booked at ${venue}`)
                }
            }
        }
    }
)

export const bandsBooked = () => {
    let bandHTML = "<ul>"

    for (const band of bands) {
        bandHTML += `<li id="band--${band.id}">${band.name}</li>`
    }
    bandHTML += "</ul>"
    return bandHTML

}


