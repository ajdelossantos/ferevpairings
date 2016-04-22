var hpBoon = {
    txtVal: "Robust (HP)",
    strMod: 1,
    magMod: 1,
    sklMod: 0,
    spdMod: 0,
    lckMod: 2,
    defMod: 2,
    resMod: 2,
    hpGR: 15,
    strGR: 0,
    magGR: 0,
    sklGR: 0,
    spdGR: 0,
    lckGR: 0,
    defGR: 5,
    resGR: 5
}
var hpBane = {
    txtVal: "Sickly (HP)",
    strMod: -1,
    magMod: -1,
    sklMod: 0,
    spdMod: 0,
    lckMod: -1,
    defMod: -1,
    resMod: -1,
    hpGR: -10,
    strGR: 0,
    magGR: 0,
    sklGR: 0,
    spdGR: 0,
    lckGR: 0,
    defGR: -5,
    resGR: -5
}
var strBoon = {
    txtVal: "Strong (Str)",
    strMod: 4,
    magMod: 0,
    sklMod: 2,
    spdMod: 0,
    lckMod: 0,
    defMod: 2,
    resMod: 0,
    hpGR: 0,
    strGR: 15,
    magGR: 0,
    sklGR: 5, 
    spdGR: 0,
    lckGR: 0,
    defGR: 5,
    resGR: 0
}
var strBane = {
    txtVal: "Weak (Str)",
    strMod: -3,
    magMod: 0,
    sklMod: -1,
    spdMod: 0,
    lckMod: 0,
    defMod: -1,
    resMod: 0,
    hpGR: 0,
    strGR: -10,
    magGR: 0,
    sklGR: -5,
    spdGR: 0,
    lckGR: 0,
    defGR: -5,
    resGR: 0
}
var magBoon = {
    txtVal: "Clever (Mag)",
    strMod: 0,
    magMod: 4,
    sklMod: 0,
    spdMod: 2,
    lckMod: 0,
    defMod: 0,
    resMod: 2,
    hpGR: 0,
    strGR: 0,
    magGR: 20,
    sklGR: 0,
    spdGR: 5,
    lckGR: 0,
    defGR: 0,
    resGR: 5
}
var magBane = {
    txtVal: "Dull (Mag)",
    strMod: 0,
    magMod: -3,
    sklMod: 0,
    spdMod: -1,
    lckMod: 0,
    defMod: 0,
    resMod: -1,
    hpGR: 0,
    strGR: 0,
    magGR: -15,
    sklGR: 0,
    spdGR: -5,
    lckGR: 0,
    defGR: 0,
    resGR: -5
}
var sklBoon = {
    txtVal: "Deft (Skl)",
    strMod: 2,
    magMod: 0,
    sklMod: 4,
    spdMod: 0,
    lckMod: 0,
    defMod: 2,
    resMod: 0,
    hpGR: 0,
    strGR: 5,
    magGR: 0,
    sklGR: 25,
    spdGR: 0,
    lckGR: 0,
    defGR: 5,
    resGR: 0
}
var sklBane = {
    txtVal: "Clumsy (Skl)",
    strMod: -1,
    magMod: 0,
    sklMod: -3,
    spdMod: 0,
    lckMod: 0,
    defMod: -1,
    resMod: 0,
    hpGR: 0,
    strGR: -5,
    magGR: 0,
    sklGR: -20,
    spdGR: 0,
    lckGR: 0,
    defGR: -5,
    resGR: 0
}
var spdBoon = {
    txtVal: "Quick (Spd)",
    strMod: 0,
    magMod: 0,
    sklMod: 2,
    spdMod: 4,
    lckMod: 2,
    defMod: 0,
    resMod: 0,
    hpGR: 0,
    strGR: 0,
    magGR: 0,
    sklGR: 5,
    spdGR: 15,
    lckGR: 5,
    defGR: 0,
    resGR: 0
}
var spdBane = {
    txtVal: "Slow (Spd)",
    strMod: 0,
    magMod: 0,
    sklMod: -1,
    spdMod: -3,
    lckMod: -1,
    defMod: 0,
    resMod: 0,
    hpGR: 0,
    strGR: 0,
    magGR: 0,
    sklGR: -5,
    spdGR: -10,
    lckGR: -5,
    defGR: 0,
    resGR: 0
}
var lckBoon = {
    txtVal: "Lucky (Lck)",
    strMod: 2,
    magMod: 2,
    sklMod: 0,
    spdMod: 0,
    lckMod: 4, 
    defMod: 0,
    resMod: 0,
    hpGR: 0,
    strGR: 5,
    magGR: 5,
    sklGR: 0,
    spdGR: 0,
    lckGR: 25,
    defGR: 0,
    resGR: 0
}
var lckBane = {
    txtVal: "Unlucky (Lck)",
    strMod: -1,
    magMod: -1,
    sklMod: 0,
    spdMod: 0,
    lckMod: -3,
    defMod: 0,
    resMod: 0,
    hpGR: 0,
    strGR: -5,
    magGR: -5,
    sklGR: 0,
    spdGR: 0,
    lckGR: -20,
    defGR: 0,
    resGR: 0
}
var defBoon = {
    txtVal: "Sturdy (Def)",
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 2,
    defMod: 4,
    resMod: 2,
    hpGR: 0,
    strGR: 0,
    magGR: 0,
    sklGR: 0,
    spdGR: 0,
    lckGR: 5,
    defGR: 10,
    resGR: 5
}
var defBane = {
    txtVal: "Fragile (Def)",
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: -1,
    defMod: -3,
    resMod: -1,
    hpGR: 0,
    strGR: 0,
    magGR: 0,
    sklGR: 0,
    spdGR: 0,
    lckGR: -5,
    defGR: -10,
    resGR: -5
}
var resBoon = {
    txtVal: "Calm (Res)",
    strMod: 0,
    magMod: 2,
    sklMod: 0,
    spdMod: 2,
    lckMod: 0,
    defMod: 0,
    resMod: 4,
    hpGR: 0,
    strGR: 0,
    magGR: 5,
    sklGR: 0,
    spdGR: 5,
    lckGR: 0,
    defGR: 0,
    resGR: 10
}
var resBane = {
    txtVal: "Excitable (Res)",
    strMod: 0,
    magMod: -1,
    sklMod: 0,
    spdMod: -1,
    lckMod: 0,
    defMod: 0,
    resMod: -3,
    hpGR: 0,
    strGR: 0,
    magGR: -5,
    sklGR: 0,
    spdGR: -5,
    lckGR: 0,
    defGR: 0,
    resGR: -10
}
var noBB = {
    txtVal: "-",
    strMod: 0,
    magMod: 0,
    sklMod: 0,
    spdMod: 0,
    lckMod: 0,
    defMod: 0,
    resMod: 0,
    hpGR: 0,
    strGR: 0,
    magGR: 0,
    sklGR: 0,
    spdGR: 0,
    lckGR: 0,
    defGR: 0,
    resGR: 0
}
var boonArr = [noBB, hpBoon, strBoon, magBoon, sklBoon, spdBoon, lckBoon, defBoon, resBoon];
var baneArr = [noBB, hpBane, strBane, magBane, sklBane, spdBane, lckBane, defBane, resBane];
/* accepts boon object and returns array of boon's growth rates */
function getBoonGRArr(boon) {
    return [boon.hpGR, boon.strGR, boon.magGR, boon.sklGR, boon.spdGR, boon.lckGR, boon.defGR, boon.resGR];
}
/* accepts boon object and returns array of boon's mods */
function getBoonModArr(boon) {
    return ["-", boon.strMod, boon.magMod, boon.sklMod, boon.spdMod, boon.lckMod, boon.defMod, boon.resMod];
}
/* accepts bane object and returns array of bane's grs */
function getBaneGRArr(bane) {
    return [bane.hpGR, bane.strGR, bane.magGR, bane.sklGR, bane.spdGR, bane.lckGR, bane.defGR, bane.resGR];
}
/* accepts bane object and returns array of bane's mods */
function getBaneModArr(bane) {
    return ["-", bane.strMod, bane.magMod, bane.sklMod, bane.spdMod, bane.lckMod, bane.defMod, bane.resMod];
}