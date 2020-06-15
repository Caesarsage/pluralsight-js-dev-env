/*we can now use json schema faker to generate some monk data using the monkdataschema we create and write it to a file
. This generate a mock data for local development , This way you dont have to point to an actual API, nut you can enjoy 
realistic, but randomized data, and rapidly page loads due to local, static data.*/

/*eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, function (err) {
    if (err) {
        return console.log(chalk.red(err))
    } else {
        console.log(chalk.green("Mock data generated."));
    }
});