// this is the main function where it creates the receipt
function createReceipt() {
    let name = document.getElementById("Pname").value;
    let idNum = document.getElementById("IDnumber").value;
    let service = document.getElementById("service").value;
    let session = document.getElementById("session").value;
    let customerType = document.getElementById("custType").value;
    let subtotal = calculateSubtotal(service, session);
    let discount = calculateDiscount(subtotal, customerType);
    let total = subtotal - discount;

    switch (service) {
        case "dental":
            service = "Dental Check-up (PHP 850)";
            break;
        case "eye":
            service = "Eye Check-up (PHP 900)";
            break;
        case "physical":
            service = "Physical Check-up (PHP 800)";
            break;
    }
     document.getElementById("receipt").innerHTML =
            "Name: " + name + "<br>" +
            "ID Number: " + idNum + "<br>" +
            "Order: " + service + "<br>" +
            "Quantity: " + session + "<br>" +
            "Subtotal: ₱" + subtotal + "<br>" +
            "Discount: ₱" + discount + "<br>" +
            "Total: ₱" + total + "<br>";
            return false;
        }

    // this is to calculate the price without discount
    function calculateSubtotal(service, session) {
            let price;
            switch (service) {
                case "dental":
                    price = 850;
                    break;
                case "eye":
                    price = 900;
                    break;
                case "physical":
                    price = 800;
                    break;
                default:
                    price = null;
            }
            if (price == null) {
                return "Service not found";
            } else {
                return price * session;
            }
        }
// this is to calculate the price with a discount (if needed) 
    function calculateDiscount(total, customerType) {
            let discount;
            switch (customerType) {
                case "nondiscounted":
                    discount = 0;
                    break;
                case "discounted":
                    discount = total * 0.15;
                    break;
            }
            return discount;
        }
