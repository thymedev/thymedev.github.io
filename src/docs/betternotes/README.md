---
description: "The bot built for one job: to make note taking and sharing even more powerful"
meta:
  - name: og:image
    content: "./betternotes.png"
  - name: og:image:width
    content: 72
---

<img src="./betternotes.png" alt="logo" class="w-24">

# BetterNotes
<div class="text-xl">The best bot for all your note taking needs. 100% free, forever.</div>
The bot built for one job: to make note taking and sharing even more powerful

## [Support server](https://thymedev.github.io/discord)
## [Invite me](https://thymedev.github.io/invite/betternotes)

## Commands
prefix: **`n`**
To create multiple work note titles, use `""`

**`nnew [title] [content]`**: 
> Creates a new note with [title] and [content]
> ex: `nnew "my note" This note title has 2 words!`
> ex: `nnew note1 This is note title has only 1`

**`nread [title]`**
> Opens the note with [title]

**`ndelete [title]`**
> Deletes the note with [title]
> Only the note owner can do this

**`nedit [title]`**
> Provides the edit menu to edit a note
> 3 options:
> - editing: Add new content
> - replacing: Replace lines or words
> - removing: Remove lines or words 

**`nlist`**
> List all the notes you have access to

**`nshare [title] [@user1 @user2 ...]`**
> Shares the note with [title] to all users mentioned
> Notes which are shared can be edited by all
> Only the note owner can do this

**`nremove [title] [@user1 @user2 ...]`**
> Removes access of note with [title] to all users mentioned
> Only the note owner can do this

**`ninfo [title]`**
> Displays information about a note
> The owner, who it is shared to, and the time of last edit
> Only the note owner can do this

**`nhelp`**
> Displays helpful information (basically this)

## Something is not working!

### I want to use this privately
Use the commands in the direct message channel with the bot. All commands are still supported.

### My notes are not showing
If you set your notes to too many characters, Discord display the embed.
Try to limit large blocks of text (>2000 characters) to multiple notes.

### For some reason the bot is not working
If the bot is not working, try reinviting it [here](https://thymedev.github.io/invite/betternotes).

### I want to export my notes
You can easily copy-paste your notes out of Discord and save them elsewhere. Use `nlist` to display your notes list and `nread` to open each note. Each note will be displayed in an easy-to-copy Discord embed.

### I want to attach a file
We recommend uploading your file to Discord, and then copying the file/download URL to save into your note.

You can also upload to another platform if you need more than 8MB, ie. [Google Drive](https://drive.google.com), [Wormhole](https://wormhole.app/), etc. and paste that link into your BetterNotes note.

### Syntax
Because this is an embed, all normal discord markdown is supported. [read more](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-)
`[text](link)` can be used to apply the link to the text.

## More Info
### Suggestions and bug reports
Please direct all suggestions and bug reports to [our support server](https://thymedev.github.io/discord)

### Future plans
Better support for shared files
