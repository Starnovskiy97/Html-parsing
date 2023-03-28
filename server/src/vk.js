const { scrollPageToBottom } = require('puppeteer-autoscroll-down');

const vk = async (body, page) => {
  const heightWindow = await page.evaluate(() => {
    return +window.innerHeight;
  })

  if (body.login) {
    await page.goto(`http://vk.com`);
    await page.$eval('input[type="text"]#index_email', (el, login) => { el.value = login }, body.login);
    await page.click('button[type="submit"]');
    await page.waitForSelector('input[type="password"].vkc__TextField__input');
  }
  
  if (body.login && body.password) {
    await page.focus('input[type="password"].vkc__TextField__input');
    await page.keyboard.type(body.password, { delay: 1 });
    await page.click('button[type="submit"].vkuiButton');
    await page.waitForNavigation();
  }

  await page.goto(`${body.url}`);
  await scrollPageToBottom(page, { size: heightWindow, delay: 500 });

  const data = await page.evaluate(async () => {
    let page = []

    try {
      let values = document.querySelectorAll('div.post.page_block');

      values.forEach((item) => {
        const obj = {
          title: (item.querySelector('div.wall_post_text').innerText).split('\n')[0],
          likes: item.querySelector('div.PostButtonReactions__title').innerText || '-',
          views: item.querySelector('span._views').innerText || '-',
          createdDate: item.querySelector('a.PostHeaderSubtitle__link').innerText
        };

        page.push(obj);
      });

    } catch (e) { 
      console.log(e);
    }

    return page;
  });
  
  return data;
};

module.exports = vk;
