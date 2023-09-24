events.listen('recipes', function (e) {
//Smithing Machine
e.custom({
  "type": "masterfulmachinery:machine_structure",
  "id": "smithing_machine",
  "controllerId": "smithing",
  "name": "Smithing Machine",
  "layout": [[")"],["C"],["*"]],
  "legend": {
    ")": {"block": "masterfulmachinery:smithing_smithingitem_port_items_output"},
    "*": {"block": "masterfulmachinery:smithing_smithingitem_port_items_input"}
  }
})
//Item Input
e.shaped(item.of('masterfulmachinery:smithing_smithingitem_port_items_input', 1), ['C  ','B  ','A  '], {
  A: '#forge:chests/wooden',
  B: 'kubejs:smithing_machine_block',
  C: 'minecraft:hopper'
})
//Item Output
e.shaped(item.of('masterfulmachinery:smithing_smithingitem_port_items_output', 1), ['A  ','B  ','C  '], {
  A: '#forge:chests/wooden',
  B: 'kubejs:smithing_machine_block',
  C: 'minecraft:hopper'
})
//Controller
e.shaped(item.of('masterfulmachinery:smithing_controller', 1), ['A  ','B  ','C  '], {
  A: '#forge:storage_blocks/redstone',
  B: 'kubejs:smithing_machine_block',
  C: 'xnet:controller'
})

function smithingcraft(input, secinput, output){
  e.custom({"type": "masterfulmachinery:machine_process","structureId": "smithing_machine","controllerId": "smithing","ticks": 10,"inputs": [{"type": "masterfulmachinery:items","data":{"item": input,"count": 1}},{"type": "masterfulmachinery:items","data":{"item": secinput,"count": 1}}],"outputs":[{"type": "masterfulmachinery:items","data":{"item": output,"count": 1}}]})}
function smithingcraftag(input, secinput, output){
  e.custom({"type": "masterfulmachinery:machine_process","structureId": "smithing_machine","controllerId": "smithing","ticks": 10,"inputs": [{"type": "masterfulmachinery:items","data":{"tag": input,"count": 1}},{"type": "masterfulmachinery:items","data":{"item": secinput,"count": 1}}],"outputs":[{"type": "masterfulmachinery:items","data":{"item": output,"count": 1}}]})}

//Craft
smithingcraftag('twilightforest:fiery_vial', 'minecraft:iron_ingot', 'twilightforest:fiery_ingot')
smithingcraftag('forge:shulker_boxes', 'minecraft:netherite_ingot', 'supplementaries:safe')
smithingcraft('metalbarrels:obsidian_barrel', 'minecraft:netherite_ingot', 'metalbarrels:netherite_barrel')
smithingcraft('more_jellyfish:diamond_jellyfish', 'minecraft:netherite_ingot', 'more_jellyfish:netherite_jellyfish')
smithingcraft('forbidden_arcanus:spawner_scrap', 'forbidden_arcanus:arcane_crystal_block', 'forbidden_arcanus:quantum_catcher')
smithingcraft('supplementaries:gold_trapdoor', 'minecraft:netherite_scrap', 'supplementaries:netherite_trapdoor')
smithingcraft('supplementaries:gold_door', 'minecraft:netherite_scrap', 'supplementaries:netherite_door')
smithingcraft('pipez:ultimate_upgrade', 'mysticalagradditions:creative_essence', 'pipez:infinity_upgrade')
smithingcraft('rats:cheese', 'mysticalagradditions:creative_essence', 'rats:creative_cheese')
smithingcraft('rats:rat_upgrade_basic', 'mysticalagradditions:creative_essence', 'rats:rat_upgrade_creative')
smithingcraft('iceandfire:dragon_meal', 'mysticalagradditions:creative_essence', 'iceandfire:creative_dragon_meal')
smithingcraft('create:blaze_cake', 'mysticalagradditions:creative_essence', 'create:creative_blaze_cake')
smithingcraft('cagedmobs:dnasamplerdiamond', 'cagedmobs:star_infused_netherite_ingot', 'cagedmobs:dnasamplernetherite')
})