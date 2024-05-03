const bot = require(__dirname + '/lib/tmd')
const { VERSION } = require(__dirname + '/config')

const start = async () => {
    Debug.info(`Starting Raganork-bot-md ${VERSION}`)
  try {
    await bot.init()
    //bot.logger.info('⏳ Database syncing!')
    await bot.DATABASE.sync()
    await bot.connect()
  } catch (error) {
    Debug.error(error);
    start();
  }
}
start();
