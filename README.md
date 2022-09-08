# Native messaging example

Firefox extensions native messaging example in js


## Steps

- Update `app/ping_pong.json` to point to the absolute path for `./app/ping_pong.js`, wherever you placed it

- Copy the [native manifest](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests) to the Mozilla dir. Example for linux:  

  ```sh
  $ cp ./app/ping_pong.json ~/.mozilla/native-messaging-hosts/
  ```

- Load the extension (select the `manifest.json` file)

- Click `Inspect` on the extension, and hit the browser action button to see the `ping`/`pong!` in the inspector console
