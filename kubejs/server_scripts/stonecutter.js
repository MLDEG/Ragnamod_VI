events.listen('recipes', function (e) {
  
  function stoneCutter(output, input) {
    e.custom({"type": "minecraft:stonecutting","ingredient": input,"result": output,"count": 1})
  }
  //Copper
  stoneCutter('create:copper_block', [{"item": 'tconstruct:copper_block'}, {"item": 'thermal:copper_block'}, {"item": 'mekanism:block_copper'}, {"item": 'immersiveengineering:storage_copper'}, {"item": 'iceandfire:copper_block'}])
  stoneCutter('tconstruct:copper_block', [{"item": 'create:copper_block'}, {"item": 'thermal:copper_block'}, {"item": 'mekanism:block_copper'}, {"item": 'immersiveengineering:storage_copper'}, {"item": 'iceandfire:copper_block'}])
  stoneCutter('thermal:copper_block', [{"item": 'create:copper_block'}, {"item": 'tconstruct:copper_block'}, {"item": 'mekanism:block_copper'}, {"item": 'immersiveengineering:storage_copper'}, {"item": 'iceandfire:copper_block'}])
  stoneCutter('mekanism:block_copper', [{"item": 'create:copper_block'}, {"item": 'tconstruct:copper_block'}, {"item": 'thermal:copper_block'}, {"item": 'immersiveengineering:storage_copper'}, {"item": 'iceandfire:copper_block'}])
  stoneCutter('immersiveengineering:storage_copper', [{"item": 'create:copper_block'}, {"item": 'tconstruct:copper_block'}, {"item": 'thermal:copper_block'}, {"item": 'mekanism:block_copper'}, {"item": 'iceandfire:copper_block'}])
  stoneCutter( 'iceandfire:copper_block', [{"item": 'create:copper_block'}, {"item": 'tconstruct:copper_block'}, {"item": 'thermal:copper_block'}, {"item": 'mekanism:block_copper'}, {"item":'immersiveengineering:storage_copper'}])


  //Uranium
  stoneCutter( 'mekanism:block_uranium', [{"item": 'immersiveengineering:storage_uranium'}])
  stoneCutter( 'immersiveengineering:storage_uranium', [{"item": 'mekanism:block_uranium'}])

  //Bronze
  stoneCutter( 'thermal:bronze_block', [{"item": 'mekanism:block_bronze'}])
  stoneCutter( 'mekanism:block_bronze', [{"item": 'thermal:bronze_block'}])

  //Nickel
  stoneCutter( 'thermal:nickel_block', [{"item": 'immersiveengineering:storage_nickel'}])
  stoneCutter( 'immersiveengineering:storage_nickel', [{"item": 'thermal:nickel_block'}])

  //Constantan
  stoneCutter( 'thermal:constantan_block', [{"item": 'immersiveengineering:storage_constantan'}])
  stoneCutter( 'immersiveengineering:storage_constantan', [{"item": 'thermal:constantan_block'}])

  //Electrum
  stoneCutter( 'thermal:electrum_block', [{"item": 'immersiveengineering:storage_electrum'}])
  stoneCutter( 'immersiveengineering:storage_electrum', [{"item": 'thermal:electrum_block'}])

  //Tin
  stoneCutter( 'thermal:tin_block', [{"item": 'mekanism:block_tin'}])
  stoneCutter( 'mekanism:block_tin', [{"item": 'thermal:tin_block'}])

  //Steel
  stoneCutter( 'mekanism:block_steel', [{"item": 'immersiveengineering:storage_steel'}, {"item":'mapperbase:steel_block'}])
  stoneCutter( 'immersiveengineering:storage_steel', [{"item": 'mekanism:block_steel'}, {"item":'mapperbase:steel_block'}])
  stoneCutter( 'mapperbase:steel_block', [{"item": 'mekanism:block_steel'}, {"item": 'immersiveengineering:storage_steel'}])

  //Nether Star
  stoneCutter( 'extendedcrafting:nether_star_block', [{"item": 'overloaded:nether_star_block'}])
  stoneCutter( 'overloaded:nether_star_block', [{"item": 'extendedcrafting:nether_star_block'}])

  //Arcane Gold
  stoneCutter( 'eidolon:arcane_gold_block', [{"item": 'forbidden_arcanus:arcane_gold_block'}])
  stoneCutter( 'forbidden_arcanus:arcane_gold_block', [{"item": 'eidolon:arcane_gold_block'}])

  //Ruby
  stoneCutter( 'janoeo:ruby_block', [{"item": 'thermal:ruby_block'}])
  stoneCutter( 'thermal:ruby_block', [{"item": 'janoeo:ruby_block'}])

  //Basalt
  stoneCutter( 'embellishcraft:basalt', [{"item": 'chisel:basalt/raw'}])
  stoneCutter( 'chisel:basalt/raw', [{"item": 'embellishcraft:basalt'}])

  //Limestone
  stoneCutter( 'create:limestone', [{"item": 'chisel:limestone/raw'}])
  stoneCutter( 'chisel:limestone/raw', [{"item": 'create:limestone'}])

  //Sapphire
  stoneCutter( 'janoeo:sapphire_block', [{"item": 'thermal:sapphire_block'}, {"item": 'iceandfire:sapphire_block'}])
  stoneCutter( 'thermal:sapphire_block', [{"item": 'janoeo:sapphire_block'}, {"item": 'iceandfire:sapphire_block'}])
  stoneCutter( 'iceandfire:sapphire_block', [{"item": 'janoeo:sapphire_block'}, {"item": 'thermal:sapphire_block'}])

  //Lead
  stoneCutter( 'thermal:lead_block', [{"item": 'mekanism:block_lead'}, {"item": 'eidolon:lead_block'}, {"item": 'immersiveengineering:storage_lead'}])
  stoneCutter( 'mekanism:block_lead', [{"item": 'thermal:lead_block'}, {"item": 'eidolon:lead_block'}, {"item": 'immersiveengineering:storage_lead'}])
  stoneCutter( 'eidolon:lead_block', [{"item": 'thermal:lead_block'}, {"item": 'mekanism:block_lead'}, {"item": 'immersiveengineering:storage_lead'}])
  stoneCutter( 'immersiveengineering:storage_lead', [{"item": 'thermal:lead_block'}, {"item": 'mekanism:block_lead'}, {"item": 'eidolon:lead_block'}])

  //Silver
  stoneCutter( 'thermal:silver_block', [{"item": 'immersiveengineering:storage_silver'}, {"item": 'iceandfire:silver_block'}])
  stoneCutter( 'immersiveengineering:storage_silver', [{"item": 'thermal:silver_block'}, {"item": 'iceandfire:silver_block'}])
  stoneCutter( 'iceandfire:silver_block', [{"item": 'thermal:silver_block'}, {"item": 'immersiveengineering:storage_silver'}])

  //Bamboo
  stoneCutter( 'bambooeverything:bamboo_bundle', [{"item": 'quark:bamboo_block'}, {"item": 'amb:bamboo_block'}, {"item": 'thermal:bamboo_block'}])
  stoneCutter( 'quark:bamboo_block', [{"item": 'bambooeverything:bamboo_bundle'}, {"item": 'amb:bamboo_block'}, {"item": 'thermal:bamboo_block'}])
  stoneCutter( 'amb:bamboo_block', [{"item": 'quark:bamboo_block'}, {"item": 'bambooeverything:bamboo_bundle'}, {"item": 'thermal:bamboo_block'}])
  stoneCutter( 'thermal:bamboo_block', [{"item": 'quark:bamboo_block'}, {"item": 'amb:bamboo_block'}, {"item": 'bambooeverything:bamboo_bundle'}])

  //Marble
  stoneCutter( 'embellishcraft:marble', [{"item": 'chisel:marble/raw'}, {"item": 'astralsorcery:marble_raw'}])
  stoneCutter( 'chisel:marble/raw', [{"item": 'embellishcraft:marble'}, {"item": 'astralsorcery:marble_raw'}])
  stoneCutter( 'astralsorcery:marble_raw', [{"item": 'embellishcraft:marble'}, {"item": 'chisel:marble/raw'}])

})