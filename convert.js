import csv from "csvtojson"
import fs from "fs"

const inputFile = "src/data/hospitals.csv"
const outputFile = "src/data/hospitals.json"

csv()
  .fromFile(inputFile)
  .then((jsonArray) => {

    fs.writeFileSync(outputFile, JSON.stringify(jsonArray, null, 2))

    console.log("✅ Conversion complete!")
    console.log("JSON file created at:", outputFile)
    console.log("Total hospitals:", jsonArray.length)

  })
  .catch((err) => {
    console.error("❌ Error converting CSV:", err)
  })