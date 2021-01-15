var zodiac={
    
        sign:"Aries",
        personality:"Adventurous, Courageous, Lively, Versatile, Passionate and Positive",
        temperament:"Can pull you iut of your comfort zone. Aries might be emotionally detached sometimes, but they still love you a lot more than you think.",
        img:"aries.jpg",
    },
    {
        sign:"Taurus",
        personality:"Hardworking, Not one to mess with, Strong, Loves to dream, Very Caring and Loves to travel.",
        temperament:"Understands your most complex feelings. A Taurus teaches us to appreciate the little things in life. Be warned when a Taurus says they are going to do something, THEY WILL.",
        img:"taurus.jpg",
    },
    {
        sign:"Gemini",
        personality:"Amusing, Enthusiastic, Approachable, Gifted, Open and Communicative",
        temperament:"Prefer to have your own say in most matters. You don't need anyone speaking for you. Gemini are rarely as innocent as they tend to pretend to be. They can be unpredictable and can be rather mischievous wil looking seemingly faultless. They are quite cunny and will almost always have a trick up their sleeves to deal out.",
        img:"gemini.jpg",
    },
    {
        sign:"Cancer",
        personalities:"Cancer seems to have two personalities. One is very outgoing, funny and quirky. The other is shy, moody, and unti social.",
        temperament:"Will motivate you to become a better person. Cancer will intrigue the hell out of you with their mysterious personality. Cancers usually aren't comfortable in discussing just how they feel, especially when they barely know you.",
        img:"cancer.jpg",
    },
    {
        sign:"Leo",
        personality:"Generous, A Great Friend, Natural Leaders, Courageous and daring.",
        temperament:""Will prove to you that you're all they need. Better treat a Leo right because they will be the best you ever had. When they love you, they will give you the stars and the moon.",
        img:"leo.jpg",
    },
    {
        sign:"Virgo",
        personality:"Perfectionist, Loyal to a fault, Great Team Leader, Easy to please and Creative",
        temperament:"Will always see the good in you no matter what. Virgos are very kind hearted but when angered they speak words in such a venomous way that your heart will stop breatheing.",
        img:"virgo.jpg",
    },
    {
        sign:"Libra",
        personality:"Gets angry very easily, Has a hard time asking for help, Very impatient, Believes in long term relationships and Romantic.",
        temperament:"Will turn your weaknesses into strength. Libra can be very emotionally attached, but that doesn't mean that they don't love you. They just have different way of showing it.",
        img:"libra.jpg",
    },
    {
        sign:"Scorpio",
        personality:"Musical, Stubborn, Loves nature and animals, Very Loving, Creative, Honest and speaks their mind.",
        temperament:"Will always provide strong passion and protection. Be honest and considerate with a Scorpio. They are protective of their feelings, and a Scorpio's feeling are often strong. They need a partner that's dynamic.",
        img:"scorpio.jpg",
    },
    {
        sign:"Sagittarius",
        personality:"Optimistic and open-minded when it comes to learning new things.",
        temperament:"Will break the rules but never your heart. Sagittarius take things as they come. They don't let the past get to them unless it seriously affected them or upset them in some huge way. They want to keep moving forward and prefer to have their sight set on the future and what is happening now. They prefer to deal with anything when it comes along so they don't worry.",
        img:"sagittarius.jpg",
    },
    {
        sign:"Capricorn",
        personality:"Cautious, Ambitious, Practical, Responsibke, Introvert, Caring, Open-hearted, Reliable and nosey.",
        temperament:"Won't be happy until you are. Ambitious and determined. The great strength of the Capricor born are their willingness to work hard and their determination to succeed. Their ambition is boundless, yet they are cautious, responsible and always play fair. That's why their successes are all the more sweet.",
        img:"capricorn.jpg",
    },
    {
        sign:"Aquarius",
        personality:"Humanitarian, Energetic, Problem Solver, Devoted, Trustworthy and Unpredictable",
        temperament:"Will always tell you the truth. Aquarius are social people but always feel like they never quite fit in. You'll always notice an Aquarius because they stand out of the crowd. They're often imitated but never duplicated.",
        img:"aquarius.jpg",
    },
    {
        sign:"Pisces",
        personality:" ",
        temperament:"Will listen to everything you say. Pisces can be a lot to handle in a relationship emotionally but their love is worth it. Once a Pisces lose faith in you it's really hard for them to look at you the same again.",
        img:"pisces.jpg",
    },


document.body.style.backgroundImage= "url('FB_IMG_1608628238812.jpg')";
document.body.style.backgroundRepeat="no-repeat";
document.body.style.backgroundPosition="top right";


function getInfo(){
    
    var bigfoot=document.getElementById("manzano").value

for(i=0; i<zodiac.length;i++){
        if (bigfoot==zodiac[i].sign){
            document.getElementById("manzano").innerHTML=zodiac[i].sign
            document.getElementById("personality").innerHTML=zodiac[i].personality
            document.getElementById("temperament").innerHTML=zodiac[i].temperament
       
            document.getElementById("img").setAttribute("src", zodiac[i].img)
        
            document.getElementById("personality").style.font="italic bold 20px arial,serif";
            document.body.style.backgroundImage= "url('FB_IMG_1608628238812.jpg')";
            document.getElementById("mheann").style.display="none";

            var newlink=document.createElement("a");

            newlink.setAttribute("href, "/Internal storage/CSS/zodiac/index.html");

            var content=document.createTextNode("HOME")
            
            newlink.appendChild(content)

            document.getElementById("addHere").appendChild(newlink)
            return
        }
    }
}
