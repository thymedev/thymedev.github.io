---
title: "msgmover | Coffee Series"
description: "The Discord Bot for Moving Messages Between Channels and Servers. Copy messages from one channel to another, or continuously relay messages to other channels/servers. Make moving messages between channels/servers easy and integrated, using webhooks."
---

<img src="./msgmover.jpg" alt="logo" class="w-24 rounded">

# Msgmover

<CogHero cog="msgmover" :desc="$frontmatter.description" />

<div class="text-center py-6">
  <h3>The Discord Bot for Moving Messages Between Channels and Servers</h3>
  <p>
    <a href="/coffee/start">Add to your Discord ></a>
  </p>
  <p>
    <a href="/discord">Join the Support Discord ></a>
  </p>
</div>


## What is msgmover?

Make moving messages between channels/servers easy and integrated, using webhooks.

- **msgcopy**: Copy messages from one channel to another. Move whole conversations, or merge channels easily with re-uploaded attachments, bot messages, and usernames/profiles replicated in full. Includes timestamp spacers.  

- **msgrelay**: Relay messages from one channel to another channel/server. Forward messages between different servers to bridge communities and share content. Supports:
  - Usernames/profile pics, replies, attachments (files/images/video), and embeds (bot command replies)
  - Edited/deleted messages
  - Forwarding to multiple webhooks/channels 


## How does it work?

Each user's profile picture, nickname/username, and message is copied and pasted into the new channel/server.

**Currently supported:**
- Embeds
- Attachments (Files/images/videos)
- Replies
- Message edits
- Message deletes

**Not supported yet:**
- Reactions


## Why?

The code was designed to be privacy-respecting from the ground up:
- Only webhook links and their configs, as set by server owners, are stored per guild/server
- All messages are replicated with user profiles on for content credits, but can be masked under the webhook name for anonymity
- Edited/deleted message support was built such that the bot does not need to log message/webhook IDs after a message is "done"

Despite Discord Webhooks growing in features, all relay-like bots seem to have disappeared into the void.

My hope for Msgmover was to:
- Migrate messages, for merging dead channels and moving conversations to other channels
  - No more mods copy-pasting half the chat into another channel
- Replicate all messages (including bot replies/embeds) as sent in chats
  - Pretty-print all the messages, **including bot replies/embeds**, which may be taboo for some, but required as an essential part of this feature
- Forward all messages (including bot replies/embeds) to multiple channels
  - Discord has finally introduced announcement channels, but they still don't work for bot messages yet (ie. an RSS feed from a bot + a chat room shared between multiple servers)

This bot was partly inspired by an old 'Relays' cog. However, this code has no affiliation with, no codebase relations to, and integrates in a completely different way from, any previous relay code I know of.


### Privacy of moved messages

Msgmover was initially created as a quick way to move messages, preserving all messages as they originally appeared in the chat.

What Msgmover **can** guarantee is that messages are moved, and nothing else:
- There is no database logging any user data, no message IDs
- Messages use server nicknames by default (hiding real usernames)
- Msgrelay checks back on messages after x seconds, syncing message edits/deletes, allowing for a quick "undo" feature
- All code is open-source

What Msgmover **cannot** guarantee is that server owners/admins use this bot responsibly:
- If a server owner/admin wanted to move a conversation, the common solution is already to copy-paste half the chat and paste it elsewhere -- Msgmover only makes the chat look nicer.
- The concept of asking for server owners/admins to optionally delete messages is also already standard (ie. when there is a server raid), and can be extended by asking them to delete moved messages.
- Server owners/admins who do not respect user freedoms already use moderation bots that log edited/deleted messages, stored in Discord forever without your ability to know about it or delete it.

Of course, the discussion on moved messages is irrelevant in the first place if you are using Msgmover in a small server where everyone has admin permissions (ie. with friends).


## Bot Commands

Type `[p]msgmover` to see everything **msgmover** can do.

- `[p]msgcopy`  
Copy existing messages to a new server  

- `[p]msgrelay`  
Forward new messages to a new channel/server
