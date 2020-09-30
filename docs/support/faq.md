---
title: FAQ
---

### Will there be a Men/Anime version?

**Yes**, it will be difficult but we want to achieve it.

Our goal is to take this technology to all possible places, however developing optimal datasets to implement these versions may require months of work each.

---

### Will there be a version for Android/iOS?

Yes, but not in the form of a native application.

The [minimum requirements](/docs/installation#requirements) are very high even for a PC, running DreamPower/DeepNude natively on a mobile device could cause it to stop responding completely.

The alternative is to create a version that can be run from a web browser, a cloud version that uses servers for photo processing, however using this service will not be free. We will try to make this version as cheap as possible and with all possible payment methods.

🌟 Meanwhile, we recommend using the versions in [Google Colab](/docs/installation#releases) that will allow you to use DreamPower from a mobile device or a PC that does not meet the minimum requirements.

---

### How can I increase the resolution of the photos?

- **Use the `Overlay` scale method:** This option is found in the global or photo settings, this scaling method allows to perform the nudification without changing the original resolution of the photo.
- **Use a scale algorithm:** There are other AIs capable of photo super-scaling and noise reduction. For example:
  - [waifu2x](http://waifu2x.udp.jp/)
  - [waifu2x-caffe](https://github.com/lltcggie/waifu2x-caffe/releases)
  - [Let's Enhance](https://letsenhance.io/)
  - [BigJPG](https://bigjpg.com/)
  - [Gigapixel AI](https://topazlabs.com/gigapixel-ai/)

---

### Can I share the photos generated with DreamTime/DreamPower?

❌ **We do not recommend it at all.**

DreamTime and DreamPower are applications intended for private adult entertainment, the photos you generate should not leave your device **unless you have authorization to do so**.

We are totally against the use of our applications to carry out malicious acts or harm to another person, however we also disclaim any responsibility for the use of them.

Keep in mind that using our applications incorrectly may make it more difficult to continue improving this technology.


---

### Are my photos uploaded to the Internet?

**No.**

We fully respect the privacy of our users, none of the photos you nudify using DreamTime are uploaded to the Internet even when activating all telemetry options.

The only anonymous information that we send to our servers is:

- DreamTime version you use.
- Operating system.
- GPU.
- CPU.
- RAM.

We use this information to create anonymous statistics that will help us improve DreamTime and DreamPower.

You can change additional telemetry preferences in DreamTime settings.

---
  
## Problems

### Problem downloading DreamPower/Checkpoints.

Depending on several factors, the updater may have problems when downloading or installing any of the required components.

**Solution:**

You must download and/or install the component manually, you can get more information [here](/docs/guide/updater#manual-update).

---

### The application freezes.

Until now we only have reports that this occurs in devices that does not meet the [minimum requirements](/docs/installation#requirements), in these cases we cannot offer technical assistance beyond:

- Close all the programs you can to free RAM.
- Upgrade your hardware. 💻

---

### Error: `uploadMode` and/or `disableHardwareAcceleration`

Known issue when upgrading from version 2.0 (or earlier) to a new version. DreamTime was unable to update the user settings file with additional options required by the new version.

**Solution:**

Open `%appdata%/dreamtime` (Windows) or click on the `App` button in the `About` section and delete the `settings.json` file, then open DreamTime again.

---

### Installation aborted

Known issue when installing a new version.

**Solutions:**

- Install [Bulk Crap Uninstaller](https://www.bcuninstaller.com/) and remove any trace of DreamTime, then re-install.
- Uninstall DreamTime and try to re-install in both modes (`Only for me` or `For all users`)
- Use the portable version, extract and go.


