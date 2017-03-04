# log-reject

Log an error and carry on rejecting the Promise.

# Installation

```
npm install --save log-reject
```

# Usage

Instead of doing:

```
myPromise
.then(something)
.then(somethingElse)
.catch((error) => {
    console.log(error);
    return Promise.reject(error);
});
```

Now you can do the much better:

```
const logReject = require('log-reject');

myPromise
.then(something)
.then(somethingElse)
.catch(logReject);
```

That's pretty much it.
But wait, what's that you say? You want to log some message string as well with your error?
Don't worry, `log-reject` has you covered!
This:

```
myPromise
.then(something)
.then(somethingElse)
.catch((error) => {
    console.log('TERRIBLE MISTAKE:', error);
    return Promise.reject(error);
});
```

is the same as this:

```
const logReject = require('log-reject');

myPromise
.then(something)
.then(somethingElse)
.catch(logReject.withMessage('TERRIBLE MISTAKE:'));
```

Isn't that beautiful?