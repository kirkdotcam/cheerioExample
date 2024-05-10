const wiki = require("wikipedia")

async function getdata  () {
  const page = await wiki.page(".NET")
  const tables = await page.tables()
  console.log(tables[0])
}

getdata()
