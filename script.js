friendNames = ["John", "David", "Jerry", "Bob", "Sherryl"];
locationNames = ["Bedroom.", "Bathroom.", "kitchen!", "den.", "attic!", "garage.", "backyard!", "frontyard.", "hallway!", "study."];
weaponNames = ["shovel", "baseball bat", "pistol", "hatchet", "club", "dagger", "quarterstaff", "crossbow", "longbow", "Tomahawk", "revolver", "AK-47", "machine gun", "atomic bomb", "catapult", "flamethrower", "assualt rifle", "battle axe", "Bowie knife", "brass knuckles"];
var randomFriend = getFriendName();
var randomWeapon = getWeaponName();
var randomLocation = getLocationName();

for (i = 1; i < 101; i++) {
    var h3 = document.createElement("h3");


    h3.addEventListener("click", function (e) {
        var acussation = e.currentTarget.innerText.substr(11, 12);

        console.log(e.currentTarget.innerText + ": I accuse " + randomFriend(acussation) + ", with the " + randomWeapon(acussation) + " in the " + randomLocation(acussation));
    });

    h3.innerText = "Accusation " + i;
    $("body").append(h3);
}

function getFriendName() {
    var FRIEND_NAME = null;
    return function (acussation) {
        return FRIEND_NAME = friendNames[acussation % 5];
    }
}

function getWeaponName() {
    var WEAPON_NAME = null;
    return function (acussation) {
        return WEAPON_NAME = weaponNames[acussation % 20];
    }
}

function getLocationName() {
    var LOCATION_NAME = null;
    return function (acussation) {
        return LOCATION_NAME = locationNames[acussation % 10];
    }
}
