# What is This ?

Inside my Notion there is a page called ['Notion-Woocommerce-Webhook'](https://www.notion.so/Notion-Woocommerce-Webhook-a551d8c27c904904abaa34bce61231b3).
Inside that page lives a Database that contains some fake Products data.

Below the database , there is an embeded page that contains a 'Log Products' link, used to simulate a WebHook Trigger ( because Notion does not provide this feature yet).

When clicked , the link call an API route of a localhost Node server, bridged over the web via ngrok, that console log the Notion Database Table.

TODO: add woocomerce products creation instead of logging products to console.

## Folder Structure

`cloud-function` contains a Node Server that:

- serve a page at '/' that show the 'Log Products' Trigger
- serve an API route that get called when 'Log Products' is clicked, route is at 'log-products'

`wp` contains "Local Flywheel Instances" of a wordpress site. ***NOT USED FOR NOW***
