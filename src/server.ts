/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { WebHost } from '@microsoft/mixed-reality-extension-sdk';
import { resolve as resolvePath } from 'path';
import ScoreBoard from './app';

process.on('uncaughtException', err => console.log('uncaughtException', err));
process.on('unhandledRejection', reason => console.log('unhandledRejection', reason));

// Start listening for connections, and serve static files
const server = new WebHost({
    baseDir: resolvePath(__dirname, '../public')
    // set BASE_URL in the environment, please
});

// Handle new application sessions
server.adapter.onConnection(context => new ScoreBoard(context, server.baseUrl));
