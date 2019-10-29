const { execSync, exec } = require("child_process");
const path = require("path");
const puppeteer = require("puppeteer");
const waitPort = require("wait-port");

execSync("yarn build");
exec("yarn sirv start dist --port 1982");

const desktopCVPath = path.resolve(__dirname, "cv-desktop.pdf");
const mobileCVPath = path.resolve(__dirname, "cv-mobile.pdf");

(async () => {
  await waitPort({ port: 1982 });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:1982");

  await page.pdf({
    path: desktopCVPath,
    margin: {
      top: 24,
      bottom: 24,
      left: 24,
      right: 24
    }
  });

  await page.evaluate(() => {
    document.documentElement.style.fontSize = "32px";
  });
  await page.pdf({
    path: mobileCVPath,
    margin: {
      top: 48,
      bottom: 48,
      left: 48,
      right: 48
    }
  });

  await browser.close();
  process.exit(0);
})();
