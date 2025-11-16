# Changelog

All notable changes to the HTML to PUG Converter project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- **Color Attributes Ordering**: Color-related attributes (fill, stroke, color, stop-color, flood-color, lighting-color) now always appear first in PUG output for better consistency and readability
- **Defs Block Positioning**: SVG `<defs>` elements are now automatically positioned first among SVG children, following SVG best practices
- **Auto-Remove Matching Rects**: Automatically removes `<rect>` elements whose id or class attributes match the filename (without extension), cleaning up common SVG artifacts
- **PUG Size Variables Toggle**: New toggle in SVGO Settings to convert width and height attributes to PUG variables when they match viewBox dimensions
  - Example: `width='300' height='250'` becomes `width=width height=height` with `-var width = 300` and `-var height = 250` at the top
- **Comprehensive Hover Hints**: All 50+ SVGO plugin toggles and global settings now feature descriptive tooltips explaining their function
  - Multipass: "Runs optimization up to 10 times until no further improvements are made (vs single pass)"
  - PUG Size Vars: "Converts width and height attributes to PUG variables when they match viewBox dimensions"
  - Each plugin toggle includes detailed explanation of its optimization behavior

### Changed
- **SVGO Configuration**: Enhanced `svgo-config.js` with description property for all plugin options
- **Toggle Rendering**: Updated `renderToggle` function to support title parameter for native HTML tooltips
- **Global Settings Structure**: Refactored global toggle items to include description metadata

### Removed
- **Prettify Markup Toggle**: Removed non-functional "Prettify markup" toggle that had no effect on final output
  - The prettify option was rendered obsolete since output is immediately converted to PUG format
  - Cleaned up from UI, config defaults, and build configuration

### Fixed
- **Multipass Verification**: Confirmed Multipass toggle is working correctly (runs up to 10 optimization passes vs 1)

### Technical Improvements
- **HTML-to-Jade Library**: Modified `Writer.prototype.tagAttr` to implement color-first attribute ordering
- **HTML-to-Jade Library**: Enhanced `Converter.prototype.children` to sort elements with defs-first logic
- **App Component**: Added `convertHtmlToJade` method with fileName parameter support
- **App Component**: Implemented `removeMatchingRects` method using DOMParser for targeted element removal
- **App Component**: Created `applyPugSizeVarsTransform` method for intelligent size variable conversion
- **Storage Management**: Added `PUG_SIZE_VARS_STORAGE_KEY` constant for persistent user preferences
- **State Management**: Integrated `enablePugSizeVars` state property with proper persistence and handlers

## Previous Releases

### Key Features from Earlier Versions
- Multi-file tab support with drag-and-drop reordering
- Real-time HTML ↔ PUG conversion with syntax highlighting
- Split-pane editor interface with resizable panels
- SVGO integration with 50+ configurable optimization plugins
- SVG ID to Class conversion
- Comprehensive keyboard shortcuts
- Local storage persistence for settings and open files
- Paste files directly from Finder
- Adjustable indentation (spaces/tabs, 1-6 size)
- Draggable floating controls panel
- Dark theme with Ayu Mirage color scheme

---

For more information, visit the [GitHub repository](https://github.com/vb-banners/html2pug).
