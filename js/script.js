let totalNumberOfKm = document.getElementById('totalKm')

let ageSinglePassenger = document.getElementById('passengerAge')

const ticketPriceForKm = 0.2762
const shopButton  = document.getElementById('button-shop')

button.addEventListener('shop')

   let shopPrice;
   
   totalTicketPrice = totalNumberOfKm.value * ticketPriceForKm;
  


   if (ageSinglePassenger.value < 19) {
      totalTicketPrice = totalTicketPrice - (totalTicketPrice * 0.175);
   } else if (ageSinglePassenger.value >= 65) {
      totalTicketPrice = totalTicketPrice - (totalTicketPrice * 0.333);
   }
