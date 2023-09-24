events.listen('recipes', function (e) {
//Dark Celestial
e.custom(
    {
        "type": "masterfulmachinery:machine_structure",
        "id": "dark_astral_auto",
        "controllerId": "autoastral",
        "name": "Dark Celestal",
        "layout": [
          [")))     )))",")**)))))**)",")*********)"," )*+***+*) "," )*******) "," )*******) "," )*******) "," )*+***+*) ",")*********)",")**),C-)**)",")))     )))"],
          ["           "," .       . ","           ","   /   /   ","           ","     0     ","           ","   /   /   ","           "," .       . ","           "],
          ["           "," 1       1 ","           ","   /   /   ","           ","           ","           ","   /   /   ","           "," 1       1 ","           "],
          ["           "," 1       1 ","           ","   2   2   ","           ","           ","           ","   2   2   ","           "," 1       1 ","           "],
          ["           "," 3)     )3 "," )       ) ","           ","           ","           ","           ","           "," )       ) "," 3)     )3 ","           "],
          ["           ","           ","  ))) )))  ","  )     )  ","  )     )  ","           ","  )     )  ","  )     )  ","  ))) )))  ","           ","           "]
        ],
        "legend": {
          "0": {"block": "astralsorcery:altar_radiance"},
          "1": {"block": "astralsorcery:black_marble_pillar"},
          "2": {"block": "masterfulmachinery:autoastral_dark_celestial_starlight_port_astral_starlight_input"},
          "3": {"block": "astralsorcery:black_marble_chiseled"},
          ")": {"block": "astralsorcery:black_marble_bricks"},
          "*": {"block": "astralsorcery:black_marble_raw"},
          "+": {"block": "astralsorcery:infused_wood_enriched"},
          ",": {"block": "masterfulmachinery:autoastral_dark_celestial_item_port_items_input"},
          "-": {"block": "masterfulmachinery:autoastral_dark_celestial_item_port_items_output"},
          ".": {"block": "astralsorcery:black_marble_runed"},
          "/": {"block": "astralsorcery:infused_wood_column"}
        }
      }
)
  //Starlight Input
  e.shaped(item.of('masterfulmachinery:autoastral_dark_celestial_starlight_port_astral_starlight_input', 1), ['A  ','B  ','C  '], {
    A: 'minecraft:hopper',
    B: 'astralsorcery:infused_wood_engraved',
    C: 'astralsorcery:infuser'
  })
  //Item Input
  e.shaped(item.of('masterfulmachinery:autoastral_dark_celestial_item_port_items_input', 1), ['C  ','B  ','A  '], {
    A: '#forge:chests/wooden',
    B: 'astralsorcery:black_marble_engraved',
    C: 'minecraft:hopper'
  })
  //Item Output
  e.shaped(item.of('masterfulmachinery:autoastral_dark_celestial_item_port_items_output', 1), ['A  ','B  ','C  '], {
    A: '#forge:chests/wooden',
    B: 'astralsorcery:black_marble_engraved',
    C: 'minecraft:hopper'
  })
  //Controller
  e.custom(
    {
      "type": "astralsorcery:altar",
      "altar_type": 3,
      "duration": 1200,
      "starlight": 6942,
      "pattern": ["ABCBA","ABDBA","EFGFE","AHIHA","AJIJA"],
      "key": {
        "A": {"item": "astralsorcery:black_marble_pillar"},
        "B": {"item": "astralsorcery:resonating_gem"},
        "C": {"item": "astralsorcery:starmetal_ingot"},
        "D": {"item": "astralsorcery:illuminator"},
        "E": {"item": "astralsorcery:black_marble_runed"},
        "F": {"item": "astralsorcery:starmetal_ingot"},
        "G": {"item": "xnet:controller"},
        "H": {"item": "astralsorcery:liquid_starlight_bucket"},
        "I": {"item": "astralsorcery:starmetal"},
        "J": {"item": "astralsorcery:infused_glass"}
      },
      "output": [
        {"item": "masterfulmachinery:autoastral_controller","count": 1}
      ],
      "focus_constellation": "astralsorcery:horologium",
      "relay_inputs": [
        { "item": "astralsorcery:nocturnal_powder" },
        { "item": "astralsorcery:nocturnal_powder" },
        { "item": "astralsorcery:nocturnal_powder" },
        { "item": "astralsorcery:nocturnal_powder" },
        { "item": "astralsorcery:nocturnal_powder" },
        { "item": "astralsorcery:nocturnal_powder" },
        { "item": "astralsorcery:nocturnal_powder" },
        { "item": "astralsorcery:nocturnal_powder" }
      ],
      "effects": [
        "astralsorcery:built_in_effect_constellation_finish",
        "astralsorcery:built_in_effect_trait_relay_highlight",
        "astralsorcery:built_in_effect_discovery_central_beam",
        "astralsorcery:built_in_effect_trait_focus_circle",
        "astralsorcery:altar_default_sparkle",
        "astralsorcery:built_in_effect_constellation_lines",
        "astralsorcery:built_in_effect_attunement_sparkle"
      ]
    }
  )
//CRAFTS
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:resonating_gem","count": 4}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:ingots/gold","count": 4}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:black_marble_raw","count": 3}},
        {"type": "masterfulmachinery:items","data": {"tag": "astralsorcery:starmetal","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:aquamarine","count": 5}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 4000}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:chalice","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"tag": "astralsorcery:stardust","count": 3}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:marble_runed","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:ingots/gold","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:nocturnal_powder","count": 1}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:glass_lens","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "astral:crystal","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 1400}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:celestial_gateway","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:infused_wood_planks","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:nuggets/gold","count": 3}},
        {"type": "masterfulmachinery:items","data": {"tag": "astralsorcery:starmetal","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 800}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:chisel","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:infused_wood_engraved","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:ingots/gold","count": 1}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:marble_runed","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:aquamarine","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:glass_lens","count": 3}},
        {"type": "masterfulmachinery:items","data": {"tag": "astral:crystal","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 600}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:lens","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"tag": "forge:ingots/gold","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:marble_chiseled","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:marble_pillar","count": 4}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:marble_runed","count": 3}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:liquid_starlight_bucket","count": 1}},
        {"type": "masterfulmachinery:items","data": {"tag": "astral:crystal","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 1400}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:ritual_pedestal","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:aquamarine","count": 4}},
        {"type": "masterfulmachinery:items","data": {"tag": "astralsorcery:stardust","count": 4}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:illumination_powder","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:liquid_starlight_bucket","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 1600}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:shifting_star","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "industrialforegoing:tinydryrubber","count": 8}},
        {"type": "masterfulmachinery:items","data": {"item": "mekanism:pellet_antimatter","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 200}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "kubejs:antimatter_silicon","count": 16}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:aquamarine","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "minecraft:iron_pickaxe","count": 1}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:ingots/gold","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:gems/diamond","count": 1}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:glass_lens","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 2000}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:colored_lens_break","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:aquamarine","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "minecraft:flint","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:ingots/iron","count": 4}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:gems/diamond","count": 1}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:glass_lens","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 2000}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:colored_lens_damage","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:aquamarine","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "minecraft:blaze_powder","count": 8}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:glass_lens","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 2000}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:colored_lens_fire","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:aquamarine","count": 5}},
        {"type": "masterfulmachinery:items","data": {"item": "minecraft:sugar_cane","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:crops/carrot","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:seeds","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:glass_lens","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 2000}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:colored_lens_growth","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:aquamarine","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:dusts/glowstone","count": 4}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:feathers","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:glass_lens","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 2000}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:colored_lens_push","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:aquamarine","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:gems/diamond","count": 1}},
        {"type": "masterfulmachinery:items","data": {"tag": "astralsorcery:stardust","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "minecraft:ghast_tear","count": 1}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:glass_lens","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 2000}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:colored_lens_regeneration","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"tag": "astralsorcery:stardust","count": 4}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:resonating_gem","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:illumination_powder","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:glass_lens","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 2000}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:colored_lens_spectral","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"tag": "astralsorcery:stardust","count": 8}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:glass_lens","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "astralsorcery:colored_lens","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 2400}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:infused_glass","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"tag": "forge:nuggets/gold","count": 4}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:ingots/gold","count": 1}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:glass_lens","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:resonating_gem","count": 1}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:glass_panes","count": 4}},
        {"type": "masterfulmachinery:items","data": {"tag": "astralsorcery:stardust","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 1600}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:ritual_link","count": 2}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"tag": "minecraft:leaves","count": 6}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:resonating_gem","count": 1}},
        {"type": "masterfulmachinery:items","data": {"tag": "minecraft:saplings","count": 1}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:marble_runed","count": 4}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:liquid_starlight_bucket","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 2400}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:tree_beacon","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:resonating_gem","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:ingots/gold","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:glass_panes","count": 4}},
        {"type": "masterfulmachinery:items","data": {"tag": "astralsorcery:stardust","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:glass_lens","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:infused_wood_engraved","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:marble_runed","count": 4}},
        {"type": "masterfulmachinery:items","data": {"tag": "astral:crystal","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 1600}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:prism","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:aquamarine","count": 4}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:glass_panes","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 200}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:glass_lens","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"tag": "forge:dusts/glowstone","count": 4}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:aquamarine","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 400}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:illumination_powder","count": 16}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"tag": "forge:dyes/blue","count": 1}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:dyes/black","count": 1}},
        {"type": "masterfulmachinery:items","data": {"tag": "minecraft:coals","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:illumination_powder","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 800}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:nocturnal_powder","count": 4}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"tag": "forge:nuggets/gold","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "minecraft:planks","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:glass_lens","count": 1}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:marble_raw","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 200}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:spectral_relay","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:aquamarine","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:marble_runed","count": 3}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:marble_chiseled","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "astral:crystal","count": 1}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 200}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:well","count": 1}}]
})
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "dark_astral_auto",
    "controllerId": "autoastral",
    "ticks": 100,
    "inputs": [
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:infused_wood_planks","count": 6}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:black_marble_raw","count": 3}},
        {"type": "masterfulmachinery:items","data": {"tag": "astralsorcery:starmetal","count": 4}},
        {"type": "masterfulmachinery:items","data": {"tag": "astral:crystal","count": 1}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:ingots/gold","count": 2}},
        {"type": "masterfulmachinery:items","data": {"item": "astralsorcery:resonating_gem","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "forge:gems/aquamarine","count": 2}},
        {"type": "masterfulmachinery:items","data": {"tag": "astralsorcery:stardust","count": 2}},
        {"type": "masterfulmachinery:astral_starlight","data": {"amount": 4000}}
    ],
    "outputs": [{"type": "masterfulmachinery:items","data": {"item": "astralsorcery:fountain","count": 1}}]
})


})