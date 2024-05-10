const cheerio = require("cheerio");
const { bodydata } = require("./dotnet.js")

const $ = cheerio.load(bodydata)
const versions = [];

$('table.table tbody tr').each((index, element) => {
    const versionNumber = $(element).find('td').eq(0).text().trim();
    const startDate = $(element).find('td').eq(1).find('local-time').attr('datetime');
    const endDate = $(element).find('td').eq(2).find('local-time').attr('datetime');

    versions.push({
        versionNumber: versionNumber,
        startDate: startDate,
        endDate: endDate
    });
});

console.log(versions)
