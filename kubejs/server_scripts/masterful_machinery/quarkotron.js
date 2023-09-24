events.listen('recipes', function (e) {
//Quarkotron
e.custom({
    "type": "masterfulmachinery:machine_structure",
    "controllerId": "quarkonium",
    "id": "quarkotron",
    "name": "Quarkotron",
  "layout": [["A"],["C"],["B"]],
  "legend": {
    "A": {"block": "masterfulmachinery:quarkonium_quarkitem_port_items_output"},
    "B": {"block": "masterfulmachinery:quarkonium_qfe_port_energy_input"}
  }
})
//Advanced Quarkotron
e.custom({
  "type": "masterfulmachinery:machine_structure",
  "controllerId": "quarkonium",
  "id": "advanced_quarkotron",
  "name": "Advanced Quarkotron",
  "layout": [[")C"],["*+"]],
  "legend": {
    ")": {"block": "masterfulmachinery:quarkonium_qfe_port_energy_input"},
    "*": {"block": "masterfulmachinery:quarkonium_quarkitem_port_items_output"},
    "+": {"block": "masterfulmachinery:quarkonium_quarkitem_port_items_input"}
  }
})
//Pile of Quarkonium
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "quarkotron",
    "controllerId": "quarkonium",
    "ticks": 6000,
    "inputs": [{"type": "masterfulmachinery:energy","data":{"amount" : 5000000}}],
    "outputs":[
        {
            "type": "masterfulmachinery:items",
            "data":{
                "item": "kubejs:pile_of_quarkonium",
                "count": 1
            }
        }
    ]
})
//Pile of Quarkonium (advanced)
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_quarkotron",
    "controllerId": "quarkonium",
    "ticks": 3000,
    "inputs": [
      {"type": "masterfulmachinery:energy","data":{"amount" : 10000000}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:pile_of_quarkonium","count": 1}}],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:pile_of_quarkonium","count": 2}}
]})
//Quarkonium Nugget (advanced)
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_quarkotron",
    "controllerId": "quarkonium",
    "ticks": 3000,
    "inputs": [
      {"type": "masterfulmachinery:energy","data":{"amount" : 20000000}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:quarkonium_nugget","count": 1}}],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:quarkonium_nugget","count": 2}}
]})
//Quarkonium Ingot (advanced)
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_quarkotron",
    "controllerId": "quarkonium",
    "ticks": 3000,
    "inputs": [
      {"type": "masterfulmachinery:energy","data":{"amount" : 50000000}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:quarkonium_ingot","count": 1}}],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:quarkonium_ingot","count": 2}}
]})
//Quarkonium Block (advanced)
e.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "advanced_quarkotron",
    "controllerId": "quarkonium",
    "ticks": 3000,
    "inputs": [
      {"type": "masterfulmachinery:energy","data":{"amount" : 100000000}},
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:quarkonium_block","count": 1}}],
    "outputs":[
      {"type": "masterfulmachinery:items","data":{"item": "kubejs:quarkonium_block","count": 2}}
]})

//Quarkotron Controller
e.custom(
  {
    "type": "extendedcrafting:shaped_table",
    "tier": 3,
    "pattern": ["ABBCBBA","BDEFEDB","BFGHGFB","CFGIGFC","BFGJGFB","BDEFEDB","ABBCBBA"],
    "key": {
      "A": { "item": "mekanism:steel_casing" },
      "B": { "item": "kubejs:machinarium_block" },
      "C": { "item": "bloodmagic:etherealslate" },
      "D": { "item": "pneumaticcraft:electrostatic_compressor" },
      "E": { "item": "cagedmobs:star_infused_netherite_ingot" },
      "F": { "item": "extendedcrafting:compressor" },
      "G": { "item": "farlanders:titan_hide" },
      "H": { "item": "twilightforest:twilight_portal_miniature_structure" },
      "I": { "item": "xnet:controller" },
      "J": { "type": "forge:nbt", "item": "tconstruct:creative_slot", "nbt": "{slot:\"upgrades\"}" }
    },
    "result": { "item": "masterfulmachinery:quarkonium_controller", "count": 1 }
  }
)
//Energy Input
e.shaped(item.of('masterfulmachinery:quarkonium_qfe_port_energy_input', 1), ['A  ','B  ','C  '], {
  A: 'minecraft:hopper',
  B: 'kubejs:machinarium_block',
  C: 'thermal:energy_cell'
})
//Item Output
e.shaped(item.of('masterfulmachinery:quarkonium_quarkitem_port_items_output', 1), ['A  ','B  ','C  '], {
  A: '#forge:chests/wooden',
  B: 'kubejs:machinarium_block',
  C: 'minecraft:hopper'
})
//Item Input
e.shaped(item.of('masterfulmachinery:quarkonium_quarkitem_port_items_input', 1), ['C  ','B  ','A  '], {
  A: '#forge:chests/wooden',
  B: 'kubejs:machinarium_block',
  C: 'minecraft:hopper'
})
//Machinarium Ingot
e.custom(
  {
    "type": "powah:energizing",
    "ingredients": [
      { "item": "pneumaticcraft:advanced_pcb" },
      { "item": "kubejs:ultimate_netherite" },
      { "item": "betterendforge:terminite_ingot" },
      { "item": "mysticalagradditions:creative_essence" }
    ],
    "energy": 100000,
    "result": {
      "item": "kubejs:machinarium_ingot",
      "count": 1
    }
  }
)
//Machinarium
e.shapeless(item.of('kubejs:machinarium_ingot', 4), ['kubejs:machinarium_block'])
e.shapeless('kubejs:machinarium_block', [item.of('kubejs:machinarium_ingot', 4)])
//Quarkonium
//Pile
e.shapeless(item.of('kubejs:pile_of_quarkonium', 9), ['kubejs:quarkonium_nugget'])
e.shaped(item.of('kubejs:quarkonium_nugget', 1), ['AAA','AAA','AAA'], {
  A: 'kubejs:pile_of_quarkonium'
})
//Nugget
e.shapeless(item.of('kubejs:quarkonium_nugget', 9), ['kubejs:quarkonium_ingot'])
e.shaped(item.of('kubejs:quarkonium_ingot', 1), ['AAA','AAA','AAA'], {
  A: 'kubejs:quarkonium_nugget'
})
//Ingot
e.shapeless(item.of('kubejs:quarkonium_ingot', 9), ['kubejs:quarkonium_block'])
e.shaped(item.of('kubejs:quarkonium_block', 1), ['AAA','AAA','AAA'], {
  A: 'kubejs:quarkonium_ingot'
})

})