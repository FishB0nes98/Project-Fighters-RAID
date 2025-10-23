# Project Fighters: RAID - Game Client Releases

<div align="center">

![Project Fighters Launcher](https://img.shields.io/badge/Launcher-v1.0.0-blue.svg)
![Game Version](https://img.shields.io/badge/Game-v0.9.0-green.svg)
[![Discord](https://img.shields.io/badge/Discord-Join%20Us-7289da.svg)](https://discord.gg/9WRXwjzMSB)

**Official distribution repository for Project Fighters: RAID game client**

[Download Latest Release](https://github.com/FishB0nes98/Project-Fighters-RAID/releases) • [Discord](https://discord.gg/9WRXwjzMSB) • [Main Repository](https://github.com/FishB0nes98/RAID---Project-Fighters)

</div>

---

## 📥 Quick Start

### Using the Launcher (Recommended)

The easiest way to play Project Fighters: RAID:

1. **Download the Launcher**
   - Get `Project Fighters Launcher.exe` from the [latest release](https://github.com/FishB0nes98/Project-Fighters-RAID/releases)

2. **Run the Launcher**
   - Open `Project Fighters Launcher.exe`
   - The launcher will check for the latest game version automatically

3. **Install the Game**
   - Click "Install Game" if it's your first time
   - Choose where you want to install the game
   - Wait for download and installation to complete

4. **Play!**
   - Click "LAUNCH GAME" to start playing
   - The launcher will auto-detect future updates

### Manual Installation

If you prefer to install manually:

1. Download the latest `Project-Fighters-RAID-vX.X.X.zip` from [Releases](https://github.com/FishB0nes98/Project-Fighters-RAID/releases)
2. Extract the ZIP file to your desired location
3. Run `ProjectFightersRAID.exe`

---

## 🎮 What is Project Fighters: RAID?

**Project Fighters: RAID** is a strategic turn-based RPG fighting game featuring:

- **150+ Unique Characters** with diverse abilities
- **Multiple Game Modes** - Story, PvP, Tournaments, Events
- **Deep Combat System** - Turn-based strategy with ability management
- **Progression Systems** - Leveling, talents, equipment, and customization
- **Reaction Abilities** - Interrupt enemy attacks with perfect timing


---

## 🔄 Updates & Versions

### Current Version: 0.9.0

This repository hosts **packaged game client releases**. The game is automatically updated through the launcher.

### Update Process

1. **Automatic Detection**
   - Launcher checks this repository for new releases on startup
   - Compares your installed version with the latest release

2. **One-Click Updates**
   - Click "Download Update" when available
   - Game downloads and installs automatically
   - Your save data and settings are preserved

3. **Version Tracking**
   - Your installed version is saved locally
   - Launcher always shows current vs. available version

---

## 📋 System Requirements

### Minimum
- **OS:** Windows 10 (64-bit)
- **RAM:** 4 GB
- **Storage:** 2 GB available space
- **Graphics:** Integrated graphics
- **Internet:** Required for download and PvP

### Recommended
- **OS:** Windows 10/11 (64-bit)
- **RAM:** 8 GB
- **Storage:** 4 GB available space
- **Graphics:** Dedicated GPU
- **Internet:** Broadband connection

---

## 📰 News & Announcements

Check the launcher's news panel for:
- Patch notes and balance changes
- New character announcements
- Event schedules
- Tournament information
- Community updates

---

## 🛠️ Launcher Features

### Auto-Update System
- Checks GitHub releases automatically
- Downloads and extracts game files
- Manages game installation directory
- Preserves settings between updates

### News Feed
- Real-time announcements from developers
- Patch notes and update information
- Community events and tournaments

### Smart Game Detection
- Automatically finds game executable
- Supports custom installation directories
- Manual game location option

### Clean Interface
- Modern, frameless design
- Minimal resource usage
- Quick launch functionality

---

## 🔧 Troubleshooting

### Launcher Won't Start
- Ensure you have Windows 10 or newer
- Try running as administrator
- Check antivirus isn't blocking it

### Game Won't Download
- Check your internet connection
- Ensure you have enough disk space (2+ GB)
- Try selecting a different installation directory
- Temporarily disable antivirus (if blocking)

### "Game Not Found" Error
- Use the "Locate Game Manually" button
- Point it to `ProjectFightersRAID.exe`
- Reinstall using the launcher

### Update Not Detected
- Click the refresh/check button in launcher
- Ensure you're connected to the internet
- Try restarting the launcher

### Game Crashes on Launch
- Update your graphics drivers
- Ensure .NET Framework is installed
- Check system requirements
- Report the issue on Discord

---

## 📦 For Developers

### Release Structure

Each release should include:

```
Project-Fighters-RAID-vX.X.X.zip
├── ProjectFightersRAID.exe
├── resources/
│   └── app.asar
├── locales/
│   └── (language files)
├── chrome_*.pak
├── *.dll files
└── other Electron dependencies
```

### Creating a Release

1. **Build the game client**
   ```bash
   npm run desktop:make
   ```

2. **Create ZIP archive**
   - Include ALL files from the packaged output
   - Do NOT include a parent folder in the ZIP
   - Name it: `Project-Fighters-RAID-vX.X.X.zip`

3. **Create GitHub Release**
   - Tag: `vX.X.X` (e.g., `v0.9.0`)
   - Title: `Project Fighters RAID vX.X.X`
   - Description: Include patch notes
   - Attach the ZIP file

4. **Optional: Add version.txt**
   - Place in game root directory
   - Contains version number only: `0.9.0`

### News Updates

Create `news.json` in repository root:

```json
{
  "items": [
    {
      "title": "Version 0.9.0 Released!",
      "date": "2025-10-23",
      "content": "New features, balance changes, and bug fixes!"
    }
  ]
}
```

---

## 🤝 Community & Support

### Get Help
- **Discord:** [https://discord.gg/9WRXwjzMSB](https://discord.gg/9WRXwjzMSB)
- **Report Bugs:** [Main Repository Issues](https://github.com/FishB0nes98/RAID---Project-Fighters/issues)
- **Game Wiki:** Coming soon

### Join the Community
- Discuss strategies and team builds
- Share character guides
- Participate in tournaments
- Provide feedback and suggestions
- Report bugs and issues

---

## 📄 Repository Purpose

This repository serves as the **distribution hub** for Project Fighters: RAID game clients:

- ✅ **Releases** - Packaged game builds
- ✅ **News** - Announcements and updates
- ✅ **Downloads** - Latest stable versions
- ❌ **Source Code** - See [main repository](https://github.com/FishB0nes98/RAID---Project-Fighters)

---

## 🔗 Links

- **Main Repository:** [RAID---Project-Fighters](https://github.com/FishB0nes98/RAID---Project-Fighters)
- **Discord Community:** [Join Here](https://discord.gg/9WRXwjzMSB)
- **Latest Release:** [Download](https://github.com/FishB0nes98/Project-Fighters-RAID/releases/latest)
- **Launcher Source:** Available in main repository under `/launcher`

---

## 📜 Version History

### v0.9.0 (Current)
- Reaction ability system
- Enhanced PvP balance
- 150+ characters
- Talent system overhaul
- Visual improvements

See [Releases](https://github.com/FishB0nes98/Project-Fighters-RAID/releases) for complete history.

---

## 📝 License

Project Fighters: RAID © 2025 Project Fighters Team

See the [main repository](https://github.com/FishB0nes98/RAID---Project-Fighters) for license details.

---

<div align="center">

**[Download Now](https://github.com/FishB0nes98/Project-Fighters-RAID/releases)** • **[Join Discord](https://discord.gg/9WRXwjzMSB)** • **[Main Repo](https://github.com/FishB0nes98/RAID---Project-Fighters)**

Made with ❤️ by the Project Fighters Team

</div>
