import { getVenues, getBands, getBookings } from './database.js'

// When a venue name is clicked, a window alert should be presented to the user that displays all of the bands that have booked the venue.

const bands = getBands()
const venues = getVenues()
const gigs = getBookings()

//this function returns an HTML string of venues in list form
export const venuesBooked = () => {
    let venueHTML = "<ul>"
    for (const venue of venues) {
    venueHTML+= `<li id="venue--${venue.id}">${venue.name}</li>`
    } 
    venueHTML += "</ul>"
    return venueHTML
}

// this function iterates through bookings and venues to find matching ID and pushes them into a new array

export const bandsAtVenue = (venue) => {
    const venueBookings = []
    for (const gig of gigs) {
        if (gig.venueId === venue.id) {
            venueBookings.push(gig)
            }
        }
        return venueBookings
    }
// define a function that returns a string of band names playing at that venue 
const assignedBandNames = (venueBookings) => {
    let bandNames = ""
    for (const venueBooking of venueBookings) {
        for (const band of bands) {
            if (band.id === venueBooking.bandId) {
                bandNames += `${band.name} and `
            }
        }
    }
    return bandNames
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("venue")) {
            const [,venueId] = itemClicked.id.split("--")
            for (const venue of venues) {
                if (venue.id === parseInt(venueId)) {
                    let venueAssignment = bandsAtVenue(venue)
                    let band = assignedBandNames(venueAssignment)

                    window.alert(`This venue has been booked by ` + band.slice(0, -5))
                }
            }
        }
    }
)