/*CMD
  command: /stats
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: š statistic
CMD*/

let deposit = Libs.ResourcesLib.userRes("deposit")
let withdraw = Libs.ResourcesLib.userRes("withdraw")
let currency = "TRX" // Set Your Currency
let userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
let re = Libs.ResourcesLib.anotherChatRes("re", "global")
let depo = Libs.ResourcesLib.anotherChatRes("depo", "global")
Bot.sendMessage(
  "*š Bot Live Statistics*" +
    "\n\nš¤* Total User:* " +
    tota.value().toFixed(0) +
    "\n\n*ā Total Investments:* " +
    depo.value().toFixed(4) +
    " *TRX*" +
    "\n\n*š Total Reinvests:* " +
    re.value().toFixed(4) +
    " *TRX*" +
    "\n\n*š³ Total Withdrawn:* " +
    userPayment.value().toFixed(4) +
    " *TRX*"
)

