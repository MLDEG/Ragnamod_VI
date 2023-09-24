events.listen('recipes', function (e) {
  
function quarkBotany(color){
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "quark:"+color+"_blossom_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "quark:"+color+"_blossom_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "minecraft:spruce_log"
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
                "item": "quark:"+color+"_blossom_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "quark:"+color+"_blossom_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
}

var color = ["red", "yellow", "pink", "orange", "lavender", "blue"]
color.forEach(C => { quarkBotany(C)})
})