use guitars_owned;
db.dropDatabase();

db.guitars.insert([
  {
    make: "Ibanez",
    model: "RGA32",
    year: "2009"
  },
  {
    make: "Sigma",
    model: "S000M-15",
    year: "2012"
  },
]);
