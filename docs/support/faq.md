---
title: FAQ
---

### Will there be a Men/Anime version?

**Yes**, it will be difficult but we want to achieve it.

Our goal is to take this technology to all possible places, however developing optimal datasets to implement these versions may require months of work each.

---

### Android/iOS support?

DreamTime has very high hardware requirements so a native mobile application will not be possible.

However for **DreamTime v2** we plan to offer the ability to use the power of your PC from any device with a web browser or to purchase real money credits to nude photos using the same interface.

🌟 Meanwhile, we recommend using the versions in [Google Colab](/docs/guide/google-colab).

---

### Apple Silicon support?

Short answer: It does not depend on us, but it will be implemented as soon as possible.

DreamTime depends on Github Actions to compile the code to different platforms, support for Apple Silicon and others depends on them and is currently in the [planning phase](https://github.com/actions/virtual-environments/issues/2486#issuecomment-782034281) for implementation.

---

### 32-bit support?

32-bit operating systems are becoming obsolete and support for it is highly unlikely.

---

### AMD GPU's support?

Short answer: It does not depend on us.

The algorithm uses PyTorch as the framework for the A.I., the support for AMD GPU's depends on them and for now it is in very experimental phase and only available for Linux. [See: Building PyTorch for ROCm](https://rocmdocs.amd.com/en/latest/Deep_learning/Deep-learning.html#pytorch)

---

### How can I increase the resolution of the photos?

- **Use the `Overlay` scale method:** This method allows you to nudify an area of the photo and keep the rest in their original size.
- **Use Waifu2X:** The most recent versions of DreamTime include support for Waifu2X and perform super-scaling by activating a checkbox.
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

- Free up RAM closing other programs.
- Upgrade your hardware.

---

### Error: `uploadMode` and/or `disableHardwareAcceleration`

Known issue when upgrading from version 2.0 (or earlier) to a new version. DreamTime was unable to update the user settings file with additional options required by the new version.

**Solution:**

Open `%appdata%/dreamtime` (Windows) or click on the `App` button in the `About` section and delete the `settings.json` file, then open DreamTime again.

---

### Installation aborted

Known issue that can occur when installing or updating with the Windows installer.

**Solutions:**

- Install [Bulk Crap Uninstaller](https://www.bcuninstaller.com/) and remove any trace of DreamTime, then re-install.
- Uninstall DreamTime and try to re-install with a different method (`Only for me` or `For all users`)
- Use the portable version, extract and go.

---

### Permission issues in Linux

Known issue that can occur when upgrading on Linux using Snap.

**Solutions:**

- Uninstall the previous version and perform a clean installation. (Make a backup of your nudes)
- Use the portable version, extract and go.

---

### Updater: Installation failed.

This problem means that the updater could not extract the content of the update file on your system.

**Solutions:**

- **Check that the file is not corrupt:** It is possible that due to a problem with your connection or the server the updater ended up downloading a corrupt file. This can be confirmed if you find the text "FILE_ENDED" or similar in the error. Please make sure you have a stable internet connection or change the download protocol to `IPFS or Torrent`.
- Make sure that DreamTime has write permissions on the `Downloads` folder of your operating system and the folder of the component to install.
- Make sure you have enough space on your disk, the download of components is usually very large (More than 3GB in some systems).
- If all else fails, you may need to [download and install the update manually](/docs/guide/components).

---

### Updater: INTERNAL ERROR!

This problem means that DreamTime has not been able to validate that the component is working correctly and it is very possible that you need help to diagnose and fix the error.

Please visit [our chat](https://chat.dreamnet.tech) and post all the error message that appears in the black box.

:::info
If you are using **Windows** please make sure you don't have the following file: `C:\Windows\System32\libiomp5md.dll` if so, delete or rename it and restart DreamTime.
:::

---

### Dedicated VRAM

If you are using GPU as a processing device, please note that the nudification algorithm can only use the dedicated VRAM of your GPU. Shared VRAM is too slow and therefore does not count in the total memory, this behavior cannot be changed.

![](/img/previews/task-manager.png)