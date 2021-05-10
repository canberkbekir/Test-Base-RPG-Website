var maxhealth = 50;
var currenthealth = 50;
var currentgold =20;
var amuletCheck = false;



const currenthealthDOC = document.getElementById('currentHealth');
const gold = document.getElementById('gold');

//CURCH

const buff_btn = document.getElementById('buff-button');
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


//TEMPLE OF ANCIENT GIANT

const giant_text = document.getElementById('thirdDungeon');
const giant_modal = document.getElementById('giant-dungeon-modal');
const giant_close_btn = document.getElementById('giant-close-btn');
const giant_dungeon_btn = document.getElementById('giant-dungeon-btn');

//DANCING-TUNNEL-DUNGEON 

const dancing_text = document.getElementById('secondDungeon');
const dancing_modal = document.getElementById('dancing-dungeon-modal');
const dancing_close_btn = document.getElementById('dancing-close-btn');
const dancing_dungeon_btn = document.getElementById('dancing-dungeon-btn');

//GOBLIN-DUNGEON

const goblin_text = document.getElementById('firstDungeon');
const goblin_modal = document.getElementById('goblin-dungeon-modal');
const goblin_close_btn = document.getElementById('goblin-close-btn');
const goblin_dungeon_btn = document.getElementById('goblin-dungeon-btn');


//STATS

const  damage_statDOC = document.getElementById('damage_stat');
const  health_statDOC = document.getElementById('health_stat');
const  recovery_statDOC = document.getElementById('recovery_stat');

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


    
},100);


//CURCH INPUTS
curch_text.addEventListener('click', ()=>{
    curch_modal.style.display = 'flex';
})

curch_closeBtn.addEventListener('click',()=> {
    curch_modal.style.display = 'none';
})

buff_btn.addEventListener('click',()=> {
    if(currentgold >= 15)
    {
        currentgold -= 15;
        //Random BUFF SCRIPT

    }
});

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
    //RAID SCRIPT NEEDED
 })

//DANCING TUNNEL DUNGEON INPUTS
dancing_text.addEventListener('click',()=>{
    dancing_modal.style.display = 'flex';
})

dancing_close_btn.addEventListener('click',()=>{
    dancing_modal.style.display = 'none';
})

dancing_dungeon_btn.addEventListener('click',()=>{
    //RAID SCRIPT NEEDED
 })

//GOBLIN CAVE
goblin_dungeon_btn.addEventListener('click',()=>{
   //RAID SCRIPT NEEDED
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
        if(currenthealth + 10 > maxhealth)
        {
            currenthealth = maxhealth;
        }
        else
        {
            currenthealth +=10;
        }

    }
});
noble_btn.addEventListener('click',()=> {
    if(currentgold >= 9)
    {
        currentgold -= 9;
        if(currenthealth + 35 > maxhealth)
        {
            currenthealth = maxhealth;
        }
        else
        {
            currenthealth +=40;
        }

    }
});
royal_btn.addEventListener('click',()=> {
    if(currentgold >= 15)
    {
        currentgold -= 15;
        if(currenthealth + 60 > maxhealth)
        {
            currenthealth = maxhealth;
        }
        else
        {
            currenthealth +=60;
        }

    }
});
beer_btn.addEventListener('click',()=> {
    if(currentgold >= 3)
    {
        currentgold -= 3;
        console.log('gossip');

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