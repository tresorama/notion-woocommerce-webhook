const dotenv = require("dotenv");
dotenv.config();
const express = require('express');
const app = express();
const PORT = 3000;
const {getPagesFromNotionDatabase} = require('./utilities.notion');

app.use(express.json());

app.get('/', (req,res) => {
  res.send(`
  <html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <h1>Notion to Cloud Function</h1>
    <p>TODO: add woocomerce products creation insted of logging to node console.</p>
    <p>
    <button>
      <a id="log-products" href="log-products">Log Products in Node Console</a>
    </button>
    </p>
    <script>

    // UTILITIES => BROWSER API => NOTIFICATION ON PAGE
    const notifyUser = (message) => {
      const domNode = (() => {
        let el = document.querySelector(".notice");
        if (!el) {
          document.body.insertAdjacentHTML('afterbegin', '<div class="notice"></div>' ); 
        }
        return document.querySelector(".notice");
      })();
      domNode.innerHTML = message;
      const timeToDestroy = 5000;
      domNode.destroyTimeout = setTimeout(() => {
        domNode.innerHTML = "";
        clearTimeout(domNode.destroyTimeout);
      }, timeToDestroy);
    };

    // UTILITIES => FETCH
    const createQueryString = (obj) => new URLSearchParams(obj).toString();

    async function fetchData(endpoint, option = {}, responseType = 'json') {
      try {
        const response = await fetch(...[endpoint, option]);
        const responseData = await response[responseType]();
        return {
          communication_ok: true,
          response: responseData,
        }
      }
      catch (error) {
        return {
          communication_ok: false,
        }
      }
    }

    // LET'S PLAY !
      
    document.querySelector('#log-products').addEventListener( 'click', async function (e) {
      
      e.preventDefault();
      
      // SET IS LOADING
      const linkText = this.innerHTML;
      this.innerHTML = 'LOADING ....';
      
      // CALL SERVER
      const url = this.href;
      const {communication_ok, response} = await fetchData(url);
      const {success} = response || {};

      if (!communication_ok) {
        notifyUser('Connection Problem, retry !!');
      }
      else if (!success ) {
        notifyUser('Error happened, retry !!');
      }
      else {
        notifyUser('Success!!');
      }

      // REVERT LINK TEXT
      this.innerHTML = linkText;

    });
    </script>
  </body>
  </html>`);
});

app.listen(PORT, () => {
  console.log(`Server Running!`);
  console.log(`Listening on port ${PORT}`);
  console.log(`root address: http://localhost:${PORT}`);
})


async function getProducts() {
  const pages = await getPagesFromNotionDatabase(process.env.NOTION_DATABASE_ID_PRODUCT);
  return pages.map(page => ({
    name: page.properties.Name.title[0]?.plain_text,
    price: page.properties.Price.number,
    price_currency: "€"
  }));
}

async function logProducts() {
  try {
    const products = await getProducts();
    products.forEach((product) => console.log(product)); 
  } catch (error) {
    console.log(`ERROR \n ${error}`);
  }
}


app.get('/log-products', (req,res) => {
  logProducts();
  res.send({success:true});
})

