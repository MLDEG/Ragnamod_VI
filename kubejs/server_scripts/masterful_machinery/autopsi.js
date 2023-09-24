events.listen('recipes', function (e) {
//Infusion Automated
e.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "infused_auto",
    "controllerId": "autopsi",
    "name": "Infusion Automated",
    "layout": [[")C"],["*+"]],
    "legend": {
        ")": {"block": "masterfulmachinery:autopsi_autopsi_energy_port_energy_input"},
        "*": {"block": "masterfulmachinery:autopsi_autopsi_item_port_items_output"},
        "+": {"block": "masterfulmachinery:autopsi_autopsi_item_port_items_input"}
    }
})
  //Energy Input
  e.shaped(item.of('masterfulmachinery:autopsi_autopsi_energy_port_energy_input', 1), ['A  ','B  ','C  '], {
    A: 'minecraft:hopper',
    B: 'psi:psimetal_block',
    C: 'thermal:energy_cell'
  })
  //Item Input
  e.shaped(item.of('masterfulmachinery:autopsi_autopsi_item_port_items_input', 1), ['C  ','B  ','A  '], {
    A: '#forge:chests/wooden',
    B: 'psi:psimetal_block',
    C: 'minecraft:hopper'
  })
  //Item Output
  e.shaped(item.of('masterfulmachinery:autopsi_autopsi_item_port_items_output', 1), ['A  ','B  ','C  '], {
    A: '#forge:chests/wooden',
    B: 'psi:psimetal_block',
    C: 'minecraft:hopper'
  })
  //Controller
  e.shaped(item.of('masterfulmachinery:autopsi_controller', 1), ['ABA','CDE','ABA'], {
    A: 'psi:cad_battery_ultradense',
    B: 'psi:psigem_block',
    C: 'psi:cad_assembly_ebony_psimetal',
    D: 'xnet:controller',
    E: 'psi:cad_assembly_ivory_psimetal'
  })
function autoPSI(ticks, energy, input, output){e.custom({"type": "masterfulmachinery:machine_process","structureId": "infused_auto","controllerId": "autopsi","ticks": ticks,"inputs": [{"type": "masterfulmachinery:energy","data":{"amount" : energy}},{"type": "masterfulmachinery:items","data":{"item": input,"count": 1}}],"outputs":[{"type": "masterfulmachinery:items","data":{"item": output,"count": 1}}]})}

    autoPSI(5, 1000, 'minecraft:redstone', 'psi:psidust')
    autoPSI(5, 2500, 'minecraft:gold_ingot', 'psi:psimetal')
    autoPSI(5, 5000, 'minecraft:diamond', 'psi:psigem')
    autoPSI(2, 1000, 'minecraft:coal', 'psi:ebony_substance')
    autoPSI(2, 1000, 'minecraft:quartz', 'psi:ivory_substance')

})