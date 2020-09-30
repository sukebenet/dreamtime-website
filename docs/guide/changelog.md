---
title: Changelog
---

## v1.5.7

### 🔨 Fixes

- Fixed: `Cannot read property 'trim' of undefined` on startup.
- Fixed: IPFS did not start on some systems.

### 💪 Improvements

- Now different settings options contain tooltips with detailed help information.
- Videos no longer play in the queuebar for performance reasons.
- Nudifying a video shows the progress in number of frames.
- The way the `Per run` options are presented has been improved.
- New `Changelog` page in `About -> DreamTime`.
- Some improvements in texts and design.

### 🐧 Linux Users

DreamTime is officially on the [Snap Store](https://snapcraft.io/dreamtimetech). Now it is possible to install and update using the commands:

`sudo snap install dreamtimetech` and `sudo snap refresh dreamtimetech`

---

## v1.5.6

### ✨ Features

- **Update protocols:** Added IPFS and Torrent download protocols for component updates, this allows users with unstable or slow connections to download the big files more reliably and avoid errors during installation.
- **Reset settings:** Added a button in settings to restore options to their default values

### 💪 Improvements

- "Read-only" custom masks now show the disabled "Generate" button with a tooltip indicating that the next mask should be used.
- Added status message in the run box to indicate which algorithm is processing the photo.
- Now it is also saved if the window has been maximized and restores this state when starting the application.
- Tooltips shows faster.
- The `Use Python` option has been removed. To use Python in developer mode you need to declare the variable env `POWER_PYTHON`, optionally the value can be the Python bin path.

---

## v1.5.5

### 🔨 Fixes

- Fixed #182: In case DreamPower or Waifu2X have an internal error or their information could not be fetched from Github, a notification with detailed information of the problem will be displayed instead of entering a "compability error" loop or an error related to `getPath` when clicking on the Update button. 
- Fixed: The checkpoints updater downloaded the file without the `.zip` extension resulting in the installation failing on some systems.
- Fixed: The DreamTime updater will now open the folder with the new downloaded version instead of failing on some systems.
- Fixed: An specific area in the top bar prevents resizing the window.
- Fixed: Image size and compression options are not handled correctly when in `Minimal` or `Simple` mode.

### 💪 Improvements

- Minor improvements to the design.
- Now some notifications (like the one for updates) can be closed and hidden.
- DreamPower error messages have been improved in some cases by offering links for a possible solution.
- Added buttons to go backwards or forwards in navigation.
- The window dimensions are now saved in the settings and restored at every start.

---

## v1.5.4

### 🔨 Fixes

- Fixed: Some photos were not updated in real time on Mac OS.
- Fixed: Changing from `Advanced Mode` to `Normal` produced an error.
- Fixed: Permissions are now set after the installation of DreamPower and Waifu2X avoiding getting into a `compatibility error` loop.
- Fixed: Sometimes an error occurred when using the Crop Tool or Custom masks related to a non-existent folder.
- Fixed: The ability to "add to queue" photos in advanced mode has been removed. Previously this caused an error related to `run undefined`
- Fixed: The Waifu2X Updater always downloaded the GPU version even if you are not using GPU.

### 💪 Improvements

- CUDA 10.2 requirement to use Waifu2X is better highlighted. A button has been added to the installation on the "About" page.
- More information is provided on how to start in the advanced mode, a button has been added to the guide.
- Location folders tooltip now shows the complete path.

---

## v1.5.3

### 🔨 Fixes

- Fixed: Internal problems during startup if DreamPower is not working properly.
- Fixed: Occasionally the DreamPower update failed.
- Fixed: Error when deleting the files from custom masks folder.
- Removed: Windows Media Feature Pack requirement check.

### ✨ Features

- **Image Size**: New option. Allows you to set the photo size for scale. Larger sizes requires more RAM and can produce less satisfactory results.
- **Compression**: New option. Allows to compress the photo before the nudification to save RAM.
- Added: `Show terminal` button in custom masks mode.

---

## v1.5.2

### 🔨 Fixes

- Fixed: Update notifications when the component has not been installed yet.
- Fixed: The updater requests to downgrade components when there is no stable internet connection.
- Fixed: Error when deleting photos from the "Uncategorized" folder.
- Fixed: Possible UI problems on the "My Photos" page when deleting the photos.
- Fixed: The portable version save the application files in the AppData folder of the operating system instead of the folder where it was installed.
- Fixed: Multiple instances of DreamTime could be opened causing performance issues.

---

## v1.5.1

### 🔨 Fixes

- Fixed: Crash caused by a problem loading the application icon.
- Fixed: Updater may name the downloaded file incorrectly.
- Fixed: Installer updater downloads the portable version.

---

## v1.5.0

### 🔨 Fixes

- Fixed: The option `CPU Cores` did not show real information about its funcionality.

### ✨ Features

- **Waifu2X**: New optional algorithm. Upscale and denoise fake nudes giving higher resolution photos and sometimes higher quality.
- **My Photos**: New page. All the photos you have nudified in one place.
- **Video support**: Nudify `.mp4` and `.webm` videos. Added support for Instagram videos too!

#### Settings

- **Allow duplicates**: New option. When activated it allows you to upload the same photo several times. This can be useful to apply different preferences on the same photo.
- **Show Ads**: New option. When activated it shows 300x250 DreamNet ads at the bottom of the menu. By being interested in an advertisement you support the development of the application.
- **Show Tips**: New option. When activated it shows help tips at the bottom of the menu.
- **Preferences Mode**: New option. Allows you to increase or decrease the number of options available for photos.
  - **Minimal**: Only options for body personalization. Everything will be adjusted to make the process totally automatic.
  - **Simple**: Same as Minimal. Allows you to change the Scale mode. Set it to Crop and you will have the DeepNude experience.
  - **Normal**: All options available, this is the original DreamTime experience.
  - **Advanced**: Custom masks mode. The results interface changes to show each mask, this mode requires time and experience making manual modifications to the photos but can improve the results dramatically.
- **Color Padding**: New scale method. Adds a mask to the back of the photo to avoid the color change that occurs during nudification, however it can reduce the quality of the fake nude in some photos.
- **Color Padding Removal**: New option. Only visible when Color Padding is selected. When activated DreamTime automatically removes the background mask from the photo, leaving only the fake nude.
- **Share**: New section. Have you found the perfect preferences for a photo? Generate an ID and share it, users will now be able to import your preferences easily.
- **DevTools**: Button added in the Application section to open the developer tools and logs.

### 💪 Improvements

- **Design**: A cleaner and easier to understand interface.
- **Editor**: The photo editor menu are now on the left side to prevent them from collapsing with the photo.
- **Crop, Overlay and Color Padding Tools**: Instructions have been removed and placed in a tooltip giving more space to the tool.
- Renamed the following scale methods:
  - Scale and Crop -> Automatic Crop
  - Scale and Padding -> Automatic Padding
  - Fixed -> Automatic Resize


### 🧠 DreamPower

This version is compatible with DreamPower v1.2.6 onwards, you can see the [changelogs here](https://github.com/dreamnettech/dreampower/releases).

---

## v1.4.6

[![GitHub Releases](https://img.shields.io/github/downloads/dreamnettech/dreamtime/v1.4.6/total)](https://github.com/dreamnettech/dreamtime/releases/tag/v1.4.6)

### 🔨 Fixes

- Fixed: Application closes with the error `Certificate expired` when using the updater.
- Fixed: Installer updater downloads the portable version.
- Fixed: Updater tries to download the latest version of the components even if it is not compatible with DreamTime.

---

## v1.4.5

[![GitHub Releases](https://img.shields.io/github/downloads/dreamnettech/dreamtime/v1.4.5/total)](https://github.com/dreamnettech/dreamtime/releases/tag/v1.4.5)

### Fixes

- **Updater:** Fixed the download percentage when the server does not report the file size.
- **Settings:** Fixed error when changing settings quickly on systems with slow hard drive.

### Features

- **Preferences:** Now you can set the range of the `Boobs` to 0 to skip their generation. #170

### Improvements

- 🏃‍♀️ DreamTime now starts faster.
- **Updater:** Now will download the portable version if you are using it.
- Some QoL changes and design improvements.

---

## v1.4.4

[![GitHub Releases](https://img.shields.io/github/downloads/dreamnettech/dreamtime/v1.4.4/total)](https://github.com/dreamnettech/dreamtime/releases/tag/v1.4.4)

### Fixes

- **Photo editor:** The color palette did not have the colors for the maskfin and the brush painted with some opacity.
- **Nudification:** Photos with special characters in their name always failed.
- **Updater:** The updater for DreamTime does not work and the design is displayed incorrectly.
- The portable version did not include the improvements that had been announced in the previous version.

### Features

- 🏃‍♀️ **Portability:** The portable version now saves important files in the folder where it is extracted, so you can take it anywhere without additional steps.

### Improvements

- The green color has been added in the editor's color palette.

### Others

- Alert Center: `Windows Media Feature Pack` alert on non-Windows operating systems has been removed.

---

## v1.4.3

![GitHub Releases](https://img.shields.io/github/downloads/dreamnettech/dreamtime/v1.4.3/total)

:::danger Do not download
This version has a bug that would prevent the application from working properly.
:::

### Fixes

- It was not possible to nudify photos on a Mac with NVIDIA GPU. (Now CPU is always forced)
- Sometimes a false error message was displayed indicating "problem loading the photo" when the nudification failed.
- Alert messages are now displayed for unusual errors.

### Features

- ⚠ Alert Center. A section that helps you identify major problems that may prevent the correct operation of the application.
- ~~🏃‍♀️ Portability. The portable version now saves important files in the folder where it is extracted, so you can take it anywhere without additional steps.~~

### Improvements

- A button called `Open photo` has been added in the results to open the nudified photo in your photo viewer without having to save it.
- The `Add to queue` button has been removed from the Finished queue to avoid annoying missclicks.
- ~~The green color has been added in the editor's color palette.~~
- Design and texts improvements to make the application more interactive.
- Improved tooltips, tutorials and alerts to help identify problems or know what is happening.
- Now the last upload method used is saved.

### Others

- Basic real time statistics are now shown on the `About` section.
- The default location of the `Models` folder has been changed to avoid problems with operating systems of other languages.
- The default upload method is now `Instagram`.

---

## v1.4.2

[![GitHub Releases](https://img.shields.io/github/downloads/dreamnettech/dreamtime/v1.4.2/total)](https://github.com/dreamnettech/dreamtime/releases/tag/v1.4.2)

### Fixes

- Previews stopped working if the `Models` folder had spaces or special characters.
- DreamTime did not force the update of DreamPower if an incompatible version is installed.
- #162 In case of not having a stable Internet connection in the first execution, the application will restart infinitely forcing the user to kill the processes or restart the computer.

### Features

- 🎨 **New uploader look.** A cleaner and organized design to upload photos from the Internet, Instagram and alternative methods.
- ⬅➡ **Queue position.** A new option has been added in the application settings to select which side you want the Queue to be on. (right or left)

### Improvements

- Background image has been removed for a cleaner design.
- Previews on the results page and in the Queue are now fully displayed regardless of the dimensions of the photo.
- The Maskfin preview is now smaller so that the close button of the modal can be visible on small screens.
- #164 The ~~bug~~ feature that allows to set the Nipple/Aerola option to 0 has been restored. This allows some users to skip the nipples generation and add a more realistic nipples later with external programs. 
- A help link has been added in the Updater to obtain information on how to install updates manually in case of a problem.
- #158 Tutorials with relevant information for the editor and the cropper have been added.
- The color palette of the editor now has the colors of the maskfin layers by default.
- More  informative messages about problems with DreamPower have been added.

### Others

- 💀 The BadTime mini-game has been updated with minor improvements.
- 👁 DreamPower has been updated to fix problems when exporting the maskfin in DreamTime.
