# Path Browser Wrapper
A wrapper module to allow NodeJS `path` module to execute in the browser context.

## Description
This module is a modified wrapper around the NodeJS `path` library. *This is not a reimplementation of the path library.* The advantage is that the `path` library API is unlikely to change and any bugs in the path library itself will be fixed by an active community working on the core modules.

This module exposes the methods which work in the browser context and utilizes the same to bypass calls to `process` module which is used to, among other things, differentiate between win32 and posix.

Here's a list of methods available to use:
 * normalize
 * isAbsolute
 * join
 * dirname
 * basename
 * extname
 * format
 * parse