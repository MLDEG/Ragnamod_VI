events.listen('recipes', function (e) {
  
function undergardentBotany(name){
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "undergarden:"+name+"_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "undergarden:"+name+"_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "undergarden:"+name+"_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "minecraft:stick"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "undergarden:"+name+"_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "undergarden:"+name+"_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
}

var name = ["smogstem", "wigglewood", "grongle"]
name.forEach(C => { undergardentBotany(C)})
})