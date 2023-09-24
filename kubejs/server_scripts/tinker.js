events.listen('recipes', function (e) {

//Blazing Blood
e.custom({"type": "thermal:press","input": [{"item": "minecraft:blaze_powder","count": 1}],"result": [{"fluid": "tconstruct:blazing_blood","amount": 20}],"energy": 400})
e.custom({"type": "thermal:press","input": [{"item": "minecraft:blaze_rod","count": 1}],"result": [{"fluid": "tconstruct:blazing_blood","amount": 40}],"energy": 800})
e.custom({"type": "thermal:press","input": [{"item": "botania:blaze_block","count": 1}],"result": [{"fluid": "tconstruct:blazing_blood","amount": 360}],"energy": 7200})

//Slimesteel Ingot
e.remove({ id: 'thermal:compat/tconstruct/smelter_alloy_tconstruct_slimesteel_ingot' })
e.custom({"type": "thermal:smelter","input": [{"item": "minecraft:iron_ingot","count": 1},{"item": "tconstruct:sky_slime_ball","count": 1},{"item": "tconstruct:seared_brick","count": 1}],"result": [{"item": "tconstruct:slimesteel_ingot","count": 2}],"energy": 4000,"conditions": [{"type": "forge:mod_loaded","modid": "tconstruct"}]})

//Redstone
tinkerMelt('minecraft:redstone_block', 'thermal:redstone', 900, 500, 320)
tinkerMelt('minecraft:redstone', 'thermal:redstone', 100, 500, 30)
tinkerCastingBasin("thermal:redstone", 900, "minecraft:redstone_block", 100)
//Glowstone
tinkerMelt('minecraft:glowstone', 'thermal:glowstone', 400, 500, 320)
tinkerMelt('minecraft:glowstone_dust', 'thermal:glowstone', 100, 500, 30)
tinkerCastingBasin("thermal:glowstone", 400, "minecraft:glowstone", 100)

//emerald Gear
tinkerCasting("tconstruct:molten_emerald", 576, "thermal:emerald_gear", "tconstruct:casts/multi_use/gear", false, 200)
tinkerCasting("tconstruct:molten_emerald", 576, "thermal:emerald_gear", "tconstruct:casts/single_use/gear", true, 200)

//Diamond Gear
tinkerCasting("tconstruct:molten_diamond", 576, "thermal:diamond_gear", "tconstruct:casts/multi_use/gear", false, 200)
tinkerCasting("tconstruct:molten_diamond", 576, "thermal:diamond_gear", "tconstruct:casts/single_use/gear", true, 200)

//missing nugget
tinkerCasting("tconstruct:molten_copper", 16, "thermal:copper_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
tinkerCasting("tconstruct:molten_copper", 16, "thermal:copper_nugget", "tconstruct:casts/single_use/nugget", true, 200)
tinkerCasting("tconstruct:molten_lead", 16, "thermal:lead_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
tinkerCasting("tconstruct:molten_lead", 16, "thermal:lead_nugget", "tconstruct:casts/single_use/nugget", true, 200)
tinkerCasting("tconstruct:molten_electrum", 16, "thermal:electrum_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
tinkerCasting("tconstruct:molten_electrum", 16, "thermal:electrum_nugget", "tconstruct:casts/single_use/nugget", true, 200)
tinkerCasting("tconstruct:molten_constantan", 16, "thermal:constantan_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
tinkerCasting("tconstruct:molten_constantan", 16, "thermal:constantan_nugget", "tconstruct:casts/single_use/nugget", true, 200)
tinkerCasting("tconstruct:molten_silver", 16, "thermal:silver_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
tinkerCasting("tconstruct:molten_silver", 16, "thermal:silver_nugget", "tconstruct:casts/single_use/nugget", true, 200)
tinkerCasting("tconstruct:molten_nickel", 16, "thermal:nickel_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
tinkerCasting("tconstruct:molten_nickel", 16, "thermal:nickel_nugget", "tconstruct:casts/single_use/nugget", true, 200)
tinkerCasting("tconstruct:molten_tin", 16, "thermal:tin_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
tinkerCasting("tconstruct:molten_tin", 16, "thermal:tin_nugget", "tconstruct:casts/single_use/nugget", true, 200)
tinkerCasting("tconstruct:molten_bronze", 16, "thermal:bronze_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
tinkerCasting("tconstruct:molten_bronze", 16, "thermal:bronze_nugget", "tconstruct:casts/single_use/nugget", true, 200)
tinkerCasting("tconstruct:molten_zinc", 16, "create:zinc_nugget", "tconstruct:casts/multi_use/nugget", false, 200)
tinkerCasting("tconstruct:molten_zinc", 16, "create:zinc_nugget", "tconstruct:casts/single_use/nugget", true, 200)
tinkerCasting("tconstruct:molten_steel", 16, "mekanism:nugget_steel", "tconstruct:casts/multi_use/nugget", false, 200)
tinkerCasting("tconstruct:molten_steel", 16, "mekanism:nugget_steel", "tconstruct:casts/single_use/nugget", true, 200)
tinkerCasting("tconstruct:molten_uranium", 16, "mekanism:nugget_uranium", "tconstruct:casts/multi_use/nugget", false, 200)
tinkerCasting("tconstruct:molten_uranium", 16, "mekanism:nugget_uranium", "tconstruct:casts/single_use/nugget", true, 200)
tinkerCasting("tconstruct:molten_aluminum", 16, "immersiveengineering:nugget_aluminum", "tconstruct:casts/multi_use/nugget", false, 200)
tinkerCasting("tconstruct:molten_aluminum", 16, "immersiveengineering:nugget_aluminum", "tconstruct:casts/single_use/nugget", true, 200)
tinkerCasting("tconstruct:molten_ender", 144, "extendedcrafting:ender_ingot", "tconstruct:casts/multi_use/ingot", false, 100)
tinkerCasting("tconstruct:molten_ender", 144, "extendedcrafting:ender_ingot", "tconstruct:casts/single_use/ingot", true, 100)
tinkerCastingBasin("tconstruct:molten_ender", 1296, "extendedcrafting:ender_ingot_block", 200)

//missing Ingot
tinkerCasting("tconstruct:molten_steel", 144, "mekanism:ingot_steel", "tconstruct:casts/multi_use/ingot", false, 100)
tinkerCasting("tconstruct:molten_steel", 144, "mekanism:ingot_steel", "tconstruct:casts/single_use/ingot", true, 100)

//Iron Rod
e.remove({ id: 'tconstruct:smeltery/casting/metal/iron/rod_gold_cast' })
e.remove({ id: 'tconstruct:smeltery/casting/metal/iron/rod_sand_cast' })
tinkerCasting("tconstruct:molten_iron", 72, "createaddition:iron_rod", "tconstruct:casts/multi_use/rod", false, 40)
tinkerCasting("tconstruct:molten_iron", 72, "createaddition:iron_rod", "tconstruct:casts/single_use/rod", true, 40)

function tinkerMelt(input, output, qte, tmp, time){
  e.custom({"type": "tconstruct:melting","ingredient": {"item": input},"result": {"fluid": output,"amount": qte},"temperature": tmp,"time": time})}

function tinkerCasting(input, qte, output, cast, consume, time) {
  e.custom({"type": "tconstruct:casting_table","cast": { "tag": cast },"cast_consumed": consume,"fluid": { "name": input, "amount": qte },"result": output,"cooling_time": time})}

function tinkerCastingBasin(input, qte, output, time) {
  e.custom({"type": "tconstruct:casting_basin","fluid": {"name": input,"amount": qte},"result": {"item": output},"cooling_time": time})}

})