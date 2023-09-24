events.listen('recipes', function (e) {
  
//Oak Type
function pamOakBotany(name){
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "pamhc2trees:"+name+"_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "pamhc2trees:"+name+"_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "minecraft:oak_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "minecraft:oak_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "minecraft:oak_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.75,
            "output": {
                "item": "pamhc2trees:"+name+"item"
            },
            "minRolls": 1,
            "maxRolls": 4
        }
    ]
})
}

var name = ["avocado", "candlenut", "cherry", "chestnut", "gooseberry", "lemon", "nutmeg", "orange", "peach", "pear", "plum", "walnut", "hazelnut", "pawpaw", "soursop"]
name.forEach(C => { pamOakBotany(C)})
  
//Jungle Type
function pamJungleBotany(name){
    e.custom({
      "type": "botanypots:crop",
      "seed": {"item": "pamhc2trees:"+name+"_sapling"},
      "categories": ["dirt"],
      "growthTicks": 2400,
      "display": {
          "block": "pamhc2trees:"+name+"_sapling"
      },
      "results": [
          {
              "chance": 0.5,
              "output": {
                  "item": "minecraft:jungle_log"
              },
              "minRolls": 1,
              "maxRolls": 1
          },
          {
              "chance": 0.1,
              "output": {
                  "item": "minecraft:jungle_leaves"
              },
              "minRolls": 1,
              "maxRolls": 2
          },
          {
              "chance": 0.05,
              "output": {
                  "item": "minecraft:jungle_sapling"
              },
              "minRolls": 1,
              "maxRolls": 2
          },
          {
              "chance": 0.75,
              "output": {
                  "item": "pamhc2trees:"+name+"item"
              },
              "minRolls": 1,
              "maxRolls": 4
          }
      ]
  })
  }
  
  var name = ["olive", "papaya", "pecan", "peppercorn", "persimmon", "pistachio", "pomegranate", "starfruit", "vanillabean", "breadfruit", "guava", "jackfruit", "lychee", "passionfruit", "almond", "apricot", "banana", "cashew", "cinnamon", "coconut", "date", "dragonfruit", "durian", "fig", "grapefruit", "lime", "mango", "rambutan", "tamarind"]
  name.forEach(C => { pamJungleBotany(C)})

//Apple
e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "pamhc2trees:apple_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "pamhc2trees:apple_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "minecraft:oak_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "minecraft:oak_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "minecraft:oak_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.75,
            "output": {
                "item": "minecraft:apple"
            },
            "minRolls": 1,
            "maxRolls": 4
        }
    ]
})
//String
e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "pamhc2trees:spiderweb_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "pamhc2trees:spiderweb_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "minecraft:oak_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "minecraft:oak_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "minecraft:oak_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.75,
            "output": {
                "item": "minecraft:string"
            },
            "minRolls": 1,
            "maxRolls": 4
        }
    ]
})
//Paper
e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "pamhc2trees:paperbark_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "pamhc2trees:paperbark_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "minecraft:jungle_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "minecraft:jungle_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "minecraft:jungle_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.75,
            "output": {
                "item": "minecraft:paper"
            },
            "minRolls": 1,
            "maxRolls": 4
        }
    ]
})
//Maple
e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "pamhc2trees:maple_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "pamhc2trees:maple_sapling"
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
                "item": "minecraft:spruce_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "minecraft:spruce_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.75,
            "output": {
                "item": "pamhc2trees:maplesyrupitem"
            },
            "minRolls": 1,
            "maxRolls": 4
        }
    ]
})
//Pinenut
e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "pamhc2trees:pinenut_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "pamhc2trees:pinenut_sapling"
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
                "item": "minecraft:spruce_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "minecraft:spruce_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.75,
            "output": {
                "item": "pamhc2trees:pinenutitem"
            },
            "minRolls": 1,
            "maxRolls": 4
        }
    ]
})
})