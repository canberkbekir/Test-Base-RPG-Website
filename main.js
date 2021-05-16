var maxhealth = 50;
var currenthealth = 50;
var currentgold =20;
var amuletCheck = false;

var day = 1 ;
var dungeonCheck = false;


var tavernTalks = [
"Goblins get the dwarf mine cave. We need to clean the cave.",
"They say in the dancing tunnel you can hear angel voices.",
"In the temple you can find treasures",
"In tavern you can stay baddes room for free but you will not be served food.",
"How is your day goin?",
"Some dwarf always trying to flirt with me."
,"You can buy amulet from Church you know that?",
"Do you want more?",
"HEY!You guys dont fight!",
"Thats beer made by dwarfs.It is very quality shit."];

const currenthealthDOC = document.getElementById('currentHealth');
const gold = document.getElementById('gold');

//CURCH


const amulet_btn = document.getElementById('amulet-button');
const curch_modal = document.getElementById('curch-modal');
const curch_closeBtn = document.getElementById('curch-close-btn');
const curch_text = document.getElementById('church');



//BLACKSMITH
const  damage_upgrade = document.getElementById('damage-upgrade');
const  health_upgrade = document.getElementById('health-upgrade');
const  recovery_upgrade = document.getElementById('recovery-upgrade');
const blacksmith_text = document.getElementById('blacksmith');
const blacksmith_closeBtn = document.getElementById('blacksmith-close-btn');
const blacksmith_modal = document.getElementById('blacksmith-modal');

//TAVERN
const peasant_btn = document.getElementById('peasant-room-button');
const noble_btn = document.getElementById('noble-room-button');
const royal_btn = document.getElementById('royal-room-button');
const beer_btn = document.getElementById('beer-button');
const tavern_closeBtn = document.getElementById('tavern-close-btn');
const tavern_modal = document.getElementById('tavern-modal');
const tavern_text = document.getElementById('tavern');
const tavern_talk = document.getElementById('tavern-text')


//TEMPLE OF ANCIENT GIANT

const giant_text = document.getElementById('thirdDungeon');
const giant_modal = document.getElementById('giant-dungeon-modal');
const giant_close_btn = document.getElementById('giant-close-btn');
const giant_dungeon_btn = document.getElementById('giant-dungeon-btn');
const giant_output = document.getElementById('giant-text');

//DANCING-TUNNEL-DUNGEON 

const dancing_text = document.getElementById('secondDungeon');
const dancing_modal = document.getElementById('dancing-dungeon-modal');
const dancing_close_btn = document.getElementById('dancing-close-btn');
const dancing_dungeon_btn = document.getElementById('dancing-dungeon-btn');
const dancing_output = document.getElementById('dancing-text');

//GOBLIN-DUNGEON

const goblin_text = document.getElementById('firstDungeon');
const goblin_modal = document.getElementById('goblin-dungeon-modal');
const goblin_close_btn = document.getElementById('goblin-close-btn');
const goblin_dungeon_btn = document.getElementById('goblin-dungeon-btn');
const goblin_output = document.getElementById('goblin-text');


//STATS

const  damage_statDOC = document.getElementById('damage_stat');
const  health_statDOC = document.getElementById('health_stat');
const  recovery_statDOC = document.getElementById('recovery_stat');
const day_statDOC = document.getElementById('day');

var damage_stat = 5;
var health_stat = 5;
var recovery_stat = 5;





currenthealthDOC.innerHTML = maxhealth.toString();
setInterval(()=> {
    gold.innerHTML = currentgold;
    currenthealthDOC.innerHTML = currenthealth;
    damage_statDOC.innerHTML = damage_stat;
    health_statDOC.innerHTML = health_stat;
    recovery_statDOC.innerHTML = recovery_stat;
    day_statDOC.innerHTML = day;

    if(currenthealth <=0)
    {
        Die();
    }


    
},100);
//CURCH INPUTS
curch_text.addEventListener('click', ()=>{
    curch_modal.style.display = 'flex';
})

curch_closeBtn.addEventListener('click',()=> {
    curch_modal.style.display = 'none';
})


amulet_btn.addEventListener('click',()=> {
    if(currentgold >= 150 && amuletCheck == false)
    {
        currentgold -= 150;
        amuletCheck = true;
    }
});

//TEMPLE OF ANCIENT GIANT INPUTS
giant_text.addEventListener('click',()=>{
    giant_modal.style.display = 'flex';
})

giant_close_btn.addEventListener('click',()=>{
    giant_modal.style.display = 'none';
})

giant_dungeon_btn.addEventListener('click',()=>{
    if(dungeonCheck == false)
    {
        raidDungeon(amuletCheck,35,damage_stat,42,35,giant_output);
        dungeonCheck = true;
    }
    else
    {
        alert("You can do it once a day. ")
    }        
 })

//DANCING TUNNEL DUNGEON INPUTS
dancing_text.addEventListener('click',()=>{
    dancing_modal.style.display = 'flex';
})

dancing_close_btn.addEventListener('click',()=>{
    dancing_modal.style.display = 'none';
})

dancing_dungeon_btn.addEventListener('click',()=>{
    if(dungeonCheck == false)
    {
        raidDungeon(amuletCheck,18,damage_stat,12,18,dancing_output);
        dungeonCheck = true;
    }
    else
    {
        alert("You can do it once a day. ")
    }    
 })

//GOBLIN CAVE
goblin_dungeon_btn.addEventListener('click',()=>{
    if(dungeonCheck == false)
    {
        raidDungeon(amuletCheck,8,damage_stat,5,8,goblin_output);
        dungeonCheck = true;
    }
    else
    {
        alert("You can do it once a day. ")
    }    
})

goblin_close_btn.addEventListener('click',()=>{
    goblin_modal.style.display = 'none';
})

goblin_text.addEventListener('click',()=>{
    goblin_modal.style.display = 'flex';

})



//TAVERN INPUTS

peasant_btn.addEventListener('click',()=> {
    if(currentgold >= 3)
    {
        currentgold -= 3;
        day += 1;
        dungeonCheck = false;
        if(currenthealth + 10 > maxhealth)
        {
            currenthealth = maxhealth;
        }
        else
        {
            currenthealth +=10 + recovery_stat;
        }

    }
    else
    {
        alert('You didnt recovered.')
        day += 1;
        dungeonCheck = false;
    }
});
noble_btn.addEventListener('click',()=> {
    if(currentgold >= 9)
    {
        currentgold -= 9;
        day += 1;
        dungeonCheck = false;
        if(currenthealth + 35 > maxhealth)
        {
            currenthealth = maxhealth;
        }
        else
        {
            currenthealth +=40 + recovery_stat;
        }

    }
});
royal_btn.addEventListener('click',()=> {
    if(currentgold >= 15)
    {
        currentgold -= 15;
        day += 1;
        dungeonCheck = false;
        if(currenthealth + 60 > maxhealth)
        {
            currenthealth = maxhealth;
        }
        else
        {
            currenthealth +=60 + recovery_stat;
        }

    }
});
beer_btn.addEventListener('click',()=> {
    if(currentgold >= 3)
    {
        currentgold -= 3;
        tavernTalk();

    }
});

tavern_closeBtn.addEventListener('click',()=>{
    tavern_modal.style.display = 'none';
})
tavern_text.addEventListener('click',()=>{
    tavern_modal.style.display = 'flex';
})



// FORGE INPUTS
blacksmith_text.addEventListener('click',()=>{
    blacksmith_modal.style.display = 'flex';
})

blacksmith_closeBtn.addEventListener('click',()=>{
    blacksmith_modal.style.display = 'none';
})

damage_upgrade.addEventListener('click', ()=>
{
    if(currentgold >= 5)
    {
        currentgold -= 5;
        damage_stat += 1;

    }
})
health_upgrade.addEventListener('click', ()=>
{
    if(currentgold >= 5)
    {
        currentgold -= 5;
        health_stat += 1;
        maxhealth +=10;
        

    }
})
recovery_upgrade.addEventListener('click', ()=>
{
    if(currentgold >= 5)
    {
        currentgold -= 5;
        recovery_stat += 5;

    }
})

function raidDungeon(amulet,powerLvl,characterPowerLvl,gold,absoluteDamage,dungeonText)
{
    let exHealth = currenthealth;
    let exGold = currentgold;
    let hit = Math.floor(Math.random() * 11);
    
    if(amulet == true)
    {
        
        if(powerLvl > characterPowerLvl)
        {
           currenthealth -= hit * 1.5 + absoluteDamage;
           currentgold += Math.floor(Math.random() * 11) + gold;
           
        }
        else
        { 
            currenthealth -=hit + absoluteDamage;
            currentgold += Math.floor(Math.random() * 11) + gold;

        }
    }
    else
    {
        if(powerLvl > characterPowerLvl)
        {
           if(Math.floor(Math.random() * 11)>5)
           {
            currenthealth -= hit * 2 + absoluteDamage;
            currentgold += Math.floor(Math.random() * 11) + gold;
           }
           else
           {
            currenthealth -= hit * 1.5 + absoluteDamage;
            currentgold += Math.floor(Math.random() * 11) + gold;
           } 
           
        }
        else
        {
            if(Math.floor(Math.random() * 11)>5)
           {
            currenthealth -= hit * 1.5 + absoluteDamage;
            currentgold += Math.floor(Math.random() * 11) + gold;
           }
           else
           {
            currenthealth -= hit + absoluteDamage;
            currentgold += Math.floor(Math.random() * 11) + gold;
           } 

        }
    }

    dungeonText.innerHTML = "You lost " + (exHealth - currenthealth) + " HP.And You get " + (currentgold - exGold) + " gold.";
    console.log("You lost " + (exHealth - currenthealth) + " HP" );
    console.log("You get " + (currentgold - exGold) + " gold.")
}
function Die() 
{
    currenthealth = 50
    maxhealth = 50;
    currentgold = 50
    amuletCheck = false
    damage_stat = 5;
    health_stat = 5;
    recovery_stat = 5;
    day = 1;
    alert("YOU DIED TRY AGAIN");
}

function tavernTalk()
{
    switch ( Math.floor(Math.random() * 11)) {
        case 1:
            tavern_talk.innerHTML = tavernTalks[0].toString();
            break;
        case 2:
            tavern_talk.innerHTML = tavernTalks[1].toString();
            break;
        case 3:
            tavern_talk.innerHTML = tavernTalks[2].toString();
            break;
        case 4:
            tavern_talk.innerHTML = tavernTalks[3].toString();
            break;
        case 5:
            tavern_talk.innerHTML = tavernTalks[4].toString();
            break;
        case 6:
            tavern_talk.innerHTML = tavernTalks[5].toString();
            break;
        case 7:
            tavern_talk.innerHTML = tavernTalks[6].toString();
            break;
        case 8:
            tavern_talk.innerHTML = tavernTalks[7].toString();
            break;
        case 9:
            tavern_talk.innerHTML = tavernTalks[8].toString();
            break;
        case 10:
            tavern_talk.innerHTML = tavernTalks[9].toString();
            break;
         
        default:
            console.log("olmadı");
            break;
    }
}

