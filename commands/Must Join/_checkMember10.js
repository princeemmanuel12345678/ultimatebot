/*CMD
  command: /checkMember10
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Must Join
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = options.result.status

if(user=="member"||user=="creator"||user=="administrator"){
  Bot.runCommand("/bonus12")
} else {
  Bot.runCommand("/mustJoin")
}

Bot.setProperty("status", user,"text")
