// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line

bookStatus = selector(bookStatus)
reserve = selector(reserve)
checkout = selector(checkout)
checkIn = selector(checkIn)

bookStatus = selector(bookStatus)
reserve = selector(reserve)
checkout = selector(checkout)
checkIn = selector(checkIn)

bookStatus = selector(bookStatus)
reserve = selector(reserve)
checkout = selector(checkout)
checkIn = selector(checkIn)

checkIn.0.color = none
bookStatus.0.style.color = bookStatus_MAP.bookStatus.color
reserve.0 = bookStatus_MAP.bookStatus.canReserver ? 'enabled' : 'disabled'
checkout.0 = bookStatus_MAP.bookStatus.canCheckout ? 'enabled' : 'disabled'
checkIn.0 = bookStatus_MAP.bookStatus.canCheckIn ? 'enabled' : 'disabled'

checkIn.1.color = none
bookStatus.1.style.color = bookStatus_MAP.bookStatus.color
reserve.1 = bookStatus_MAP.bookStatus.canReserver ? 'enabled' : 'disabled'
checkout.1 = bookStatus_MAP.bookStatus.canCheckout ? 'enabled' : 'disabled'
checkIn.1 = bookStatus_MAP.bookStatus.canCheckIn ? 'enabled' : 'disabled'

checkIn.2.color = none
bookStatus.2.style.color = bookStatus_MAP.bookStatus.color
reserve.2 = bookStatus_MAP.bookStatus.canReserver ? 'enabled' : 'disabled'
checkout.2 = bookStatus_MAP.bookStatus.canCheckout ? 'enabled' : 'disabled'
checkIn.2 = bookStatus_MAP.bookStatus.canCheckIn ? 'enabled' : 'disabled'
