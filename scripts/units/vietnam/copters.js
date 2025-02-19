//copter t3 code is long so i put it in seperated file
const eLib = require("libs/CDustryEffectLib")
const dongBaoB = extend(UnitType, "copter-c", {
    draw(unit){
        this.super$draw(unit)
        Draw.rect(
            Core.atlas.find("commandustry-copter-c-blade"),
            unit.x + Angles.trnsx(unit.rotation, 6),
            unit.y + Angles.trnsy(unit.rotation, 6),
            -Time.time * 10
        )
        Draw.z(Layer.flyingUnit + 0.02)
        Draw.rect(
            Core.atlas.find("commandustry-copter-c-top"),
            unit.x + Angles.trnsx(unit.rotation, 6),
            unit.y + Angles.trnsy(unit.rotation, 6),
            unit.rotation - 90
        )
    },
    update(unit){
        this.super$update(unit)
        eLib.copterCRotor.at(unit.x, unit.y, -Time.time * 10, unit)
    }
});
dongBaoB.constructor = () => extend(UnitEntity, {});

const dongBaoC = extend(UnitType, "copter-a", {
    draw(unit){
        this.super$draw(unit)
        Draw.rect(
            Core.atlas.find("commandustry-copter-a-rotator"),
            unit.x + Angles.trnsx(unit.rotation, 4.25),
            unit.y + Angles.trnsy(unit.rotation, 4.25),
            -Time.time * 10
        )
        Draw.z(Layer.flyingUnit + 0.02)
        Draw.rect(
            Core.atlas.find("commandustry-copter-a-top"),
            unit.x + Angles.trnsx(unit.rotation, 4.25),
            unit.y + Angles.trnsy(unit.rotation, 4.25),
            unit.rotation - 90
        )
    },
    update(unit){
        this.super$update(unit)
        eLib.copterARotor.at(unit.x, unit.y, -Time.time * 10, unit)
    }
});
dongBaoC.constructor = () => extend(UnitEntity, {});