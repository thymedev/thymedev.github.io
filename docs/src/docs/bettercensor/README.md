---
description: "The best bot for all your censoring needs. 100% free, forever. BetterCensor is the powerful Discord moderation bot that automatically keeps your servers clean, with Google Sheets Integration, for powerful editing, and sharing anywhere."
---

# BetterCensor

<div class="text-xl">The best bot for all your censoring needs. 100% free, forever.</div>

BetterCensor is the powerful Discord moderation bot that automatically keeps your servers clean, with Google Sheets Integration, for powerful editing, and sharing anywhere

## Why its awesome
- Free
- Advanced integration with Google sheets to easily create, edit and share censor lists
- Webhook based censoring to make censoring seemless
- Options for ###, \*\*\*, or  
![spoilers](https://cdn.discordapp.com/attachments/854799058144854059/859471285705113620/ezgif-2-80ca74867615.gif)


## Help
prefix: **`c`**

**`chelp`**:
> Displays link to this document.
> 
**`cset [https://docs.google.com/spreadsheets/d/.../]`**
> Sets this server's custom censor list. Words in this Google sheets will be censored.

**`cupdate`**
> Updates this server's censor list if it exists.

**`coverride [t,f]`**
> Sets this server's override settings.
> If set to true, only this server's google sheet's censor list will be used.
> If set to false, then this server's google sheets censor list will be used in conjunction with the default list [here](https://raw.githubusercontent.com/thymedev/censor-bot/master/DefaultList.json).

**`cwith [#, *, |, or d]`**
> Sets the censoring options to ###, ***, spoliers, or deleting the message.
> ex: `This is a censored term --> This is a *************`

**`cignore [#channel, #channel1, ...]`**`
> Ignores mentioned channels.


**`cignoreremove [#channel, #channel1, ...]`**`
> Listens to mentioned channels.


## Something is not working!
### The easiest way to ensure that BetterCensor has the right permissions is by reinviting it [here](https://discord.com/api/oauth2/authorize?client_id=859265696076791819&permissions=537259120&scope=bot)

## How do I remove a Google Sheet?
Delete all the content in the linked Google Sheet, do **`cupdate`**, and simply leave it at that. You can delete the Google Sheet if you want, and it won't update until you try to do **`cupdate`**.

### [Support server](https://thymedev.github.io/discord)
