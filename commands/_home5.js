/*CMD
  command: /home5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ð¼ trx wallet
CMD*/

let wallet = User.getProperty("wallet")
if(wallet==undefined){
var button = [
[{title : "ð¼ Set / Change Wallet" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*ð¡ Your currently set TRX wallet is:* `not set`\n\nð¹It will be used for *all future withdrawals.*");
}else{
var button = [
[{title : "ð¼ Set / Change Wallet" , command : "/wallet"}]
]
Bot.sendInlineKeyboard(button,"*ð¡ Your currently set TRX wallet is:* \n `"+wallet+"`\n\nð¹It will be used for *all future withdrawals.*");
}
