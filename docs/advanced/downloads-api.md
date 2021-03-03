---
title: Downloads API
---

Our projects are often criticized because of their sensitive nature and the problems that a censorship-free network can bring. That's why we have created `downloads.dreamnet.tech`, a service made to always offer an available download mirror to our projects.

In this document we will explain its basic operation for anyone interested.

## Base

This is the base API URL. The Query and Params apply to all the endpoints.

```
https://downloads.dreamnet.tech/v2/{project}/{version}
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
https://downloads.dreamnet.tech/v2/{project}/{version}/{filename?}?{params...}
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

DreamTime v1.5.12 - Installer - Windows:

```
https://downloads.dreamnet.tech/v2/dreamtime/v1.5.12/?platform=windows
```

DreamTime v1.5.12 - Portable - Linux - URL Only:

```
https://downloads.dreamnet.tech/v2/dreamtime/v1.5.12/?platform=ubuntu&arch=portable&text=1
```

---

## Records

This endpoint returns a JSON response with all the mirrors of the project.

```
https://downloads.dreamnet.tech/v2/{project}/{version}/records.json?{params...}
```

### Examples

DreamTime - Windows:

```
https://downloads.dreamnet.tech/v2/dreamtime/v1.5.12/records.json?platform=windows
```

DreamTime - Linux:

```
https://downloads.dreamnet.tech/v2/dreamtime/v1.5.12/records.json?platform=ubuntu&arch=portable
```

---

## Checksum

This endpoint returns a list of SHA256 checksum of the files.

```
https://downloads.dreamnet.tech/v2/{project}/{version}/checksum.sha256?{params...}
```

### Examples

DreamTime - Windows:

```
https://downloads.dreamnet.tech/v2/dreamtime/v1.5.12/checksum.sha256?platform=windows
```

DreamTime - Linux:

```
https://downloads.dreamnet.tech/v2/dreamtime/v1.5.12/checksum.sha256?platform=ubuntu&arch=portable
```