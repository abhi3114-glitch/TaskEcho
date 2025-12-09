# TaskEcho

TaskEcho is a privacy-focused, offline-first time tracking application designed to help users log their work activities through hourly check-ins. Instead of requiring users to remember to start and stop timers, TaskEcho proactively prompts them to record what they worked on during the previous hour.

## Features

- **Hourly Notifications**: The application runs a background check and sends a browser notification every hour, reminding the user to log their activity.
- **Efficient Logging**: Users can quickly select from predefined tags (e.g., Coding, Meeting, Design) or enter a custom description.
- **Daily Timeline**: A vertical timeline view displays all entries for the current day, allowing users to review their work history.
- **Insights Dashboard**: A dedicated statistics page visualizes how time is distributed across different categories and tracks context switching frequency.
- **Offline Storage**: All data is stored locally in the browser's LocalStorage. No account creation or internet connection is required for core functionality.
- **Data Export**: Users can export their complete logging history as a JSON file for backup or external analysis.

## Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS with CSS Variables for a dark mode theme
- **Icons**: Lucide React
- **State Management**: React Hooks and LocalStorage

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhi3114-glitch/TaskEcho.git
   ```

2. Navigate to the project directory:
   ```bash
   cd TaskEcho
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000 in your browser.

## Usage Guide

1. **Permissions**: Upon first launch, allow browser notifications when prompted. This is essential for the hourly reminders to function.
2. **Logging Work**: When the hour changes, or whenever you wish to log work, enter a description in the "What are you working on?" field, select a category tag, and click "Log Entry".
3. **Reviewing Data**: Scroll down on the main dashboard to see the day's timeline. Visit the "Insights" tab via the header to see aggregate statistics.
4. **Exporting**: Click the download icon in the header to save your data to a JSON file.

## License

This project is open source and available under the MIT License.
