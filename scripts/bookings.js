import { getBookings, getBands, getVenues } from './database.js'
import { bandsAtVenue } from './venues.js'

const bands = getBands()
const gigs = getBookings()
const venues = getVenues()


// we have matched venues and bookings with returnVenues(gig)
// we need to iterate again through the venues and gigs to return the gig object that matches the venue 
const returnGigObject = () => {
    let gigObject = []
    for (const gig of gigs) {
        for (const venue of venues) {
            if (venue.id === gig.venueId)
                gigObject.push(gig)
        }
    }
    return gigObject
}
// declare variable to hold the returned gig object from the above function returnGigObject - this obj matches gigs to their venue

let gigObj = returnGigObject()

// match gigs at venues to their respective bands and form string 
const bandInfo = (gigObj) => {
    let bandName = ""
    // iterate through bands
    for (const band of bands) {
        if (band.id === gigObj.bandId) {
            bandName += `${band.name} `
        }
        return bandName
    }
}

const venueInfo = (gigObj) => {
    let venueName = ""
    // iterate through bands
    for (const venue of venues) {
        if (venue.id === gigObj.venueId) {
            venueName += `${venue.name} `
        }
        return venueName
    }
}

export const bookingsHTML = () => {
    let bookingsHTML = "<ul>"
    for (const band of bands) {
        for (const gig of gigs) {
            if (gig.bandId === band.id) {
                bookingsHTML += `<li id="booking--${gig.id}">${band.name} on ${gig.date}</li>`

            }
            bookingsHTML += "</ul>"
        }
    }
    return bookingsHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("booking")) {
            const [, bookingid] = itemClicked.id.split("--")
            let matchingVenue = null
            let matchingBand = null
            for (const gig of gigs) {
                if (gig.id === parseInt(bookingid)) {
                    for (const venue of venues){
                        if (venue.id === gig.venueId){
                            matchingVenue = venue.name
                        }
                    }
                    for (const band of bands) {
                        if (band.id ===gig.bandId){
                            matchingBand = band.name
                        }
                    }
                    window.alert(`Show Info: ${matchingBand} is playing on ${gig.date} at ${matchingVenue}`)
                }
            }
        }

    }
)




