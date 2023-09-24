events.listen('recipes', function (e) {
//Infusion Automated
e.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "emc_maker",
    "controllerId": "emcmaker",
    "name": "EMC Maker",
    "layout": [
      ["   ","   "," C ","   ","   "],
      ["   ","   "," ) ","   ","   "],
      [" ) ","   "," ) ","   "," ) "],
      [" * "," ) ","+,+"," ) "," - "],
      [" ) ","   "," ) ","   "," ) "],
      [" ) ","   "," . ","   "," ) "],
      [" / ","   ","   ","   "," / "]
    ],
    "legend": {
      ")": {"block": "forbidden_arcanus:arcane_polished_darkstone_pillar"},
      "*": {"block": "masterfulmachinery:emcmaker_emc_item_port_items_output"},
      "+": {"block": "projecte:transmutation_table"},
      ",": {"block": "projectex:energy_link"},
      "-": {"block": "masterfulmachinery:emcmaker_emc_item_port_items_input"},
      ".": {"block": "masterfulmachinery:emcmaker_emc_energy_port_energy_input"},
      "/": {"block": "forbidden_arcanus:runic_tenebris_core"}
    }
})
  //Energy Input
  e.shaped(item.of('masterfulmachinery:emcmaker_emc_energy_port_energy_input', 1), ['A  ','B  ','C  '], {
    A: 'minecraft:hopper',
    B: 'forbidden_arcanus:arcane_polished_darkstone',
    C: 'thermal:energy_cell'
  })
  //Item Input
  e.shaped(item.of('masterfulmachinery:emcmaker_emc_item_port_items_input', 1), ['C  ','B  ','A  '], {
    A: '#forge:chests/wooden',
    B: 'forbidden_arcanus:arcane_polished_darkstone',
    C: 'minecraft:hopper'
  })
  //Item Output
  e.shaped(item.of('masterfulmachinery:emcmaker_emc_item_port_items_output', 1), ['A  ','B  ','C  '], {
    A: '#forge:chests/wooden',
    B: 'forbidden_arcanus:arcane_polished_darkstone',
    C: 'minecraft:hopper'
  })
  //Controller
e.custom({
    "type": "extendedcrafting:shaped_table",
    "pattern": ["AAAAAAAAA","ABBCCCBBA","ABDEEEDBA","ACEEBEECA","ACEBFBECA","ACEEBEECA","ABDEEEDBA","ABBCCCBBA","AAAAAAAAA"],
    "key": {
      "A": {"item": "forbidden_arcanus:arcane_polished_darkstone"},
      "B": {"item": "projectex:energy_link"},
      "C": {"item": "projectex:red_relay"},
      "D": {"item": "projectex:violet_compressed_collector"},
      "E": {"item": "thermal:netherite_gear"},
      "F": {"item": "xnet:controller"}
    },
    "result": {
      "item": "masterfulmachinery:emcmaker_controller"
    }
  })
function emcMaker(ticks, energy, input, output){e.custom({"type": "masterfulmachinery:machine_process","structureId": "emc_maker","controllerId": "emcmaker","ticks": ticks,"inputs": [{"type": "masterfulmachinery:energy","data":{"amount" : energy}},{"type": "masterfulmachinery:items","data":{"item": input,"count": 1}}],"outputs":[{"type": "masterfulmachinery:items","data":{"item": output,"count": 1}}]})}
function emcMakerDup(ticks, energy, input, output){e.custom({"type": "masterfulmachinery:machine_process","structureId": "emc_maker","controllerId": "emcmaker","ticks": ticks,"inputs": [{"type": "masterfulmachinery:energy","data":{"amount" : energy}},{"type": "masterfulmachinery:items","data":{"item": input,"count": 1}}],"outputs":[{"type": "masterfulmachinery:items","data":{"item": output,"count": 2}}]})}

  //EMC Clumped 2
  e.shaped(item.of('kubejs:emc2', 1), ['AAA','AAA','AAA'], {A: 'kubejs:emc1'})
  e.shapeless(item.of('kubejs:emc1', 9), ['kubejs:emc2'])
  //EMC Clumped 3
  e.shaped(item.of('kubejs:emc3', 1), ['AAA','AAA','AAA'], {A: 'kubejs:emc2'})
  e.shapeless(item.of('kubejs:emc2', 9), ['kubejs:emc3'])
  //EMC Clumped 4
  e.shaped(item.of('kubejs:emc4', 1), ['AAA','AAA','AAA'], {A: 'kubejs:emc3'})
  e.shapeless(item.of('kubejs:emc3', 9), ['kubejs:emc4'])
  //EMC Clumped 5
  e.shaped(item.of('kubejs:emc5', 1), ['AAA','AAA','AAA'], {A: 'kubejs:emc4'})
  e.shapeless(item.of('kubejs:emc4', 9), ['kubejs:emc5'])

emcMaker(600, 10000000, 'projectex:red_compressed_collector', 'kubejs:emc1')
emcMakerDup(1200, 10000000, 'kubejs:emc1', 'kubejs:emc1')
emcMakerDup(1200, 50000000, 'kubejs:emc2', 'kubejs:emc2')
emcMakerDup(1200, 50000000, 'kubejs:emc3', 'kubejs:emc3')
emcMakerDup(1200, 100000000, 'kubejs:emc4', 'kubejs:emc4')
emcMakerDup(1200, 100000000, 'kubejs:emc5', 'kubejs:emc5')

})