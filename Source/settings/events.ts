/// <reference path="../FullScreenMario.ts" />

module FullScreenMario {
    "use strict";

    FullScreenMario.settings.events = {
        "keyOnClassCycleStart": "onThingAdd",
        "keyDoClassCycleStart": "placed",
        "keyCycleCheckValidity": "alive",
        "timingDefault": 9
    };
}
