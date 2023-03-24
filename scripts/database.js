
const database = {
    bands: [{
        id: 1,
        name:"Iron Maiden",
        members: 4,
        genre: "Metal",
        year_Formed: 1980
    }, {
        id: 2,
        name: "Damara Pentecust",
        members: 3,
        year_Formed: 2001
    }, {
        id: 3,
        name: "Anna Bowton",
        members: 2,
        genre: "Metal",
        year_Formed: 2011
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        members: 1,
        genre: "Metal",
        year_Formed: 2020
    }, {
        id: 5,
        name: "Elmira Bick",
        members: 8,
        genre: "Metal",
        year_Formed: 1989
    }, {
        id: 6,
        name: "Bernie Dreger",
        members: 4,
        genre: "Pop-Punk",
        year_Formed: 2021

    }, {
        id: 7,
        name: "Rolando Gault",
        members: 3,
        genre: "Country",
        year_Formed: 2005

    }, {
        id: 8,
        name: "Tiffanie Tubby",
        members: 5,
        genre: "Soul",
        year_Formed: 2002

    }, {
        id: 9,
        name: "Tomlin Cutill",
        members: 4,
        genre: "Post-Punk",
        year_Formed: 2007

    }, {
        id: 10,
        name: "Arv Biddle",
        members: 4,
        genre: "Alternative Rock",
        year_Formed: 1998

    }],
    venues: [{
        id: 1, name: "Sage Gateshead", address: "123 Goodman Rd", sqft: 600, maxoccupency: 100
    }, {
        id: 2, name: "Bataclan", address: "123 Goodman Rd", sqft: 900, maxoccupency: 450
    },
    {
        id: 3, name: "NODUS", address: "123 Fallon Blvd", sqft: 1300, maxoccupency: 800
},
    {
        id: 4, name: "Thalia Hall", address: "190 Baxter St", sqft: 700, maxoccupency: 300
    },
    {
        id: 5, name: "Empty Bottle", address: "1407 Joshua Ln", sqft: 3100, maxoccupency: 300
    }, {
        id: 6, name: "Everybody Loves Ramen", address: "123 Goodman Rd", sqft: 1000, maxoccupency: 500
    }, {
        id: 7, name: "Ryman Ampitheatre", address: "123 Goodman Rd", sqft: 1900, maxoccupency: 800
    }, {
        id: 8, name: "Gerald Minter Hall", address: "123 Goodman Rd", sqft: 990, maxoccupency: 300
    }, {
        id: 9, name: "Berghain", address: "489 Berlin Way", sqft: 4000, maxoccupency: 2000
    }, {
        id: 10, name: "The Station", address: "56 Cleaveland St", sqft: 2300, maxoccupency: 1000
    }],
    bookings: [{
        id: 1, venueId: 10, bandId: 5, date: "2021-01-01"
    }, {
        id: 2, venueId: 5, bandId: 3, date: "2021-01-04"
    }, {
        id: 3, venueId: 2, bandId: 1, date: "2021-01-04"
    }, {
        id: 4, venueId: 8, bandId: 4, date: "2022-01-04"
    }, {
        id: 5, venueId: 9, bandId: 7, date: "2023-25-04"
    }, {
        id: 6, venueId: 4, bandId: 10, date:" 2021-4-09"
    }, {
        id: 7, venueId: 1, bandId: 8, date:"2021-05-10"
    }, {
        id: 8, venueId: 2, bandId: 9, date:"2021-05-16"
    }, {
        id: 9, venueId: 3, bandId: 2, date:"2021-05-15"
    }, {
        id: 10, venueId: 9, bandId: 6, date:"2021-06-04"
    }]
}

export const getBands = () => {
    return database.bands.map(band => ({ ...band }))
}

export const getVenues = () => {
    return database.venues.map(venue => ({ ...venue }))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({ ...booking }))
}

