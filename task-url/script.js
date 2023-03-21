// Дан произвольный url вида - https://purpleschool.ru/course/javascript
// Нужно сделать функцию, которая выводит в консоль:

// Протокол (https)
// Доменное имя (purpleschool.ru)
// Путь внутри сайта (/course/javascript)

function getUrl(url) {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

  if (!urlRegex.test(url)) {
    console.error("Invalid URL entered");
    return;
  }

  const [protocol, _, domain, ...pathParts] = url.split("/");
  const path = pathParts.join("/");

  console.log(`Protocol: ${protocol.split(":")[0]}`);
  console.log(`Domain: ${domain}`);
  console.log(`Path: /${path}`);
}

// BEST Solution
// function getUrl(url) {
//   try {
//     const myUrl = new URL(url);
//     return {
//       protocol: myUrl.protocol,
//       domain: myUrl.hostname,
//       path: myUrl.pathname
//     };
//   } catch (error) {
//     console.error(`Invalid URL: ${url}`);
//     return null;
//   }
// }

getUrl("https://purpleschool.ru/course/javascript");
