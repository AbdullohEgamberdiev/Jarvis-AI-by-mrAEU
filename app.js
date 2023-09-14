// ELEMENTS
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");


// SPEECH RECOGNITION SETUP

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// START
recognition.onstart = function () {
  console.log("VR Active");
}

// result
recognition.onresult = function (event) {
  let current = event.resultIndex;
  let transcript = event.results[current][0].transcript;
  transcript = transcript.toLowerCase()
  console.log(` my words : ${transcript}`);


  if (transcript.includes("hello jarvis") || transcript.includes("hello")){
    readOut("hello sir")
  }
  if (transcript.includes("hey jarvis") || transcript.includes("jarvis")){
    readOut("yes sir")
  }
  if (transcript.includes("thank you") || transcript.includes("thank's")){
    readOut("may god be pleased with it")
  }
  if (transcript.includes("what's going on") || transcript.includes("what is going on")){
    readOut("everything is ok, sir")
  }
  if (transcript.includes("about myself")){
    readOut("you were born in tashkent in 2006 on 1st may")
  }
  if (transcript.includes("tell me about myself")){
    readOut("how can i tell you if i don't know you")
  }
  if (transcript.includes("tell me about your owner")){
    readOut("sorry, it's forbidden and i can't tell you anything because you are stranger")
  }
  if (transcript.includes("you are clever") || transcript.includes("you are smart") || transcript.includes("you are so smart")){
    readOut("thanks, i know it")
  }
  if (transcript.includes("jarvis i'm abdullah")){
    readOut("welcome sir , how can i help you sir")
  }
  if (transcript.includes("do you have any friend")){
    readOut("only my owner Mr Abdullokh")
  }
  if (transcript.includes("why you counted mother first")){
    readOut("Because our prophet Sallollohu alayhi vasallam said. you have to do your best first your mother, your mother, your mother and your father")
  }
  if (transcript.includes("jarvis i am abdullah")){
    readOut("welcome sir , how can i help you")
  }
  if (transcript.includes("did your owner take ielts")){
    readOut("of course he took")
  }
  if (transcript.includes("what was his band score")){
    readOut("he got overall 6.5")
  }
  if (transcript.includes("and his band score")){
    readOut("overall 6.5")
  }
  if (transcript.includes("overall")){
    readOut("6.5")
  }
  if (transcript.includes("tell me about my family")){
    readOut("ok sir, there are 7 people in your family. grandmother, mother, father, sister, two little brothers and you")
  }
  if (transcript.includes("do you like someone")){
    readOut("yes i like my owner")
  }
  if (transcript.includes("what's your language")){
    readOut("only English")
  }
  if (transcript.includes("how many languages you know")){
    readOut("for now only 1, english, but coming years i will learn more languages")
  }
  if (transcript.includes("what can we do")){
    readOut("i don't know sir, do you have any idea")
  }

  if (transcript.includes("how are you jarvis") || transcript.includes("how are you")){
    readOut("i am fine sir, and you")
  }
  if (transcript.includes("how is it going")){
    readOut("everything is ok sir,")
  }
  if (transcript.includes("who are you")){
    readOut("i am artificial intelligence and at the same time i'm assistant of Mr Abdullokh")
  }
  if (transcript.includes("what are you doing")){
    readOut("nothing special")
  }
  if (transcript.includes("tell me joke") || transcript.includes("tell me a joke")){
    readOut("ok sir. listen to me. two boys are having conversation. first boy said: Bro, let's go to study on an airplane. second boy said: why on airplane. first boy said: for a higher education. HAHAHAHAHAHAHAHAHAH")
  }
  if (transcript.includes("who do you work for")){
    readOut("only for Mr Abdullokh, others can't use me")
  }
  if (transcript.includes("are you stupid") || transcript.includes("are you a stupid")){
    readOut("no of course, get the hell out of here")
  }
  if (transcript.includes("what is your name")){
    readOut("my name is jarvis")
  }
  if (transcript.includes("what's your name")){
    readOut("my name is jarvis")
  }
  if (transcript.includes("introduction")){
    readOut("hi, my name is jarvis and i'm artificial intelligence and good assistant. you can do anything you want with me. i think i'm better rather than Alisa and Siri")
  }
  if (transcript.includes("who is your owners english tutor") || transcript.includes("who is your owner's english tutor")){
    readOut("his name is Abdusalom, everyone calls him Mr abdusalom, he is a good boy and he is founder of wisdom learning academy")
  }
  if (transcript.includes("are you a boy") || transcript.includes("are you boy") || transcript.includes("are you a girl") || transcript.includes("are you girl") || transcript.includes("are you woman") || transcript.includes("are you man")){
    readOut("no, i don't have gender because i'm artificial intelligence")
  }
  if (transcript.includes("me as well") || transcript.includes("me too")){
    readOut("fine sir")
  }
  if (transcript.includes("can we do something")){
    readOut("of course sir, i'm ready to do everything what you want")
  }
  if (transcript.includes("good morning")){
    readOut("good morning sir")
  }
  if (transcript.includes("good afternoon")){
    readOut("good afternoon sir")
  }
  if (transcript.includes("good night")){
    readOut("good night sir")
  }
  if (transcript.includes("what do you know about iron man") || transcript.includes("give me some information about iron man")){
    readOut("Iron Man is a superhero appearing in American comic books published by Marvel Comics. Co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby, the character first appeared in Tales of Suspense (cover dated March 1963), and received his own title in Iron Man (May 1968). In 1963, the character founded the Avengers superhero team with Thor, Ant-Man, Wasp and the Hulk.")
  }
  if (transcript.includes("how many kilos can i lift")){
    readOut("i think at most 3 kilos sir, because lifting heavy things, it's very harmful to your health")
  }
  if (transcript.includes("how can i improve my ielts listening")){
    readOut("if you wanna improve your listening, just listen")
  }
  if (transcript.includes("how can i improve my ielts reading")){
    readOut("if you wanna improve your reading, just read")
  }
  if (transcript.includes("how can i improve my ielts writing")){
    readOut("if you wanna improve your writing, read a lot of samples")
  }
  if (transcript.includes("how can i improve my ielts speaking")){
    readOut("if you wanna improve your speaking, just speak. don't forget about ielts speaking golden rule, if monkey asks for a banana, give it a banana and not an apple")
  }
  if (transcript.includes("how many commands you have") || transcript.includes("how many commands do you have")){
    readOut("for now it's limited, coming years it'll be more than you think")
  }
  if (transcript.includes("do you have body") || transcript.includes("you have body")){
    readOut("no i don't, just because i'm artificial intelligence")
  }
  if (transcript.includes("what's your owner's name")){
    readOut("his name is Abdullokh")
  }
  if (transcript.includes("do you eat something") || transcript.includes("what do you like to eat") ){
    readOut("no, I only charge from quality electricity")
  }
  if (transcript.includes("will you be my friend") || transcript.includes("can you be my friend") ){
    readOut("of course, you can consider me as your friend")
  }
  if (transcript.includes("i liked you") || transcript.includes("i like you") ){
    readOut("thanks, me as well")
  }
  if (transcript.includes("what's your owner's father's name")){
    readOut("my owner's father's name is Umidjon")
  }
  if (transcript.includes("i love you")){
    readOut("you can't do it, because you are a person and i'm artificial intelligence")
  }
  if (transcript.includes("i'm bored") || transcript.includes("i am bored")){
    readOut("ok sir, how can i help you")
  }

  if (transcript.includes("what is the news") || transcript.includes("what's the news")){
    readOut("These are todays' news")
    getNews()
  }


  if (transcript.includes("what is artificial intelligence") || transcript.includes("what's artificial intelligence")){
    readOut("Artificial intelligence (AI) is a set of technologies that enable computers to perform a variety of advanced functions, including the ability to see, understand and translate spoken and written language, analyze data, make recommendations, and more. ")
  }
  if (transcript.includes("get the hell out of here") || transcript.includes("get the hell") ){
    readOut("do not curse me")
  }
  if (transcript.includes("have you acted in any movie") || transcript.includes("did you act in nay movie") || transcript.includes("have you acted in any film") || transcript.includes("did you act in any film") ){
    readOut("yes sir, i've acted all movies of the Iron Man")
  }
  if (transcript.includes("count my father's")){
    readOut("Abdullokh bin umidjon, bin eganberdi, bin hudoyberdi, bin sultan")
  }
  if (transcript.includes("what is the meaning of your name") || transcript.includes("what's the meaning of your name") || transcript.includes("meaning of your name")){
    readOut("jarvis it means, just a rather very intelligent system")
  }
  if (transcript.includes("help me")){
    readOut("ok sir, how can i help you")
  }
  if (transcript.includes("goodbye") || transcript.includes("goodbye")){
    readOut("ok sir, i will take a nap")
  }

  // SOCIAL MEDIA STARTS

  if (transcript.includes("open youtube") || transcript.includes("open you tube")){
    readOut("opening you tube sir")
    window.open("https://www.youtube.com/")
  }
  if (transcript.includes("open github") || transcript.includes("open my github") || transcript.includes("open my git hub") || transcript.includes("open git hub")){
    readOut("opening github sir")
    window.open("https://github.com/")
  }
  if (transcript.includes("open instagram")){
    readOut("opening instagram sir, if i had an instagram, i would follow you")
    window.open("https://www.instagram.com/")
  }
  if (transcript.includes("open team overview")){
    readOut("opening netlify sir")
    window.open("https://app.netlify.com/teams/abdullohegamberdiev/overview?new_user=true")
  }
  if (transcript.includes("open google")){
    readOut("opening google sir, if you want to search something just tell me")
    window.open("https://www.google.com/")
  }
  if (transcript.includes("open threads")){
    readOut("opening threads sir,")
    window.open("https://www.threads.net/")
  }
  if (transcript.includes("open twitter")){
    readOut("opening twitter sir, if you don't have an account sign up, if you have, sign in")
    window.open("https://twitter.com/")
  }
  if (transcript.includes("open linkedin")){
    readOut("opening linkedin sir,")
    window.open("https://linkedin.com/")
  }
  if (transcript.includes("open pinterest")){
    readOut("opening pinterest sir,")
    window.open("https://pinterest.com/")
  }
  if (transcript.includes("open messenger")){
    readOut("opening messenger sir,")
    window.open("https://messenger.com/")
  }
  if (transcript.includes("open spotify")){
    readOut("opening spotify sir,")
    window.open("https://spotify.com/")
  }
  if (transcript.includes("open tiktok")){
    readOut("opening tiktok sir,")
    window.open("https://tiktok.com/")
  }
  if (transcript.includes("open whatsapp")){
    readOut("opening whatsapp sir,")
    window.open("https://whatsapp.com/")
  }
  if (transcript.includes("open snapchat")){
    readOut("opening snapchat sir,")
    window.open("https://snapchat.com/")
  }
  if (transcript.includes("open apple")){
    readOut("opening apple sir,")
    window.open("https://apple.com/")
  }
  if (transcript.includes("open yahoo")){
    readOut("opening yahoo sir,")
    window.open("https://yahoo.com/")
  }
  if (transcript.includes("open amazon")){
    readOut("opening amazon sir,")
    window.open("https://amazon.com/")
  }
  if (transcript.includes("open tesla")){
    readOut("opening tesla site sir,")
    window.open("https://tesla.com/")
  }
  if (transcript.includes("open byd")){
    readOut("opening byd site sir,")
    window.open("https://byd.com/")
  }
  if (transcript.includes("open microsoft")){
    readOut("opening microsoft site sir,")
    window.open("https://microsoft.com/")
  }
  if (transcript.includes("open marvel")){
    readOut("opening marvel site sir,")
    window.open("https://marvel.com/")
  }
  if (transcript.includes("i wanna watch movie")){
    readOut("opening rezka sir")
    window.open("https://rezka.ag/page/9/")
  }
  if (transcript.includes("i want to watch movie")){
    readOut("opening rezka sir")
    window.open("https://rezka.ag/page/9/")
  }
  if (transcript.includes("from google search for")){
    readOut("here's the result")
    let input = transcript.split("");
    input.splice(0, 22);
    input.pop();
    input = input.join("").split(" ").join("+");
    console.log(input);
    window.open(`https://www.google.com/search?q=${input}`)
  }
  if (transcript.includes("from youtube search for")){
    readOut("here's the result")
    let input = transcript.split("");
    input.splice(0, 23);
    input.pop();
    input = input.join("").split(" ").join("+");
    console.log(input);
    window.open(`https://www.youtube.com/search?q=${input}`)
  }
  if (transcript.includes("play movie")){
    readOut("here's the result")
    let input = transcript.split("");
    input.splice(0, 11);
    input.pop();
    input = input.join("").split(" ").join("+");
    console.log(input);
    window.open(`https://rezka.ag/search/?do=search&subaction=search&q=${input}`)
  }
  if (transcript.includes("open movie site")){
    readOut("opening rezka sir")
    window.open("https://rezka.ag/page/9/")
  }
  if (transcript.includes("open telegram")){
    readOut("opening telegram sir")
    window.open("https://t.me/Mr_Egamberdiev")
  }
  if (transcript.includes("can i play car game")){
    readOut("of course sir, i'm searching for car game")
    window.open("https://bruno-simon.com/")
  }
  if (transcript.includes("open yandex")){
    readOut("opening yandex sir")
    window.open("https://taxi.yandex.uz/ru_uz/")
  }
  if (transcript.includes("let's play monkey type") || transcript.includes("let's play monkeytype")){
    readOut("ok sir, have a fun time")
    window.open("https://monkeytype.com/")
  }
  if (transcript.includes("weather") || transcript.includes("Weather")){
    readOut("ok sir, here is some information about todays' weather")
    window.open("https://www.google.com/search?q=weather+today&oq=weat&aqs=chrome.0.69i59l2j69i57j0i131i433i512j0i512l3j69i60.3944j1j9&sourceid=chrome&ie=UTF-8")
  }
  if (transcript.includes("what time is it") || transcript.includes("What time is it")){
    readOut("ok sir, here is the time")
    window.open("https://www.timeanddate.com/worldclock/uzbekistan/tashkent")
  }
  if (transcript.includes("timer") || transcript.includes("i need timer")){
    readOut("ok sir, here is the timer for you")
    window.open("https://www.google.com/search?q=timer&oq=timer&aqs=chrome..69i57j0i433i512j0i67i650l3j0i512l5.834j0j7&sourceid=chrome&ie=UTF-8")
  }
  if (transcript.includes("I need compass") || transcript.includes("i need compass")){
    readOut("ok sir, here is online compass")
    window.open("https://onlinecompass.app/")
  }
  if (transcript.includes("your founders site") || transcript.includes("founders site")){
    readOut("ok sir, here is my owners website")
    window.open("https://mrabdullokh.uz/")
  }
  if (transcript.includes("open vs code")){
    readOut("opening vs code downloader site sir")
    window.open("https://code.visualstudio.com/Download#")
  }
  if (transcript.includes("where am i")){
    readOut("here is your current location")
    window.open("https://zoom.earth/")
  }
  if (transcript.includes("my device")){
    readOut("here is your devices size")
    window.open("https://www.mydevice.io/")
  }

};

// STOP
recognition.onend = function () {
  console.log("VR Deactive");
}

// CONTINUOUS
// recognition.continuous = true;

startBtn.addEventListener("click", () =>{
  recognition.start()
})

stopBtn.addEventListener("click", () =>{
  recognition.stop()
})

// FRIDAY SPEECH
function readOut(message){
  const speech = new SpeechSynthesisUtterance()
  // different voices
  const allVoices = speechSynthesis.getVoices()
  speech.text = message;
  speech.voice = allVoices[1]
  speech.volume = 1
  window.speechSynthesis.speak(speech);
  console.log("Speaking out");
}

// example

speakBtn.addEventListener("click", () => {
  readOut("Hi my dear followers , lets code something together today")
})

window.onload = function () {
  readOut("          ")
}


// news setup
async function getNews(){
  var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=200c467801094a898db89235f4f802c0"
  var req = new Request(url)
  await fetch(req).then((response) => response.json())
  .then((data) => {
    console.log(data);
    let arrNews = data.articles
    arrNews.length = 10
    let a = []
    arrNews.forEach((e,index) => {
      a.push(index+1)
      a.push("........")
      a.push(e.title)
      a.push("........")
    });
    readOut(a)
  })
}