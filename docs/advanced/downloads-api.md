---
title: Downloads API
---

In order to ensure that our projects can be easily downloaded publicly we have created a download server (`d.opendreamnet.com`) that offers the most reliable mirror to our projects.

In this document we will explain its basic operation.

## Base

This is the base API URL. The `query` and `params` apply to all the endpoints.

```
https://d.opendreamnet.com/v2/{project}/{version}
```

Users on the **Tor network** should use this url instead:

```
http://ezzp7n7ppihoeuj2dlhfwu7qmfpjqp6vc6dvns5uceoyxd2dwr6n44id.onion/downloads/v2/{project}/{version}
```

### Query

- `project`: Required. Name of the project. It is usually the name in lower case. 
  - Example: `dreamtime, dreampower, waifu, checkpoints`
- `version:` Required. The version to download, must begin with "v".
  - Example: `v1.5.12`
 
### Params

- `platform`: Optional. Basically the operating system.
  - Example: `windows, linux, macos`
- `arch`: Optional. 
  - Example: `installer, portable`

---

## Download

This endpoint offers a redirection to an available download mirror.

```
https://d.opendreamnet.com/v2/{project}/{version}/{filename?}?{params...}
```

### Query

- `filename:` Optional. The name of the file. It can be anything (Except: `records.json` and `checksum.sha256`) and does not affect the download.

### Params

- `format`: Optional. 
  - Example: `exe, zip, 7z, AppImage, rpm, dmg`
- `type`: Optional.
  - Example: `http, ipfs`
- `text`: Optional. If included, the response will be the url in text instead of a redirect.

### Examples

DreamTime v1.6.2 - Installer - Windows:

```
https://d.opendreamnet.com/v2/dreamtime/v1.6.2/?platform=windows
```

DreamTime v1.6.2 - Portable - Linux - URL Only:

```
https://d.opendreamnet.com/v2/dreamtime/v1.6.2/?platform=lionux&arch=portable&text=1
```

---

## Records

This endpoint returns a JSON response with all the mirrors of the project.

```
https://d.opendreamnet.com/v2/{project}/{version}/records.json?{params...}
```

### Examples

DreamTime v1.6.2 - Installer - Windows:

```
https://d.opendreamnet.com/v2/dreamtime/v1.6.2/records.json?platform=windows
```

DreamTime v1.6.2 - Portable - Linux:

```
https://d.opendreamnet.com/v2/dreamtime/v1.6.2/records.json?platform=linux&arch=portable
```

---

## Checksum

This endpoint returns a list of SHA256 checksum of the files.

```
https://d.opendreamnet.com/v2/{project}/{version}/checksum.sha256
```

### Examples

DreamTime v1.6.2:

```
https://d.opendreamnet.com/v2/dreamtime/v1.6.2/checksum.sha256
```

---

## Latest

This endpoint returns the latest version available.

```
https://d.opendreamnet.com/v2/{project}/latest.txt
```

### Params

- `public`: Optional. If included, the latest version available to the public will be returned.

### Examples

DreamTime:

```
https://d.opendreamnet.com/v2/dreamtime/latest.txt?public=1
```