const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/mongoose-population");

solarSchema = new Schema({
  starName: String,
  planets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
});

planetSchema = new Schema({
  name: String,
  system: { type: Schema.Types.ObjectId, ref: "Solar" },
  visitors: [{ type: Schema.Types.ObjectId, ref: "Visitor" }],
});

visitorSchema = new Schema({
  name: String,
  homePlanet: { type: Schema.Types.ObjectId, ref: "Planet" },

  visitedPlanets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
});

const Solar = mongoose.model("Solar", solarSchema);
const Planet = mongoose.model("Planet", planetSchema);
const Visitor = mongoose.model("Visitor", visitorSchema);

// s1 = new Solar({ starName: "s1", planets: [] });
// s2 = new Solar({ starName: "s2", planets: [] });
// s3 = new Solar({ starName: "s3", planets: [] });

// v1 = new Visitor({ name: "v1", visitedPlanets: [] });
// v2 = new Visitor({ name: "v2", visitedPlanets: [] });
// v3 = new Visitor({ name: "v3", visitedPlanets: [] });

// p1 = new Planet({ name: "p1", visitors: [], system: s1 });
// p2 = new Planet({ name: "p2", visitors: [], system: s2 });
// p3 = new Planet({ name: "p3", visitors: [], system: s3 });

// s1.planets.push(p2);
// v1.visitedPlanets.push(p3);
// p1.visitors.push(v2);

// s2.planets.push(p1);
// v2.visitedPlanets.push(p3);
// p3.visitors.push(v1);

// s1.save();
// s2.save();
// s3.save();

// p1.save();
// p2.save();
// p3.save();

// v1.save();
// v2.save();
// v3.save();

//1-Find a visitor’s list of visited planets
// Visitor.find({})
//   .populate("visitedPlanets")
//   .exec(function (error, planet) {
//     console.log(planet);
//   });

//2-Find all the visitors on a planet
// Planet.find({})
//   .populate({ path: "visitors", populate: { path: "visitedPlanets" } })
//   .exec(function (error, planets) {
//     planets.forEach((planet) => {
//       console.log("Visitors for " + planet.name + " is:");
//       console.log(planet.visitors);
//       console.log("-----------------------");
//     });
//   });

//3-Find all the visitors in a system (subdocuments!)
// Solar.find({})
//   .populate({ path: "planets", populate: { path: "visitors" } })
//   .exec(function (error, systems) {
//     systems.forEach((system) => {
//       system.planets.forEach((plant) => {
//         console.log(plant.visitors);
//       });
//     });
//   });
