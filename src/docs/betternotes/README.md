---
title: BetterNotes
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

<br />

## Commands

BetterNotes uses **slash commands and forms**. The old `n...` commands have been replaced. Your existing notes and sharing permissions are preserved.

| Command | What it does |
| --- | --- |
| `/note new` | Opens a form for the title and note content |
| `/note read title` | Displays an owned or shared note; use `page` for long notes |
| `/note edit title` | Opens the editor; click **Open editor** to fill in the form |
| `/note list` | Lists notes you own or can access; use `page` for more results |
| `/note share title user` | Shares your note; optional `user2`–`user5` add more people |
| `/note remove title user` | Removes users' access to your note |
| `/note info title` | Shows your note's owner, sharing details, and edit time |
| `/note delete title` | Asks you to confirm before deleting your note |
| `/note help` | Shows command help |
| `/note invite` | Gets the bot invite link |

Choose a note from autocomplete, especially when multiple notes have the same title. Titles with spaces work without quotation marks.

Shared users can read and edit notes. Only the owner can delete, share, remove access, or view sharing details. Share/remove commands support up to five users at a time; repeat the command to manage more users.

### Editing

`/note edit` defaults to **replace all content**, with your current content filled into the form. Use the optional `mode` to:

- Append text or append a new line.
- Replace a line, using the `line` option (line numbers start at 1).
- Remove the first occurrence of some text.
- Remove a line, using the `line` option and typing `REMOVE` to confirm.

Forms expire after 15 minutes or a bot restart. If someone edits a note while your form is open, reopen the editor to use the latest content. If your access is removed, the form cannot save changes.

## Something is not working!

### I want to use this privately

Use the slash commands in a direct message with the bot. `/note read` displays the note in the channel where you run it, so use a DM for private reading. Other replies are private to you. Notes are tied to your account and can be accessed across servers.

### The slash commands are not showing

Try [reinviting BetterNotes](https://thymedev.github.io/invite/betternotes) to authorize its slash commands, then reopen Discord's command picker.

### My note is too long for the editor

New notes and form submissions support up to 4000 characters; titles support 200 characters. Existing longer notes are preserved: read them using `/note read title page`, or use append/remove/line-edit modes when the full note is too long for one form.

### I want to export my notes

Use `/note list` and `/note read` to copy your notes. Long notes have numbered pages; copy every page.

### I want to attach a file

Upload the file to Discord or another file service, then save its URL in your note. BetterNotes stores text rather than file attachments.

### Syntax

Normal Discord Markdown is supported in note displays. `[text](link)` can be used to add a link.

## More Info

### Suggestions and bug reports

Please direct suggestions and bug reports to [our support server](https://thymedev.github.io/discord).
