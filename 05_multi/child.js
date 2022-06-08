const { exec, spawn } = require('child_process');

/*
 * Create a program that shows an array of how much free space is in the main partition of your hard disk:​
 *
 * - Using df
 * - Finding which line is mounted on /System/Volumes/Data
 * - Show the ratio of used / available
 */

const child = spawn('pwd');

