events.listen('recipes', function (e) {
//Ring Maker
e.custom({
  "type": "masterfulmachinery:machine_structure",
  "id": "ringmaker",
  "controllerId": "sonicrings",
  "name": "Ring Maker",
  "layout": [["  !C!  "],[" !###! "],["!#####!"],["$#####%"],["!#####!"],[" !###! "],["  !&!  "]],
  "legend": {
    "!": {"block": "minecraft:gold_block"},
    "#": {"block": "tconstruct:light_blue_clear_stained_glass_pane"},
    "$": {"block": "masterfulmachinery:sonicrings_ringitem_port_items_input"},
    "%": {"block": "masterfulmachinery:sonicrings_ringitem_port_items_output"},
    "&": {"block": "masterfulmachinery:sonicrings_ringenergy_port_energy_input"}
  }
})
//Energy Input
e.shaped(item.of('masterfulmachinery:sonicrings_ringenergy_port_energy_input', 1), ['A  ','B  ','C  '], {
  A: 'minecraft:hopper',
  B: 'minecraft:gold_block',
  C: 'thermal:energy_cell'
})
//Item Input
e.shaped(item.of('masterfulmachinery:sonicrings_ringitem_port_items_input', 1), ['C  ','B  ','A  '], {
  A: '#forge:chests/wooden',
  B: 'minecraft:gold_block',
  C: 'minecraft:hopper'
})
//Item Output
e.shaped(item.of('masterfulmachinery:sonicrings_ringitem_port_items_output', 1), ['A  ','B  ','C  '], {
  A: '#forge:chests/wooden',
  B: 'minecraft:gold_block',
  C: 'minecraft:hopper'
})
//Ring Maker Controller
e.custom(
  {
    "type": "create:mechanical_crafting",
    "pattern": [
      "  AAA  ",
      " ABCBA ",
      "ABDEDBA",
      "ACFGFCA",
      "ABDEDBA",
      " ABCBA ",
      "  AAA  "],
    "key": {
      "A": {"item": 'minecraft:gold_block'},
      "B": {"item": 'thermal:gold_dust'},
      "C": {"item": 'twilightforest:castle_rune_brick_yellow'},
      "D": {"item": 'farlanders:titan_hide'},
      "E": {"item": 'rats:halo_hat'},
      "F": {"item": 'mekanism:steel_casing'},
      "G": {"item": 'xnet:controller'}
    },
    "result": {"item": 'masterfulmachinery:sonicrings_controller',"count": 1}
  }
)
//Sonic Ring
e.custom({
  "type": "masterfulmachinery:machine_process",
  "structureId": "ringmaker",
  "controllerId": "sonicrings",
  "ticks": 200,
  "inputs": [
      {
          "type": "masterfulmachinery:energy",
          "data":{
              "amount" : 5000
          }
      },
      {
          "type": "masterfulmachinery:items",
          "data":{
              "item": "minecraft:gold_block",
              "count": 1
          }
      }
  ],
  "outputs":[
      {
          "type": "masterfulmachinery:items",
          "data":{
              "item": "sonicraft:gold_ring",
              "count": 1
          }
      }
  ]
})
})