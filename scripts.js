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

book1 = document.querySelector("#book1"); // Initialized + called all 3 book divs so we can look inside of them individually
book2 = document.querySelector("#book2");
book3 = document.querySelector("#book3");

book1Status = book1.querySelector(".status"); // Called the status and buttons of each book so we can work with them individually
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

/**
 * A basic if loop function that:
 * 1. Checks the status of the book
 * 2. Changes the colour based on the status
 *
 * @example if book 1 is overdue, change the status colour to red and so on, for every book.
 */
statusColourController = () => {
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

/**
 * An if loop function that:
 * 1. Checks the status of each book
 * 2. Enables/disables the different buttons based on the status of the book
 *
 * @example if book 1's status is overdue, disable the reserve button based on the STATUS_MAP, and so on. For every book.
 */
buttonController = () => {
  if (book1Status.textContent === "overdue") {
    STATUS_MAP.overdue.canReserve
      ? (book1Reserve.disabled = false)
      : (book1Reserve.disabled = true);
    STATUS_MAP.overdue.canCheckout
      ? (book1CheckOut.disabled = false)
      : (book1CheckOut.disabled = true);
    STATUS_MAP.overdue.canCheckIn
      ? (book1CheckIn.disabled = false)
      : (book1CheckIn.disabled = true);
  } else if (book1Status.textContent === "reserved") {
    STATUS_MAP.reserved.canReserve
      ? (book1Reserve.disabled = false)
      : (book1Reserve.disabled = true);
    STATUS_MAP.reserved.canCheckout
      ? (book1CheckOut.disabled = false)
      : (book1CheckOut.disabled = true);
    STATUS_MAP.reserved.canCheckIn
      ? (book1CheckIn.disabled = false)
      : (book1CheckIn.disabled = true);
  } else if (book1Status.textContent === "shelf") {
    STATUS_MAP.shelf.canReserve
      ? (book1Reserve.disabled = false)
      : (book1Reserve.disabled = true);
    STATUS_MAP.shelf.canCheckout
      ? (book1CheckOut.disabled = false)
      : (book1CheckOut.disabled = true);
    STATUS_MAP.shelf.canCheckIn
      ? (book1CheckIn.disabled = false)
      : (book1CheckIn.disabled = true);
  } else if (book1Status.textContent === "checked out") {
    STATUS_MAP.checkedOut.canReserve
      ? (book1Reserve.disabled = false)
      : (book1Reserve.disabled = true);
    STATUS_MAP.checkedOut.canCheckout
      ? (book1CheckOut.disabled = false)
      : (book1CheckOut.disabled = true);
    STATUS_MAP.checkedOut.canCheckIn
      ? (book1CheckIn.disabled = true)
      : (book1CheckIn.disabled = false);
  }

  if (book2Status.textContent === "overdue") {
    STATUS_MAP.overdue.canReserve
      ? (book2Reserve.disabled = false)
      : (book2Reserve.disabled = true);
    STATUS_MAP.overdue.canCheckout
      ? (book2CheckOut.disabled = false)
      : (book2CheckOut.disabled = true);
    STATUS_MAP.overdue.canCheckIn
      ? (book2CheckIn.disabled = false)
      : (book2CheckIn.disabled = true);
  } else if (book2Status.textContent === "reserved") {
    STATUS_MAP.reserved.canReserve
      ? (book2Reserve.disabled = false)
      : (book2Reserve.disabled = true);
    STATUS_MAP.reserved.canCheckout
      ? (book2CheckOut.disabled = false)
      : (book2CheckOut.disabled = true);
    STATUS_MAP.reserved.canCheckIn
      ? (book2CheckIn.disabled = false)
      : (book2CheckIn.disabled = true);
  } else if (book2Status.textContent === "shelf") {
    STATUS_MAP.shelf.canReserve
      ? (book2Reserve.disabled = false)
      : (book2Reserve.disabled = true);
    STATUS_MAP.shelf.canCheckout
      ? (book2CheckOut.disabled = false)
      : (book2CheckOut.disabled = true);
    STATUS_MAP.shelf.canCheckIn
      ? (book2CheckIn.disabled = false)
      : (book2CheckIn.disabled = true);
  } else if (book2Status.textContent === "checked out") {
    STATUS_MAP.checkedOut.canReserve
      ? (book2Reserve.disabled = false)
      : (book2Reserve.disabled = true);
    STATUS_MAP.checkedOut.canCheckout
      ? (book2CheckOut.disabled = false)
      : (book2CheckOut.disabled = true);
    STATUS_MAP.checkedOut.canCheckIn
      ? (book2CheckIn.disabled = true)
      : (book2CheckIn.disabled = false);
  }

  if (book3Status.textContent === "overdue") {
    STATUS_MAP.overdue.canReserve
      ? (book3Reserve.disabled = false)
      : (book3Reserve.disabled = true);
    STATUS_MAP.overdue.canCheckout
      ? (book3CheckOut.disabled = false)
      : (book3CheckOut.disabled = true);
    STATUS_MAP.overdue.canCheckIn
      ? (book3CheckIn.disabled = false)
      : (book3CheckIn.disabled = true);
  } else if (book3Status.textContent === "reserved") {
    STATUS_MAP.reserved.canReserve
      ? (book3Reserve.disabled = false)
      : (book3Reserve.disabled = true);
    STATUS_MAP.reserved.canCheckout
      ? (book3CheckOut.disabled = false)
      : (book3CheckOut.disabled = true);
    STATUS_MAP.reserved.canCheckIn
      ? (book3CheckIn.disabled = false)
      : (book3CheckIn.disabled = true);
  } else if (book3Status.textContent === "shelf") {
    STATUS_MAP.shelf.canReserve
      ? (book3Reserve.disabled = false)
      : (book3Reserve.disabled = true);
    STATUS_MAP.shelf.canCheckout
      ? (book3CheckOut.disabled = false)
      : (book3CheckOut.disabled = true);
    STATUS_MAP.shelf.canCheckIn
      ? (book3CheckIn.disabled = false)
      : (book3CheckIn.disabled = true);
  } else if (book3Status.textContent === "checked out") {
    STATUS_MAP.checkedOut.canReserve
      ? (book3Reserve.disabled = false)
      : (book3Reserve.disabled = true);
    STATUS_MAP.checkedOut.canCheckout
      ? (book3CheckOut.disabled = false)
      : (book3CheckOut.disabled = true);
    STATUS_MAP.checkedOut.canCheckIn
      ? (book3CheckIn.disabled = true)
      : (book3CheckIn.disabled = false);
  }
};

book1CheckIn.style.color = ""; // Changed the colour of the buttons in the DOM to the correct colours
book2CheckIn.style.color = "";
book3CheckIn.style.color = "";

/*  Call the two functions so that they execute. 
  Q for Sasha: 
  1. How would it have looked if I called it with .addEventListener?
  2. Why is my JSDoc comments not working? Does not show on hover.
  */
statusColourController();
buttonController();
