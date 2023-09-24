events.listen('recipes', function (e) {

var color = ["blue", "green", "purple", "red"]
color.forEach(C => { arsBotany(C)})

function arsBotany(color){
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "ars_nouveau:"+color+"_archwood_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "ars_nouveau:"+color+"_archwood_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "ars_nouveau:"+color+"_archwood_log"
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
                "item": "ars_nouveau:"+color+"_archwood_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "ars_nouveau:"+color+"_archwood_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
}
//Mana Bloom
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "ars_nouveau:mana_bloom_crop"
    },
    "categories": [
        "dirt"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "ars_nouveau:mana_bloom_crop"
    },
    "results": [
        {
            "chance": 1,
            "output": {
                "item": "ars_nouveau:mana_bloom"
            },
            "minRolls": 1,
            "maxRolls": 3
        },
        {
            "chance": 0.05,
            "output": {
                "item": "ars_nouveau:mana_bloom_crop"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

})