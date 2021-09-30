const dotenv = require("dotenv");
dotenv.config();

const { Client } = require("@notionhq/client")
const notion = new Client({ auth: process.env.NOTION_KEY });


/**
 * Gets page from a Notion Database.
 *
 * @returns {Promise<Array<{ pageId: string, status: string, title: string }>>}
 */
async function getPagesFromNotionDatabase(notionDatabaseId) {
  const pages = []
  let cursor = undefined

  while (true) {
    const { results, next_cursor } = await notion.databases.query({
      database_id: notionDatabaseId,
      start_cursor: cursor,
    })
    pages.push(...results)
    if (!next_cursor) {
      break
    }
    cursor = next_cursor
  }

  // console.log(`${pages.length} pages successfully fetched.`);
  
  return pages;
}


module.exports = {
  notionClient: notion,
  getPagesFromNotionDatabase,
}