import { chromium } from 'playwright';
import path from 'path';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  page.on('pageerror', error => {
    errors.push(error.message);
  });

  const baseUrl = 'http://localhost:5174';

  console.log('Navigating to homepage...');
  await page.goto(baseUrl);
  
  await page.screenshot({ path: 'qa_screenshots/1_homepage_initial.png', fullPage: true });
  
  console.log('Waiting for cinematic reveal (3s)...');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'qa_screenshots/2_homepage_revealed.png', fullPage: true });

  console.log('Navigating to login...');
  await page.click('text=Enter as Creator').catch(() => page.goto(`${baseUrl}/login`));
  await page.waitForTimeout(500); // short transition
  await page.screenshot({ path: 'qa_screenshots/3_login.png', fullPage: true });

  console.log('Navigating to Creator Dashboard...');
  await page.goto(`${baseUrl}/creator/dashboard`);
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'qa_screenshots/4_creator_dashboard.png', fullPage: true });

  console.log('Navigating Creator internal (Discover)...');
  await page.goto(`${baseUrl}/creator/discover`);
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'qa_screenshots/5_creator_discover.png', fullPage: true });

  // Clear state for business
  await context.clearCookies();

  console.log('Navigating to login...');
  await page.goto(`${baseUrl}/login`);
  await page.waitForTimeout(1000);

  console.log('Navigating to Business Dashboard...');
  await page.goto(`${baseUrl}/business/dashboard`);
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'qa_screenshots/6_business_dashboard.png', fullPage: true });

  console.log('Navigating Business internal (Discover)...');
  await page.goto(`${baseUrl}/business/discover`);
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'qa_screenshots/7_business_discover.png', fullPage: true });

  console.log('Testing Mobile Layout (390px)...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseUrl);
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'qa_screenshots/8_mobile_homepage.png', fullPage: true });

  console.log('Testing reduced motion...');
  const contextRM = await browser.newContext({ reducedMotion: 'reduce' });
  const pageRM = await contextRM.newPage();
  await pageRM.goto(baseUrl);
  await pageRM.screenshot({ path: 'qa_screenshots/9_reduced_motion.png', fullPage: true });

  console.log('Console Errors:', errors);

  await browser.close();
  console.log('QA tests complete.');
})();
