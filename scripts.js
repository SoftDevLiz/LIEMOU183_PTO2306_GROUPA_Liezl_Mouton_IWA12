// scripts.js

const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Edit below line

/*  Changed some words:
    status to book?Status
    checkin to book?checkIn
    checkout to book?checkOut
*/

// Q for Sasha: What is it called when you initialize something without const/let/var? See the below. Are these still variables?

book1 = document.querySelector("#book1");
book2 = document.querySelector("#book2");
book3 = document.querySelector("#book3"); // Initialized + called all 3 book divs so we can look inside of them individually

book1Status = book1.querySelector(".status");
book1Reserve = book1.querySelector(".reserve");
book1CheckOut = book1.querySelector(".checkout");
book1CheckIn = book1.querySelector(".checkin");

book2Status = book2.querySelector(".status");
book2Reserve = book2.querySelector(".reserve");
book2CheckOut = book2.querySelector(".checkout");
book2CheckIn = book2.querySelector(".checkin");

book3Status = book3.querySelector(".status");
book3Reserve = book3.querySelector(".reserve");
book3CheckOut = book3.querySelector(".checkout");
book3CheckIn = book3.querySelector(".checkin");

book1CheckIn.style.color = ""; // Corrected the colour of the check in buttons
book2CheckIn.style.color = "";
book3CheckIn.style.color = "";

/**
 * A basic if loop function that:
 * 1. Checks the status of the book
 * 2. Changes the colour based on the status
 */
checkStatusChangeColour = () => {
  if (book1Status.textContent === "overdue") {
    book1Status.style.color = STATUS_MAP.overdue.color;
  } else if (book1Status.textContent === "reserved") {
    book1Status.style.color = STATUS_MAP.reserved.color;
  } else if (book1Status.textContent === "shelf") {
    book1Status.style.color = STATUS_MAP.shelf.color;
  } else if (book1status.textContent === "checkedOut") {
    book1status.style.color = STATUS_MAP.checkedOut.color;
  }

  if (book2Status.textContent === "overdue") {
    book2Status.style.color = STATUS_MAP.overdue.color;
  } else if (book2Status.textContent === "reserved") {
    book2Status.style.color = STATUS_MAP.reserved.color;
  } else if (book2Status.textContent === "shelf") {
    book2Status.style.color = STATUS_MAP.shelf.color;
  } else if (book2status.textContent === "checkedOut") {
    book2status.style.color = STATUS_MAP.checkedOut.color;
  }

  if (book3Status.textContent === "overdue") {
    book3Status.style.color = STATUS_MAP.overdue.color;
  } else if (book3Status.textContent === "reserved") {
    book3Status.style.color = STATUS_MAP.reserved.color;
  } else if (book3Status.textContent === "shelf") {
    book3Status.style.color = STATUS_MAP.shelf.color;
  } else if (book3status.textContent === "checkedOut") {
    book3status.style.color = STATUS_MAP.checkedOut.color;
  }
};

checkStatusChangeColour();

// reserve.0 = bookStatus_MAP.bookStatus.canReserver ? 'enabled' : 'disabled'
// checkOut.0 = bookStatus_MAP.bookStatus.canCheckout ? 'enabled' : 'disabled'
// checkIn.0 = bookStatus_MAP.bookStatus.canCheckIn ? 'enabled' : 'disabled'

// reserve.1 = bookStatus_MAP.bookStatus.canReserver ? 'enabled' : 'disabled'
// checkOut.1 = bookStatus_MAP.bookStatus.canCheckout ? 'enabled' : 'disabled'
// checkIn.1 = bookStatus_MAP.bookStatus.canCheckIn ? 'enabled' : 'disabled'

// reserve.2 = bookStatus_MAP.bookStatus.canReserver ? 'enabled' : 'disabled'
// checkOut.2 = bookStatus_MAP.bookStatus.canCheckout ? 'enabled' : 'disabled'
// checkIn.2 = bookStatus_MAP.bookStatus.canCheckIn ? 'enabled' : 'disabled'
