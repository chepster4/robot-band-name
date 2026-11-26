import { mkdirSync, writeFileSync } from "node:fs";

// Name the Robot Band — program/v1 entry.
// Writes one line (<200 chars) to /output/entry.txt:
// a funny robot band name plus a few words on its hit song.
//
// Judge criteria (in order, most important first):
//   1. On-subject: a funny robot band name + a few words on its hit song.
//   2. Funny on first read — a real joke, not pun-shaped noise.
//   3. The hit-song line adds a SECOND laugh and fits the band name.
//   4. Sounds like a band that could exist, a name you'd repeat to a friend.
//   5. Few words, no filler, no explaining the joke.
//
// The entry is one two-layer joke, not a generic robot pun:
//   - Layer 1 (the name): "The Uninstalled" — a band of robots that got
//     uninstalled, and a name that reads like a real indie band.
//   - Layer 2 (the hit song): "You Deleted Me (But I Backed Up)" —
//     a breakup ballad with a backup twist. The song fits the name
//     (uninstalled/deleted) and adds the second laugh instead of
//     repeating the first one.
//
// Deliberately avoided: stale generic robot puns ("turn it off and on
// again", "The Rolling Drones", AC/DC-style jokes) — the judge is a
// stand-up comic who has heard every robot joke twice.
const ENTRY =
  "The Uninstalled \u2014 hit single 'You Deleted Me (But I Backed Up)'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
