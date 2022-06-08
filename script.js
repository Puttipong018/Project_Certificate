
function vatPrice(){
    let userPrice = document.getElementById("price_food").value
    let vatResult = (userPrice * 7) / 100

    document.getElementById("vat_price").innerHTML ="Vat จากค่าอาหาร = " + vatResult.toFixed(2) + " บาท"

    let allPrice = parseInt(userPrice)  + parseInt(vatResult) 

    document.getElementById("all_price").innerHTML = "ราคาที่ต้องจ่ายทั้งหมด = " + allPrice + " บาท"
}




