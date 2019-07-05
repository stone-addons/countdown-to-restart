import { MySystem } from "./system";
import { addMinutes, distanceInWordsToNow, isPast } from "date-fns";

const restartTime = addMinutes(new Date(), 3)

const system = server.registerSystem<MySystem>(0, 0);
system.initialize = function() {
  server.log("Clock Mod Loaded");
  server.log( distanceInWordsToNow(restartTime))
};

let last = ""

system.update = function() {
  const msg = distanceInWordsToNow(restartTime, { includeSeconds: true });
  if (msg != last) {
    last = msg;
    system.broadcastMessage(`Server will restart in ${last}`);
    if (isPast(restartTime)) {
      system.stop();
      system.update = null;
    }
  }
}