events.listen('recipes', function (e) {

//Spruce Color
function bygSpruceBotany(color){
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:"+color+"_spruce_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:"+color+"_spruce_sapling"
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
                "item": "byg:"+color+"_spruce_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:"+color+"_spruce_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})}
var colorspruce = ["blue", "orange", "yellow", "red"]
colorspruce.forEach(C => { bygSpruceBotany(C)})

//Oak Color
function bygOakBotany(color){
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:"+color+"_oak_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:"+color+"_oak_sapling"
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
                "item": "minecraft:stick"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:"+color+"_oak_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:"+color+"_oak_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})}
var coloroak = ["brown", "orange", "red"]
coloroak.forEach(C => { bygOakBotany(C)})

//Birch Color
function bygBirchBotany(color){
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:"+color+"_birch_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:"+color+"_birch_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "minecraft:birch_log"
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
                "item": "byg:"+color+"_birch_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:"+color+"_birch_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})}
var colorbirch = ["brown", "yellow", "orange", "red"]
colorbirch.forEach(C => { bygBirchBotany(C)})

//Maple Color
function bygMapleBotany(color){
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:"+color+"_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:"+color+"_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "byg:maple_log"
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
                "item": "byg:"+color+"_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:"+color+"_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})}
var colormaple = ["maple", "red_maple", "silver_maple"]
colormaple.forEach(C => { bygMapleBotany(C)})

//Cherry Color
function bygCherryBotany(color){
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:"+color+"_cherry_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:"+color+"_cherry_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "byg:cherry_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:"+color+"_cherry_foliage"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:"+color+"_cherry_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:"+color+"_cherry_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})}
var colorcherry = ["pink", "white"]
colorcherry.forEach(C => { bygCherryBotany(C)})
  
//Enchanted Color
function bygEnchanBotany(color){
    e.custom({
      "type": "botanypots:crop",
      "seed": {"item": "byg:"+color+"_enchanted_sapling"},
      "categories": ["dirt"],
      "growthTicks": 2400,
      "display": {
          "block": "byg:"+color+"_enchanted_sapling"
      },
      "results": [
          {
              "chance": 0.5,
              "output": {
                  "item": "byg:"+color+"_enchanted_log"
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
                  "item": "byg:"+color+"_enchanted_sapling"
              },
              "minRolls": 1,
              "maxRolls": 2
          },
          {
              "chance": 0.1,
              "output": {
                  "item": "byg:"+color+"_enchanted_leaves"
              },
              "minRolls": 1,
              "maxRolls": 2
          }
      ]
  })}
  var colorenchan = ["blue", "green"]
  colorenchan.forEach(C => { bygEnchanBotany(C)})

//Jacaranda Color
function bygJacarBotany(color){
    e.custom({
      "type": "botanypots:crop",
      "seed": {"item": "byg:"+color+"_sapling"},
      "categories": ["dirt"],
      "growthTicks": 2400,
      "display": {
          "block": "byg:"+color+"_sapling"
      },
      "results": [
          {
              "chance": 0.5,
              "output": {
                  "item": "byg:jacaranda_log"
              },
              "minRolls": 1,
              "maxRolls": 1
          },
          {
              "chance": 0.1,
              "output": {
                  "item": "byg:flowering_"+color+"_bush"
              },
              "minRolls": 1,
              "maxRolls": 2
          },
          {
              "chance": 0.05,
              "output": {
                  "item": "byg:"+color+"_sapling"
              },
              "minRolls": 1,
              "maxRolls": 2
          },
          {
              "chance": 0.1,
              "output": {
                  "item": "byg:"+color+"_leaves"
              },
              "minRolls": 1,
              "maxRolls": 2
          }
      ]
  })}
  var colorjacar = ["jacaranda", "indigo_jacaranda"]
  colorjacar.forEach(C => { bygJacarBotany(C)})

//Zelkova Color
function bygZelBotany(color){
    e.custom({
      "type": "botanypots:crop",
      "seed": {"item": "byg:"+color+"_sapling"},
      "categories": ["dirt"],
      "growthTicks": 2400,
      "display": {
          "block": "byg:"+color+"_sapling"
      },
      "results": [
          {
              "chance": 0.5,
              "output": {
                  "item": "byg:zelkova_log"
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
                  "item": "byg:"+color+"_sapling"
              },
              "minRolls": 1,
              "maxRolls": 2
          },
          {
              "chance": 0.1,
              "output": {
                  "item": "byg:"+color+"_leaves"
              },
              "minRolls": 1,
              "maxRolls": 2
          }
      ]
  })}
  var colorzel = ["zelkova", "brown_zelkova"]
  colorzel.forEach(C => { bygZelBotany(C)})

//Other
function bygNameBotany(name){
    e.custom({
      "type": "botanypots:crop",
      "seed": {"item": "byg:"+name+"_sapling"},
      "categories": ["dirt"],
      "growthTicks": 2400,
      "display": {
          "block": "byg:"+name+"_sapling"
      },
      "results": [
          {
              "chance": 0.5,
              "output": {
                  "item": "byg:"+name+"_log"
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
                  "item": "byg:"+name+"_sapling"
              },
              "minRolls": 1,
              "maxRolls": 2
          },
          {
              "chance": 0.1,
              "output": {
                  "item": "byg:"+name+"_leaves"
              },
              "minRolls": 1,
              "maxRolls": 2
          }
      ]
  })}
  var namebyg = ["palm", "pine", "rainbow_eucalyptus", "mangrove", "mahogany", "witch_hazel", "willow", "redwood", "fir", "aspen", "ebony", "cypress", "cika", "nightshade"]
  namebyg.forEach(N => { bygNameBotany(N)})

  //Ether
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:ether_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:ether_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "byg:ether_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:ether_bulbs"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:ether_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:ether_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

  //Baobab
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:baobab_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:baobab_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "byg:baobab_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:baobab_fruit"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:baobab_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:baobab_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

  //Araucaria
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:araucaria_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:araucaria_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "byg:pine_log"
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
                "item": "byg:araucaria_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:araucaria_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

  //Withering
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:withering_oak_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:withering_oak_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "byg:withering_oak_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:arisian_bloom_branch"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:withering_oak_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:withering_oak_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

  //Palo Verde
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:palo_verde_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:palo_verde_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "byg:palo_verde_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:flowering_palo_verde_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:palo_verde_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:palo_verde_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

  //Skyris
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:skyris_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:skyris_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "byg:skyris_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:green_apple"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:skyris_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:skyris_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

  //Lament
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:lament_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:lament_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "byg:lament_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "minecraft:shroomlight"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:lament_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:lament_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

  //Holly
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:holly_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:holly_sapling"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "byg:holly_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:holly_berries"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:holly_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:holly_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

  //Orchard
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:orchard_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:orchard_sapling"
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
                "item": "minecraft:apple"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:orchard_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:orchard_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})

  //Joshua
  e.custom({
    "type": "botanypots:crop",
    "seed": {"item": "byg:joshua_sapling"},
    "categories": ["dirt"],
    "growthTicks": 2400,
    "display": {
        "block": "byg:joshua_sapling"
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
                "item": "byg:joshua_fruit"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:joshua_sapling"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:joshua_leaves"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
//Bulbis
//Categorie
e.custom({"type":"botanypots:soil","input":{"item":"byg:bulbis_phycelium"},"display":{"block":"byg:bulbis_phycelium"},"categories":["bulbis"],"growthModifier":0})
//BotanyPot
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "byg:bulbis_oddity"
    },
    "categories": [
        "bulbis"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "byg:bulbis_oddity"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "byg:bulbis_stem"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:purple_shroomlight"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:bulbis_shell"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:bulbis_oddity"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
//Sythian Fungus
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "byg:sythian_fungus"
    },
    "categories": [
        "sythian_nylium"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "byg:sythian_fungus"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "byg:sythian_stem"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:sythian_wart_block"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "minecraft:shroomlight"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:sythian_fungus"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
//Jellyshroom
//BotanyPot
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "betterendforge:small_jellyshroom"
    },
    "categories": [
        "umbrella"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "betterendforge:small_jellyshroom"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "betterendforge:jellyshroom_log"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "betterendforge:jellyshroom_cap_purple"
            },
            "minRolls": 1,
            "maxRolls": 2
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
                "item": "betterendforge:small_jellyshroom"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
//Imparius
//Categorie
e.custom({"type":"botanypots:soil","input":{"item":"byg:imparius_phylium"},"display":{"block":"byg:imparius_phylium"},"categories":["imparius"],"growthModifier":0})
//BotanyPot
//Fungal
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "byg:fungal_imparius"
    },
    "categories": [
        "imparius"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "byg:fungal_imparius"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "byg:fungal_imparius_stem"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:fungal_imparius_filament_block"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:fungal_imparius_block"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:fungal_imparius"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
//Branch
e.custom({
    "type": "botanypots:crop",
    "seed": {
        "item": "byg:imparius_mushroom_branch"
    },
    "categories": [
        "imparius"
    ],
    "growthTicks": 2400,
    "display": {
        "block": "byg:imparius_mushroom_branch"
    },
    "results": [
        {
            "chance": 0.5,
            "output": {
                "item": "byg:imparius_stem"
            },
            "minRolls": 1,
            "maxRolls": 1
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:imparius_mushroom_block"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.1,
            "output": {
                "item": "byg:imparius_vine"
            },
            "minRolls": 1,
            "maxRolls": 2
        },
        {
            "chance": 0.05,
            "output": {
                "item": "byg:imparius_mushroom_branch"
            },
            "minRolls": 1,
            "maxRolls": 2
        }
    ]
})
//Oddity Cactus
//Categorie
e.custom({"type":"botanypots:soil","input":{"item":"byg:end_sand"},"display":{"block":"byg:end_sand"},"categories":["oddity_sand"],"growthModifier":0})
//BotanyPot
e.custom({"type":"botanypots:crop","seed":{"item":"byg:oddity_cactus"},"categories":["oddity_sand"],"growthTicks":1600,"display":{"block":"byg:oddity_cactus"},"results":[{"chance":0.75,"output":{"item":"byg:oddity_cactus"},"minRolls":1,"maxRolls":1}]})
})