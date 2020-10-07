#!/usr/bin/env node
import greetUser from '../src/cli.js';

greetUser().catch(() => console.log('\nGood bye'));
