---
title: Google Colab
---

![](/img/previews/screely-1600043664250.png)

Google Colab allows you to run Pyton applications from the web using Google's servers.

This guide will show you how to use DreamPower in Google Colab to nude photos from its interface.

## Getting started

Below are different versions of DreamPower in Google Colab:

[![](https://img.shields.io/badge/v1.2.12-by%20Ptibouc77-4285F4?logo=google&logoColor=white&style=for-the-badge)](https://colab.research.google.com/gist/Ptibouc77/cd7da30a967b301f2d7a042ad6f06886/dreampower-v1-2-8-updated-from-1-2-5-from-firstdee.ipynb)

[![](https://img.shields.io/badge/v1.2.5-by%20FirstDee-4285F4?logo=google&logoColor=white&style=for-the-badge)](https://colab.research.google.com/gist/FirstDee/c3a94ff37e0561e597b65160aabbbc07/dreamtime-v1.ipynb)

:::info
Google Colab may not work correctly if you use a web browser or extension that blocks third-party cookies or trackers.
:::

Next you will see a document:

![](/img/previews/screely-1600056608365.png)

- On the left side you can find the table of contents that divides the document into sections and allows you to navigate through it easily.
- In the other side you will find the document as such, each section contains one or more cells (or sub-sections) and each cell will run Python code necessary for the operation of the algorithm, so **it is important that the document and each cell is executed from top to bottom**.

## Settings

![](/img/previews/screely-1600044972772.png)

Before running the document/algorithm you will most likely want to set the nudification preferences such as boobs size, nipples, etc. For this go to the last section `Processing` and open it to show the cells inside, in this case we will focus on the first one: `Processing Settings`.

In this cell you can find the different options for nudification, to get more information and get familiar with each option please visit the guide about the [Photo Preferences](/docs/guide/photo-panel#photo-preferences). You can also ignore all options except for body parts like `boob_size, areola_size, etc`.

:::info
- Options like `boob_step` are only valid if you set `runs_mode` to `Increase by Step`.
- Options like `boob_min` and `boob_max` are only valid if you set `runs_mode` to `Randomize`.
:::

:::info
If you set `resize_mode` to `Overlay` you can use [this website](https://fengyuanchen.github.io/cropperjs/) to find the values of `overlay_x` and `overlay_y`. Please visit the [Overlay guide](/docs/guide/photo-panel#overlay) for more information.
:::

## Nudification

Once everything is prepared, it's time to dream, so instead of running each cell one by one, click on `Runtime > Run All` in the top bar of the document.

This will start the process by first creating a virtual machine on Google's servers that will take care of running each cell, now relax, go get something to drink as this process will take a few minutes...

The process will pause at the `Upload Images for Processing` cell where a field will appear to upload the photo you wish to nudify.

![](/img/previews/screely-1600054890622.png)

:::info
If the cell has errors click on the `Run cell` button (Play button) to try to fix the problems. Also remember to disable any extensions that block third party cookies.
:::

Once you have uploaded the photo scroll down the document and execute the `Upload Custom Mask` and `Processing Settings` cells by clicking on the `Run cell` button of each one.

![](/img/previews/screely-1600055476120.png)

![](/img/previews/screely-1600055295877.png)

Finally click on the `Run cell` button of `Generate Images` and you will see the progress of the nudification and the final fake nude.

![](/img/previews/screely-1600056150120.png)

To nudify a new photo click on the `Run cell` button in `Upload Images for Processing` and repeat the process from that point. Enjoy DreamPower!
