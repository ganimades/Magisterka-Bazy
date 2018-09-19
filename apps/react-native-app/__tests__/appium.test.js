import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: '../react-native-app/android/app/build/outputs/apk/app-release.apk', // relative to root of project
  timout: 50000
};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000); // wait for app to load
});

test('appium renders', async () => {
  const testview = await driver.waitForElementByAccessibilityId('testview');
  await driver.elementById('button').click();
  const foo = await driver.waitForElementByXPath("/descendant::android.widget.TextView[@accessibilityId='task']", 50000);
  // const foo = await driver.waitForElementByXPath('//android.widget.TextView[4]', 50000);

  // const foobar = await driver.waitForElementByXPath(`/descendant::ReactTextView`, 50000);

  console.log('success');
});

// http://www.software-testing-tutorials-automation.com/2015/10/ui-automator-viewer-get-android-app.html