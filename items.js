exports.BattleItems = {

"bulletproofvest": {
	id: "bulletproofvest",
	name: "Bulletproof Vest",
	spritenum: 0,
	fling: {
		basePower: 80
	},
	onModifyDefPriority: 1,
	onModifyDef: function (def) {
		return this.chainModify(1.5);
	},
	onModifyPokemon: function (pokemon) {
		var moves = pokemon.moveset;
		for (var i = 0; i < moves.length; i++) {
			if (this.getMove(moves[i].move).category === 'Status') {
			moves[i].disabled = true;
		}
	},
	num: -1001,
	gen: -1,
	desc: "Holder's Defense is 1.5x, but it can only use damaging moves."
},
"choicejacket": {
	id: "choicejacket",
	name: "Choice Jacket",
	spritenum: 0,
	fling: {
		basePower: 10
	},
	onStart: function (pokemon) {
		if (pokemon.volatiles['choicelock']) {
			this.debug('removing choicelock: ' + pokemon.volatiles.choicelock);
		}
	pokemon.removeVolatile('choicelock');
	},
	onModifyMove: function (move, pokemon) {
		pokemon.addVolatile('choicelock');
	},
	onModifySpDPriority: 1,
	onModifySpD: function (spd) {
		return this.chainModify(1.5);
	},
	isChoice: true,
	num: -1002,
	gen: -1,
	desc: "Holder's Sp. Def is 1.5x, but it can only use the first move it selects."
},
"choicevest": {
	id: "choicevest",
	name: "Choice Vest",
	spritenum: 0,
	fling: {
		basePower: 10
	},
	onStart: function (pokemon) {
		if (pokemon.volatiles['choicelock']) {
			this.debug('removing choicelock: ' + pokemon.volatiles.choicelock);
		}
		pokemon.removeVolatile('choicelock');
	},
	onModifyMove: function (move, pokemon) {
		pokemon.addVolatile('choicelock');
	},
	onModifyDefPriority: 1,
	onModifyDef: function (def) {
		return this.chainModify(1.5);
	},
	isChoice: true,
	num: -1003,
	gen: -1,
	desc: "Holder's Defense is 1.5x, but it can only use the first move it selects."
},
"chumchuberry": {
	id: "chumchuberry",
	name: "Chumchu Berry",
	spritenum: 0,
	isBerry: true,
	naturalGift: {
		basePower: 80,
		type: "Normal"
	},
	onSourceModifyDamage: function (damage, source, target, move) {
		if (!target.volatiles['substitute']) {
			if (target.eatItem()) {
				this.debug('-50% reduction');
				return this.chainModify(0.5);
			}
		}
	},
	onEat: function () { },
	num: -1004,
	gen: -1,
	desc: "Halves damage taken from any attack. Single use."
},
"clearlense": {
	id: "clearlense",
	name: "Clear Lense",
	spritenum: 0,
	fling: {
		basePower: 60
	},
	onModifyMove: function (move) {
		move.type = '???';      
	},
	onBasePowerPriority: 6,
	onBasePower: function (basePower, pokemon, target, move) {
		return this.chainModify(0.6);
	},
	num: -1005,
	gen: -1,
	desc: "All moves become typeless and do x0.6 damage."
},
"enchantedgloves": {
	id: "enchantedgloves",
	name: "Enchanted Gloves",
	spritenum: 0,
	fling: {
		basePower: 30
	},
	onModifyDamage: function (damage, source, target, move) {
		if (source) {
			source.addVolatile('enchantedgloves');
			return this.chainModify(1.2);
		}
	},
	effect: {
		duration: 1,
		onAfterMoveSecondarySelf: function (source, target, move) {
			if (move && move.effectType === 'Move' && source && source.volatiles['enchantedgloves']) {
				 this.damage(source.maxhp / 10, source, source, this.getItem('enchantedgloves'));
				source.removeVolatile('enchantedgloves');
			}
		}
	},
	num: -1006,
	gen: -1,
	desc: "Holder's damaging moves do 1.2x damage; loses 1/10 max HP after the attack."
},
    "enchantedslippers": {
        id: "enchantedslippers",
        name: "Enchanted Slippers",
        spritenum: 0,
        fling: {
            basePower: 30
        },
        onModifySpe: function (speMod) {
            return this.chain(speMod, 1.3);
        },
        onResidual: function (pokemon) {
            this.damage(pokemon.maxhp / 10);
        },
        num: -1007,
        gen: -1,
        desc: "Boosts speed by x1.3; loses 1/10 max HP after each turn."
    },
    "focuslens": {
        id: "focuslens",
        name: "Focus Lens",
        spritenum: 0,
        fling: {
            basePower: 10
        },
        onBasePowerPriority: 6,
        onBasePower: function (basePower, user, target, move) {
            if (move.category === 'Special') {
                return this.chainModify(1.1);
            }
        },
        num: -1008,
        gen: -1,
        desc: "Holder's special attacks have 1.1x power."
    },
        "jaktberry": {
        id: "jaktberry",
        name: "Jakt Berry",
        spritenum: 0,
        isBerry: true,
        naturalGift: {
            basePower: 80,
            //kept it normal
            type: "Normal"
        },
        onAfterEachBoost: function (boost, target, source) {
            if (!source || target.side === source.side) {
                return;
            }
            var statsLowered = false;
            for (var i in boost) {
                if (boost[i] < 0) {
                    statsLowered = true;
                }
            }
            if (statsLowered) {
                pokemon.eatItem();
            }
        },
        onEat: function (pokemon) {
            this.boost({def: 2, spd: 2});
        },
        num: -1009,
        gen: -1,
        desc: "If any stat is lowered by a foe, Defense and Sp. Def sharply increase. Single use."
    },
       "laiberry": {
        id: "laiberry",
        name: "Lai Berry",
        spritenum: 0,
        isBerry: true,
        naturalGift: {
            basePower: 80,
            //kept it normal
            type: "Normal"
        },
        onAfterEachBoost: function (boost, target, source) {
            if (!source || target.side === source.side) {
                return;
            }
            var statsLowered = false;
            for (var i in boost) {
                if (boost[i] < 0) {
                    statsLowered = true;
                }
            }
            if (statsLowered) {
                pokemon.eatItem();
            }
        },
        onEat: function (pokemon) {
            this.boost({spa: 2});
        },
        num: -1010,
        gen: -1,
        desc: "If any stat is lowered by a foe, Sp. Atk sharply increases. Single use."
    },
"millstone": {
	id: "millstone",
	name: "Mill Stone",
	spritenum: 0,
	fling: {
		basePower: 30
	},
	effect: {
		duration: 1,
		onAfterMoveSecondarySelf: function (source, target, move) {
			this.damage(source.maxhp / 10, source, source, this.getItem('millstone'));
			this.damage(target.maxhp / 10, target, target, this.getItem('millstone'));
		}
	},
	num: -1029,
	gen: -1,
	desc: "Damages both Pokemon by 1/10 of their max HP at the end of each turn."
},
"musicbox": {
	id: "musicbox",
	name: "Music Box",
	spritenum: 0,
	fling: {
		basePower: 60,
		status: 'slp'
	},
	onResidualOrder: 26,
	onResidualSubOrder: 2,
	onResidual: function (pokemon) {
		this.trySetStatus('slp');
	},
	num: -1030,
	gen: -1,
	desc: "At the end of every turn, this item attempts to put the holder to sleep."
},
"noniberry": {
	id: "noniberry",
	name: "Noni Berry",
	spritenum: 0,
	isBerry: true,
	naturalGift: {
		basePower: 10,
		type: "Normal"
	},
	onAfterEachBoost: function (boost, target, source) {
		if (!source || target.side === source.side) {
			return;
		}
		var statsLowered = false;
		for (var i in boost) {
			if (boost[i] < 0) {
 				statsLowered = true;
			}
		}
		if (statsLowered) {
			pokemon.eatItem();
		}
	},
	onEat: function (pokemon) {
		this.boost({atk:2});
	},
	num: -1031,
	gen: -1,
	desc: "If any stat is lowered by a foe, Attack sharply increases. Single use."
},
"racingshoes": {
	id: "racingshoes",
	name: "Racing Shoes",
	spritenum: 0,
	fling: {
		basePower: 20
	},
	onModifySpePriority: 1,
	onModifySpe: function (spe) {
		return this.chainModify(1.1);
	},
	num: -1032,
	gen: -1,
	desc: "Raises holder's speed by 10%"
},
"rasinberry": {
	id: "rasinberry",
	name: "Rasin Berry",
	spritenum: 0,
	isBerry: true,
	naturalGift: {
		basePower: 10,
		type: "Normal"
	},
	onAfterEachBoost: function (boost, target, source) {
		if (!source || target.side === source.side) {
			return;
		}
		var statsLowered = false;
		for (var i in boost) {
			if (boost[i] < 0) {
 				statsLowered = true;
			}
		}
		if (statsLowered) {
			pokemon.eatItem();
		}
	},
	onEat: function (pokemon) {
		this.boost({spe:2});
	},
	num: -1033,
	gen: -1,
	desc: "If any stat is lowered by a foe, Speed sharply increases. Single Use."
},
"simorghite": {
	id: "simorghite",
	name: "Simorghite",
	spritenum: 0,
	megaStone: "Simorgh-Mega",
	megaEvolves: "Simorgh",
	onTakeItem: function (item, source) {
		if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
		return true;
	},
	num: -1034,
	gen: -1,
	desc: "Mega-evolves Simorgh."
},
"travellersboots": {
	id: "travellersboots",
	name: "Traveller's Boots",
	spritenum: 0,
	fling: {
		basePower: 20
	},
	onDamage: function (damage, target, source, effect) {
		if (effect && (effect.id === 'stealthrock' || effect.id === 'spikes' || effect.id === 'toxicspikes' || effect.id === 'mudpuddle' || effect.id === 'icystalagmites' || effect.id === 'pointytacks')) {
			return this.chainModify(0.7);
		}
		if (!target.activeTurns) {
			return this.chainModify(0.7);
		}
	},
	num: -1035,
	gen: -1,
	desc: "Reduces damage by 70% when switching in."

},
	"flytrapite": {
		id: "flytrapite",
		name: "Flytrapite",
		spritenum: 0,
		megaStone: "Flytrap-Mega",
		megaEvolves: "Flytrap",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: -1040,
		gen: -1,
		desc: "If holder is an Flytrap, this item allows it to Mega Evolve in battle."
	},
	"waterstarterite": {
		id: "waterstarterite",
		name: "Waterstarterite",
		spritenum: 0,
		megaStone: "Waterstarter-Mega",
		megaEvolves: "waterstarter",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) return false;
			return true;
		},
		num: -1041,
		gen: -1,
		desc: "If holder is an waterstarter, this item allows it to Mega Evolve in battle."
	}

};
