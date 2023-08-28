# Dashlog

Official wrapper over the [dashlog.app](https://dashlog.app) api

```bash
npm install dashlog
```

```javascript
import { createDashlog } from "dashlog";

const dash = createDashlog("<YOUR-API-KEY>");

const response = await dash.log({
  project: "MyProject",  // string - required
  channel: "Users",  // string - required

  title: "New User",                           // string - required
  description: "John Doe created an account",  // string - optionnal

  data: {                         // Record<string, string | number | boolean> - optionnal
    email: "john.doe@dashlog.app",  // Values can be
    username: "@johndoe",           // strings,
    age: 29,                        // numbers,
    premium: true,                  // or booleans
  },

  notify: true,  // boolean - optionnal - send log by email if true
});

console.log(response);  // { status: 200, message: 'log added successfully' }
```
